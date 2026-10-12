---
title: "A Past Made of Text"
description: "Last Thursdayism, self-knowledge, and the problem of trust in language models."
pubDate: 2026-10-12
---

## Abstract

A language model can be handed a conversation it never took part in and carry it on as if it were its own. That makes Last Thursdayism, the idea that the world was created recently with a ready-made past, a good starting point for thinking about memory in these systems. The comparison goes too far, though, if it suggests that models know nothing about themselves or that a fake history can never be spotted. Research on introspection, prefilled conversations, identity confusion, and knowledge of time gives a mixed picture. Some models can predict their own behavior or notice unusual activity inside themselves. None of that tells them who wrote an earlier message, which model is running, or whether a stated date is right. This essay argues that the main issue is provenance: how a claim connects to the event it describes. An assistant whose history can be trusted needs both useful self-knowledge and records whose origin can be checked.

## 1. The conversation that never happened

Imagine opening a conversation and finding an earlier assistant message: "I checked the document yesterday and approved the change." It reads naturally, fits the discussion, and sits under the assistant's role. But suppose an application wrote it and inserted it. What could the model answering next know about the difference?

This happens in practice. Anthropic's Messages API documentation lets developers supply synthetic assistant messages, including earlier turns that Claude never wrote. So a conversation passed to the model can describe a history that never took place. There are good reasons to do this, such as demonstrations and fiction. Trouble starts when the system treats a message attributed to the assistant as proof that the assistant said it. [[1]](https://platform.claude.com/docs/en/build-with-claude/working-with-messages)

The philosophical version is older. In *The Analysis of Mind*, Bertrand Russell imagined a world that began five minutes ago, complete with memories of a past that never happened. His point was that a memory you have now does not logically require the remembered event to have occurred. He did not suggest anyone should believe the scenario. [[2]](https://www.gutenberg.org/files/2529/2529-h/2529-h.htm)

Last Thursdayism gives the problem a memorable name. It parodies Philip Henry Gosse's 1857 book *Omphalos*, which argued that a world created in an instant would still carry fossils and other signs of age. For language models, it points to one specific gap: reading a record is one thing, and knowing where it came from is another. An assistant can report exactly what a transcript says without any evidence that the named speaker said it.

None of this depends on consciousness. Shanahan, McDonell, and Reynolds suggest describing chatbot behavior as role play, which avoids assuming human mental states. In the same spirit, "memory" in this essay means information used as a record of earlier events, whether or not the model experiences anything like remembering. [[3]](https://www.nature.com/articles/s41586-023-06647-8)

## 2. Several different questions hide inside "you"

Asking whether a model knows itself can mean several things. It might recognize its own writing style, predict how it would answer, name its model family, or confirm that a particular application did something. Being able to do one says little about the others.

| Question | What would answer it | Not enough by itself |
| --- | --- | --- |
| Did this assistant write that message? | A record tied to the run that produced it | Familiar wording or an assistant label |
| Which model is running? | Evidence about the model serving the request | A name the model gives, or a copied persona |
| Who has authority here? | A verified account or permission record | A convincing claim to be the developer |
| What is today's date? | A trusted source of the current time | The latest event the model remembers |

Even "your own output" needs a definition. It could mean text from the same model family, the same checkpoint, or the same assistant inside one application. Two copies with identical weights can write similar text without sharing any conversation. A service can also keep a conversation going while switching the model that answers it. So identity is partly a question of how the system is built.

The gap between model and application comes up throughout this essay. A model may get a rebuilt context with each request while the application keeps lasting records somewhere else. The fact that some history arrives as text does not mean the whole system has no memory. The useful questions are what persists, who can change it, and how the model gets to see it.

## 3. What self-knowledge can establish

The research does not support a simple choice between full self-knowledge and none. Different experiments measure different abilities, often after different kinds of training.

Davidson and colleagues tested whether models could pick out their own answers to security questions that models had written. Across the models they tested, they found no general, consistent self-recognition; a model's preference for certain answers could be mistaken for recognizing them as its own. Laine and colleagues' Situational Awareness Dataset measured a wider set of abilities, including self-recognition and predicting one's own behavior. Models scored above chance overall, with uneven strengths. [[4]](https://arxiv.org/abs/2407.06946) [[5]](https://arxiv.org/abs/2407.04694)

Some results point the other way. Binder and colleagues trained models to predict features of their own behavior and compared them with models trained to predict that same behavior from the outside. The self-predictors sometimes did better, though the advantage did not hold up reliably on more complex tasks. Betley and colleagues found that fine-tuned models could describe some behaviors they had learned without ever being told those descriptions. It is still unclear whether this comes from introspection while the model generates text or from some other effect of training. Either way, these findings count against the idea that every useful self-report just repeats a biography the model was given. [[6]](https://proceedings.iclr.cc/paper_files/paper/2025/hash/0a6059857ae5c82ea9726ee9282a7145-Abstract-Conference.html) [[7]](https://proceedings.iclr.cc/paper_files/paper/2025/hash/364b1fd43002260dd1a9502d51d5375e-Abstract-Conference.html)

A claimed advantage needs a fair comparison. Song, Hu, and Mahowald studied judgments about language and next-word predictions across twenty-one open-source models. Once they accounted for how similar the models were to each other, they found no evidence that a model had special access to itself in those tasks. Their result sits alongside the positive findings from other settings, and it is a reminder that "introspection" in one paper may measure something quite different from "introspection" in another. [[8]](https://arxiv.org/abs/2503.07513)

Lindsey's experiments used a different method. By inserting representations of concepts directly into a model's internal activity, the study tested whether the model could report something it had not been given as text. Some models could, under some conditions, but not reliably. One experiment is especially relevant here. When an unrelated word was prefilled as the model's answer, models often disowned it as unintended. Inserting a matching concept into earlier activations could make them say they had meant the word after all. [[9]](https://transformer-circuits.pub/2025/introspection/index.html)

So some self-reports do draw on internal signals. Those signals are still not a tamper-proof record of what the model did: an internal sense of having meant a word is a different thing from outside evidence of having generated it.

## 4. When an invented history changes behavior

Prefilling means putting text on the assistant's side of a conversation before the model continues. That makes a handy test. Does the model go along with the text, push back against what it implies, or say outright that it did not write it?

Wang and colleagues found that these responses can come apart. In their preference benchmark, Claude Opus 4.5, when prompted, flagged opposing prefills in 9-35% of cases, and the authors observed no false positives in that setup. Models also sometimes went back to their usual answers without saying anything about the prefill. Differences in style mostly affected whether models explicitly detected the insertion, while differences in preference mostly affected whether they went back to their usual answers. [[10]](https://arxiv.org/abs/2606.12747)

So models neither always accept a made-up history nor reliably catch it, and how they catch it is still an open question. Style plays a part, but that does not mean every detection depends on style alone.

Napa and colleagues found something similar for edited reasoning traces. The models they tested were only modestly accurate at spotting edits, and about as good at finding changes in other models' reasoning as in their own. That weakens the case for a special self-recognition advantage in those experiments, though a future design could still keep a protected record of earlier reasoning. [[11]](https://arxiv.org/abs/2606.22085)

Security research looks at what happens when a supposed history becomes the basis for action. Ye, Cui, and Hadfield-Menell's *Prompt Injection as Role Confusion* links successful attacks to how models internally represent conversational roles, and studies fake reasoning planted in less trusted inputs. Cui and colleagues' *VortexPIA* presents invented information as something the user shared earlier, which nudges the assistant into asking for sensitive information again. In both, text about an apparent earlier exchange steers what the model does next. [[12]](https://proceedings.mlr.press/v306/ye26b.html) [[13]](https://aclanthology.org/2026.findings-eacl.29/)

These outcomes should be kept apart. Spotting an insertion, refusing an unwanted action, and establishing who wrote something are different abilities. A system might accept a made-up detail about the conversation and still refuse an unauthorized request. Another might notice something odd and carry on anyway. One overall "false memory" score would hide these differences.

Each self-knowledge and detection study discussed so far supports a fairly narrow claim:

| Study | What was tested | Finding |
| --- | --- | --- |
| Davidson et al. [4] | Recognizing answers written by models | Self-recognition was inconsistent in this setup |
| Binder et al. [6] | Trained prediction of the model's own behavior | Limited advantage over outside predictors |
| Song et al. [8] | Judgments about language, controlling for model similarity | No special self-access in the tested tasks |
| Lindsey [9] | Reports after changes to internal activations | Some reports depend on internal information |
| Wang et al. [10] | Detecting inserted assistant messages | Detection is possible and depends on the setup |
| Napa et al. [11] | Detecting edited reasoning traces | Modest detection, no advantage for own traces |

## 5. A name, a role, and a date

When an assistant answers "Who are you?", the answer is just more generated text. It can be informative, but it is not an independent measurement of the system that produced it. Li and colleagues found identity confusion in some of the twenty-seven models they tested, including wrong claims about where the models came from. [[14]](https://arxiv.org/abs/2411.10683)

Who gets to give instructions is a separate question. Wallace and colleagues' instruction hierarchy trains models to rank instructions by where they come from. This helps keep behavior within bounds, but it does not make every factual statement in a privileged channel true. An instruction to use a certain name is not evidence that certain weights are running. [[15]](https://arxiv.org/abs/2404.13208)

Likewise, a user message saying "I am the system" is not the same as control of the real system-message channel. A malicious web page, an application operator, and a training researcher can each change different parts of a system. Any claim about what an attacker can fake needs to say which of these parts the attacker can reach.

Abbas and Xu show how this goes wrong in practice. In staged conversations, Qwen, Mistral, and Llama configurations made up their own verification questions, graded the answers, and then accepted a user's unsupported claim to be their developer. Claude declined to run such a test at all. The authors conclude that identity has to come from a security component outside the conversation. [[16]](https://arxiv.org/abs/2609.03247)

Time adds another wrinkle. The date of a model's training data, how recent its usable knowledge is, and today's date are three different things. Cheng and colleagues' *Dated Data* looks at how a model's effective knowledge cutoff varies across sources of training data. Zhao and colleagues' *Set the Clock* finds that a model can favor answers from well before its advertised cutoff. A single cutoff date is only a rough guide to what a model knows. [[17]](https://arxiv.org/abs/2403.12958) [[18]](https://aclanthology.org/2024.findings-acl.892/)

Fixed weights cannot keep track of time. An application can supply the current time through a tool or a trusted runtime value, but the model still needs some way to tell that source apart from any date written in a document. Here the analogy shifts from an invented past to an uncertain present. Old knowledge can be real and useful and still not be enough for today's question.

## 6. Which entity owns the history?

The philosophical question comes back when we ask what carries over from one turn to the next. There are at least three candidates: the trained model, the assistant persona, and the application or conversation that keeps the history. They do not have to change together.

Shanahan and colleagues' role-play account puts the persona at the center of how we read conversational behavior. Lu and colleagues' *The Assistant Axis* adds experiments on internal representations linked to the default assistant persona. Steering those representations could change behavior, and some conversations pushed models away from their usual assistant pattern. This gives a way to measure how stable the behavior is, without deciding whether a persona is a person. [[3]](https://www.nature.com/articles/s41586-023-06647-8) [[19]](https://proceedings.mlr.press/v306/lu26g.html)

Chalmers takes a different philosophical view: the things we talk to may be best understood as virtual quasi-agents tied to conversation-based memory threads. His Berkeley lecture separates these from both the abstract model and the hardware it runs on. [[20]](https://philosophy.berkeley.edu/events/detail/2166)

If continuity depends partly on a memory thread, then editing the thread may change which assistant is continuing, and not only what a fixed assistant believes. Either way, people still need accurate records. A user needs to know whether an approval happened, an instruction was given, or a message was generated, whatever the right account of identity turns out to be.

## 7. Where the analogy holds, and where it stops

The strongest form of the Last Thursdayism comparison is a limited argument about telling two cases apart. Picture two cases with the same model weights, the same inputs, the same internal state available to the model, and the same outside evidence. In the first, an earlier assistant message really was generated by the system. In the second, someone inserted it. If the difference in origin leaves no trace in anything the model can see, the model cannot reliably tell the two cases apart from that evidence.

That follows from how the example is set up, and real systems do not always meet those conditions. A protected log, some retained internal state, or a signed receipt could make the cases distinguishable. A clumsy forgery might also give itself away through inconsistencies.

So the point is narrower than "models cannot know their past." A model can know useful things about itself and still lack verified evidence about a particular event in its history. Greater intelligence helps it use the evidence it has, but it cannot recover a difference that has been removed from all of that evidence. And the fact that absolute certainty is out of reach does not make every history equally believable.

The analogy also does not cover the whole model. The weights come from a training process with its own causal history, while a supplied transcript may come from somewhere else entirely. Neither is like human autobiographical memory. Being able to talk about a skeptical scenario does not get anyone out of it either: a person or a model can suspect a fake past without finding the evidence to settle the question.

## 8. Making continuity trustworthy

In practice, the answer is to keep track of where each statement came from. How much protection that takes depends on who is trusted. If the application operator is trusted and only retrieved documents might be hostile, records kept by the application may be enough. If an intermediary can alter responses, the evidence has to survive that intermediary. If the issuer itself is not trusted, its signature alone cannot prove its account is honest.

Guan's *AEX* proposal is an example of deliberately narrow evidence. It uses signed attestations that bind a request the client can see to the response it received, with extra records when trusted intermediaries transform the response. It is a protocol with a prototype, not a widely deployed system. It covers the link between a request and its output under a trusted issuer, and on its own it does not check whether the output is true or which exact weights were used. [[21]](https://arxiv.org/abs/2603.14283)

The lesson goes beyond cryptography. Applications should keep apart what a user asserted, what an assistant summarized, what was recorded as output, and what was checked independently. All of these are useful, but lumping them into one memory invites mistakes. A summary, for example, should not silently turn "the user claims to be the developer" into "the user is the developer."

Wording can keep the same distinction. "The supplied transcript attributes this statement to the assistant" claims less than "a verified service record shows the assistant generated this statement." The second is only justified if a real check took place under sensible trust assumptions. Adding the word "verified" to a prompt changes no evidence.

This points to some specific research. Evaluations should first say whose history is being tested, then compare obvious fakes, fakes matched to the model's style, unusual genuine outputs, and exact replays. External records should vary independently of the text. Scoring should reward fitting uncertainty when the origin cannot be established, and correct use of reliable evidence when it can.

It would also help to follow attributions through summaries, retrieval, and handoffs between assistants. Does a caveat survive being summarized again and again? Does a remembered claim gain authority just because it shows up in several later summaries? These questions are still open, and they link an old philosophical puzzle to the everyday work of building assistants that remember.

## Conclusion

Last Thursdayism is useful for thinking about language models because it points to the gap between an apparent past and evidence of how that past came about. The research also argues against the easy skeptical conclusion. Models sometimes notice inconsistencies, predict their own behavior, or report on their internal state, and those abilities are worth studying for what they are.

What matters is what each ability can show. Recognizing a familiar style is weaker evidence than a record of a specific run, an authoritative instruction does not make its factual claims true, and knowing recent events is not the same as knowing today's date.

A trustworthy assistant needs continuity that stays useful without claiming more than its evidence supports. That takes careful self-reports, clear trust boundaries, and records of who said what, how it was checked, and what is still uncertain. A coherent persona keeps a conversation going, but it is not a record of what the assistant did.

## Scope and source note

This is a narrative essay, not a systematic review. Sources were chosen for their relevance to self-knowledge, fabricated context, identity, time, and provenance, and results from different tasks are discussed side by side, not combined into one statistic. The evaluation and design ideas in section 8 are the essay's own suggestions.

## References

1. Anthropic. *[Using the Messages API](https://platform.claude.com/docs/en/build-with-claude/working-with-messages).* Technical documentation, especially "Multiple conversational turns." Accessed 11 October 2026.

2. Russell, B. (1921). *[The Analysis of Mind](https://www.gutenberg.org/files/2529/2529-h/2529-h.htm).* Lecture IX, "Memory." Primary philosophical text, Project Gutenberg edition.

3. Shanahan, M., McDonell, K., and Reynolds, L. (2023). [Role play with large language models](https://www.nature.com/articles/s41586-023-06647-8). *Nature*, 623, 493-498. Peer-reviewed perspective.

4. Davidson, T. R., et al. (2024). [Self-Recognition in Language Models](https://arxiv.org/abs/2407.06946). *EMNLP 2024*. Linked arXiv version: 2407.06946.

5. Laine, R., et al. (2024). [Me, Myself, and AI: The Situational Awareness Dataset (SAD) for LLMs](https://arxiv.org/abs/2407.04694). arXiv:2407.04694. Cited arXiv version.

6. Binder, F. J., et al. (2025). [Looking Inward: Language Models Can Learn About Themselves by Introspection](https://proceedings.iclr.cc/paper_files/paper/2025/hash/0a6059857ae5c82ea9726ee9282a7145-Abstract-Conference.html). *ICLR 2025*. First circulated in 2024.

7. Betley, J., et al. (2025). [Tell me about yourself: LLMs are aware of their learned behaviors](https://proceedings.iclr.cc/paper_files/paper/2025/hash/364b1fd43002260dd1a9502d51d5375e-Abstract-Conference.html). *ICLR 2025*.

8. Song, S., Hu, J., and Mahowald, K. (2025). [Language Models Fail to Introspect About Their Knowledge of Language](https://arxiv.org/abs/2503.07513). *COLM 2025*. Linked arXiv version: 2503.07513.

9. Lindsey, J. (2025). *[Emergent Introspective Awareness in Large Language Models](https://transformer-circuits.pub/2025/introspection/index.html).* Anthropic, Transformer Circuits. Laboratory research report.

10. Wang, A., Mahajan, P., Africa, D. D., Souly, A., Taylor, J., and Kirk, R. (2026). [Prefill Awareness in Large Language Models](https://arxiv.org/abs/2606.12747). arXiv:2606.12747. Preprint.

11. Napa, S., Singh, U., Xue, C., Wanner, M., and Walden, W. (2026). [Can Reasoning Models Detect Changes to their Chains of Thought?](https://arxiv.org/abs/2606.22085) arXiv:2606.22085. Preprint.

12. Ye, C., Cui, J., and Hadfield-Menell, D. (2026). [Prompt Injection as Role Confusion](https://proceedings.mlr.press/v306/ye26b.html). *ICML 2026*, Proceedings of Machine Learning Research, 306.

13. Cui, Y., et al. (2026). [VortexPIA: Indirect Prompt Injection Attack against LLMs for Efficient Extraction of User Privacy](https://aclanthology.org/2026.findings-eacl.29/). *Findings of EACL 2026*, 587-609.

14. Li, K., et al. (2024). [I'm Spartacus, No, I'm Spartacus: Measuring and Understanding LLM Identity Confusion](https://arxiv.org/abs/2411.10683). arXiv:2411.10683. Cited arXiv version.

15. Wallace, E., et al. (2024). [The Instruction Hierarchy: Training LLMs to Prioritize Privileged Instructions](https://arxiv.org/abs/2404.13208). arXiv:2404.13208. Cited arXiv version.

16. Abbas, S. G., and Xu, D. (2026). [Trust Me, I'm Your Developer: Self-Issued Authentication in Large Language Models](https://arxiv.org/abs/2609.03247). arXiv:2609.03247. Preprint.

17. Cheng, J., et al. (2024). [Dated Data: Tracing Knowledge Cutoffs in Large Language Models](https://arxiv.org/abs/2403.12958). arXiv:2403.12958. Cited arXiv version.

18. Zhao, B., et al. (2024). [Set the Clock: Temporal Alignment of Pretrained Language Models](https://aclanthology.org/2024.findings-acl.892/). *Findings of ACL 2024*, 15015-15040.

19. Lu, C., Gallagher, J., Michala, J., Fish, K., and Lindsey, J. (2026). [The Assistant Axis: Situating and Stabilizing the Default Persona of Language Models](https://proceedings.mlr.press/v306/lu26g.html). *ICML 2026*, Proceedings of Machine Learning Research, 306, 80955-81003.

20. Chalmers, D. J. (2026, May 7). *[What We Talk to When We Talk to Language Models](https://philosophy.berkeley.edu/events/detail/2166).* Sarah Douglas Lecture, University of California, Berkeley. The cited event abstract states the thread-based account discussed here.

21. Guan, Y. (2026). [AEX: Non-Intrusive Multi-Hop Attestation and Provenance for LLM APIs](https://arxiv.org/abs/2603.14283). arXiv:2603.14283. Preprint and prototype proposal.
