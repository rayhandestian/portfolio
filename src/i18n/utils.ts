import { en } from './translations/en';
import { id } from './translations/id';

export const languages = {
    en: 'English',
    id: 'Bahasa Indonesia',
};

export const defaultLang = 'en';

export const ui = {
    en,
    id,
} as const;

export function getLanguageFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function getLocalizedPath(path: string, lang: string) {
    const segments = path.split('/').filter(Boolean);

    // If first segment is a known locale, remove it
    if (segments[0] in ui) {
        segments.shift();
    }

    // If new lang is not default, prefix it
    if (lang !== defaultLang) {
        segments.unshift(lang);
    }

    return '/' + segments.join('/');
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: string) {
        const keys = key.split('.');
        let translation: any = ui[lang];

        for (const k of keys) {
            if (translation[k] === undefined) {
                // Fallback to English if key missing in specific language
                let fallback: any = ui[defaultLang];
                for (const fk of keys) {
                    if (fallback[fk] === undefined) return key;
                    fallback = fallback[fk];
                }
                return fallback;
            }
            translation = translation[k];
        }

        return translation;
    };
}
