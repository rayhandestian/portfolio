/**
 * Contact Form API Worker
 * Handles form submissions with Turnstile verification and Resend email delivery
 */

interface Env {
    RECIPIENT_EMAIL: string;
    SENDER_EMAIL: string;
    ALLOWED_ORIGIN: string;
    RESEND_API_KEY: string;
    TURNSTILE_SECRET_KEY: string;
}

// Additional allowed origins for development
const DEV_ORIGINS = ['http://localhost:4321', 'http://localhost:3000', 'http://127.0.0.1:4321'];

interface ContactRequest {
    name: string;
    email: string;
    message: string;
    turnstileToken: string;
}

interface TurnstileResponse {
    success: boolean;
    'error-codes'?: string[];
}

interface ResendResponse {
    id?: string;
    message?: string;
}

// Rate limiting: 5 requests per IP per hour
const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW = 60 * 60; // 1 hour in seconds

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        const origin = request.headers.get('Origin') || '';
        const allowedOrigin = getAllowedOrigin(origin, env.ALLOWED_ORIGIN);

        // CORS preflight
        if (request.method === 'OPTIONS') {
            return corsResponse(allowedOrigin, new Response(null, { status: 204 }));
        }

        // Only accept POST
        if (request.method !== 'POST') {
            return corsResponse(
                allowedOrigin,
                new Response(JSON.stringify({ error: 'Method not allowed' }), {
                    status: 405,
                    headers: { 'Content-Type': 'application/json' },
                })
            );
        }

        try {
            // Rate limiting
            const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
            const rateLimitResult = await checkRateLimit(clientIP, ctx);
            if (!rateLimitResult.allowed) {
                return corsResponse(
                    allowedOrigin,
                    new Response(
                        JSON.stringify({
                            error: 'Too many requests. Please try again later.',
                            retryAfter: rateLimitResult.retryAfter,
                        }),
                        {
                            status: 429,
                            headers: { 'Content-Type': 'application/json' },
                        }
                    )
                );
            }

            // Parse request body
            const body: ContactRequest = await request.json();

            // Validate required fields
            const validationError = validateRequest(body);
            if (validationError) {
                return corsResponse(
                    allowedOrigin,
                    new Response(JSON.stringify({ error: validationError }), {
                        status: 400,
                        headers: { 'Content-Type': 'application/json' },
                    })
                );
            }

            // Verify Turnstile token
            const turnstileValid = await verifyTurnstile(body.turnstileToken, clientIP, env.TURNSTILE_SECRET_KEY);
            if (!turnstileValid) {
                return corsResponse(
                    allowedOrigin,
                    new Response(JSON.stringify({ error: 'Captcha verification failed. Please try again.' }), {
                        status: 400,
                        headers: { 'Content-Type': 'application/json' },
                    })
                );
            }

            // Send email via Resend
            const emailResult = await sendEmail(body, env);
            if (!emailResult.success) {
                return corsResponse(
                    allowedOrigin,
                    new Response(JSON.stringify({ error: 'Failed to send message. Please try again later.' }), {
                        status: 500,
                        headers: { 'Content-Type': 'application/json' },
                    })
                );
            }

            return corsResponse(
                allowedOrigin,
                new Response(JSON.stringify({ success: true, message: 'Message sent successfully!' }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                })
            );
        } catch (error) {
            console.error('Error processing request:', error);
            return corsResponse(
                allowedOrigin,
                new Response(JSON.stringify({ error: 'An unexpected error occurred.' }), {
                    status: 500,
                    headers: { 'Content-Type': 'application/json' },
                })
            );
        }
    },
};

function getAllowedOrigin(requestOrigin: string, configuredOrigin: string): string {
    // Check if request origin matches configured production origin
    if (requestOrigin === configuredOrigin) {
        return configuredOrigin;
    }
    // Check if request origin is a dev origin
    if (DEV_ORIGINS.includes(requestOrigin)) {
        return requestOrigin;
    }
    // Default to configured origin (will cause CORS error for invalid origins)
    return configuredOrigin;
}

function corsResponse(allowedOrigin: string, response: Response): Response {
    const headers = new Headers(response.headers);
    headers.set('Access-Control-Allow-Origin', allowedOrigin);
    headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type');
    headers.set('Access-Control-Max-Age', '86400');

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
    });
}

function validateRequest(body: ContactRequest): string | null {
    if (!body.name || typeof body.name !== 'string' || body.name.trim().length === 0) {
        return 'Name is required';
    }
    if (body.name.length > 100) {
        return 'Name is too long (max 100 characters)';
    }

    if (!body.email || typeof body.email !== 'string') {
        return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
        return 'Invalid email format';
    }

    if (!body.message || typeof body.message !== 'string' || body.message.trim().length === 0) {
        return 'Message is required';
    }
    if (body.message.length > 5000) {
        return 'Message is too long (max 5000 characters)';
    }

    if (!body.turnstileToken || typeof body.turnstileToken !== 'string') {
        return 'Captcha token is required';
    }

    return null;
}

async function verifyTurnstile(token: string, ip: string, secretKey: string): Promise<boolean> {
    const formData = new FormData();
    formData.append('secret', secretKey);
    formData.append('response', token);
    formData.append('remoteip', ip);

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: formData,
    });

    const result: TurnstileResponse = await response.json();
    return result.success;
}

async function sendEmail(data: ContactRequest, env: Env): Promise<{ success: boolean }> {
    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: env.SENDER_EMAIL,
            to: env.RECIPIENT_EMAIL,
            subject: `Portfolio Contact: ${data.name}`,
            reply_to: data.email,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(data.message)}</p>
      `,
        }),
    });

    if (!response.ok) {
        const error: ResendResponse = await response.json();
        console.error('Resend API error:', error);
        return { success: false };
    }

    return { success: true };
}

function escapeHtml(text: string): string {
    const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
}

// Simple in-memory rate limiting using a global Map
// Note: This resets on worker restart, but works for basic protection
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

async function checkRateLimit(
    ip: string,
    _ctx: ExecutionContext
): Promise<{ allowed: boolean; retryAfter?: number }> {
    const now = Math.floor(Date.now() / 1000);
    const existing = rateLimitMap.get(ip);

    if (!existing || now > existing.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return { allowed: true };
    }

    if (existing.count >= RATE_LIMIT) {
        return { allowed: false, retryAfter: existing.resetTime - now };
    }

    existing.count++;
    return { allowed: true };
}
