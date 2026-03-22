# ZeeBot Mobile Prototype — Product User Stories

## Purpose
This document captures the **actual product user stories** for the ZeeBot mobile app, beyond UI mechanics. These stories describe the user’s goals, jobs-to-be-done, workflows, and expected outcomes when using ZeeBot as a chat-first, agentic assistant.

These complement the UI-specific interaction stories in `docs/mobile-ui-user-stories.md`.

---

## Product Goals
The app should help a user:
1. talk to ZeeBot naturally
2. continue ongoing work without losing context
3. delegate focused work to subagents when needed
4. track whether work is still running
5. review outputs without losing the main thread
6. attach context via files or voice naturally
7. trust that work is progressing even asynchronously

---

## Personas

### Persona 1 — Busy operator
A user who wants to ask, delegate, review, and move quickly without managing the assistant.

### Persona 2 — Deep-work strategist
A user who uses ZeeBot to think through decisions, review outputs, and coordinate longer workflows.

### Persona 3 — Mobile-first power user
A user who wants to manage ongoing work from mobile with as little friction as possible.

---

## Epics / Product Workflows
1. Quick Ask & Response
2. Continue Existing Work
3. Delegate Focused Work to Subagents
4. Track Background / Parallel Work
5. Review Outputs & Return to Main Thread
6. Attach Context with Files
7. Use Voice as Input
8. Handle Failure / Blocked States
9. Build Trust Through Clear Status

---

## Epic 1 — Quick Ask & Response

### PUS-1.1 Ask ZeeBot something quickly
**As a** user  
**I want** to open the app and ask ZeeBot a question immediately  
**So that** I can get useful help without navigating through extra UI.

**Acceptance Criteria**
1. The app opens directly into a usable chat surface.
2. The composer is visible and ready for input.
3. A basic ask/answer loop can happen with minimal friction.
4. The user does not need to choose a mode before asking something.
5. The user understands where to type or talk immediately.

### PUS-1.2 Get a useful response in-thread
**As a** user  
**I want** ZeeBot’s response to appear in the same conversation  
**So that** the interaction feels continuous and easy to follow.

**Acceptance Criteria**
1. Replies appear in the active thread.
2. User and assistant turns are clearly distinguishable.
3. The thread remains readable after multiple exchanges.
4. The conversation context is visually continuous.
5. The UI does not redirect the user away from the main thread unexpectedly.

---

## Epic 2 — Continue Existing Work

### PUS-2.1 Resume prior context
**As a** returning user  
**I want** to continue previous work  
**So that** I don’t have to restate context every time.

**Acceptance Criteria**
1. Existing threads/conversations are accessible.
2. The user can reopen a prior conversation from the Main menu or equivalent navigation.
3. Prior context is preserved in the reopened thread.
4. The user can continue from the prior state without confusion.
5. Navigation back to the main thread is clear.

### PUS-2.2 See where I left off
**As a** user  
**I want** to recognize my recent work quickly  
**So that** I can pick up where I left off efficiently.

**Acceptance Criteria**
1. Thread labels and previews distinguish recent work items.
2. Active or recent threads are identifiable.
3. The conversation view restores enough context to orient the user.
4. Re-entry does not silently discard drafts or context without warning.
5. The app minimizes reorientation cost.

---

## Epic 3 — Delegate Focused Work to Subagents

### PUS-3.1 Spin off focused work
**As a** user  
**I want** ZeeBot to delegate focused work to a specialist/subagent when needed  
**So that** complex tasks can continue without cluttering the main conversation.

**Acceptance Criteria**
1. The user can access subagents from the Main menu or a clear entry point.
2. Delegating work does not require leaving the primary app shell.
3. The user can understand which subagent is handling which work.
4. The main thread remains available.
5. Delegated work has a visible relationship to the originating request.

### PUS-3.2 Keep the main thread as command center
**As a** user  
**I want** the main thread to stay canonical even when subagents are involved  
**So that** I always know where the high-level conversation lives.

**Acceptance Criteria**
1. The main thread remains accessible while subagent work exists.
2. Subagent work does not replace the main thread unexpectedly.
3. Subagent outputs can be reviewed without losing main-thread continuity.
4. The app makes the relationship between main and delegated work clear.
5. The user can return to the main thread in one obvious action.

---

## Epic 4 — Track Background / Parallel Work

### PUS-4.1 Know whether work is still running
**As a** user  
**I want** to see whether ZeeBot is still working on something  
**So that** I do not have to keep checking manually.

**Acceptance Criteria**
1. If background work is active, the app shows a visible running state.
2. The user can tell whether the task is queued, running, blocked, under review, or done.
3. The status is understandable without reading logs.
4. Status updates are visible from the main user flow.
5. The app does not appear idle while real work is ongoing.

### PUS-4.2 Understand parallel work clearly
**As a** user  
**I want** to know when multiple tasks or specialists are active  
**So that** I understand what is happening without managing the process myself.

**Acceptance Criteria**
1. The UI can indicate more than one active background work item.
2. Distinct tasks are visually separable.
3. The user can see progress state at a glance.
4. The app avoids vague “thinking” indicators when richer status exists.
5. Ongoing work is legible enough to reduce repeated status-check behavior.

---

## Epic 5 — Review Outputs & Return to Main Thread

### PUS-5.1 Review delegated outputs
**As a** user  
**I want** to inspect subagent results  
**So that** I can validate or act on them without losing my place.

**Acceptance Criteria**
1. Outputs from delegated work are accessible from the originating context.
2. Results are readable on mobile.
3. The user can return to the main thread easily.
4. Reviewing outputs does not reset the main conversation state.
5. The relationship between output and originating task is clear.

### PUS-5.2 Move between summary and detail
**As a** user  
**I want** to see summary-level progress first and detail when I choose  
**So that** I’m not overwhelmed by process detail.

**Acceptance Criteria**
1. The app provides a lightweight summary view of ongoing/completed work.
2. Detailed output is available on demand.
3. Summary and detail views are linked clearly.
4. The user is not forced into verbose logs by default.
5. The transition between summary and detail preserves context.

---

## Epic 6 — Attach Context with Files

### PUS-6.1 Add files as context
**As a** user  
**I want** to attach files or images to a request  
**So that** ZeeBot has the right context to help me.

**Acceptance Criteria**
1. Attachment entry is easy to find from chat.
2. The user can attach supported file types.
3. The attached state is visible before sending.
4. Adding files does not break the draft message flow.
5. The user can remove or cancel attachments before sending.

### PUS-6.2 Keep attachments from cluttering chat
**As a** user  
**I want** attachments to be present without dominating the screen  
**So that** the app remains focused on the conversation.

**Acceptance Criteria**
1. Attachment UI is compact.
2. Long filenames or multiple items do not overwhelm the layout.
3. The composer remains usable while attachments are present.
4. Attachment state remains understandable.
5. Attachments do not create horizontal overflow or visual breakage.

---

## Epic 7 — Use Voice as Input

### PUS-7.1 Speak instead of type when needed
**As a** user  
**I want** to use voice naturally as an input method  
**So that** I can capture thoughts faster when typing is inconvenient.

**Acceptance Criteria**
1. A clear voice entry point exists.
2. Voice is presented as an input method, not as a separate competing destination.
3. The user can begin the voice flow with minimal friction.
4. The user understands how to cancel or recover from voice actions.
5. Voice behavior remains consistent with the chat-first model.

### PUS-7.2 Transition cleanly back to chat
**As a** user  
**I want** voice interactions to resolve back into the main conversation  
**So that** the chat remains the primary command surface.

**Acceptance Criteria**
1. Voice actions do not strand the user in a broken or hidden mode.
2. After a voice action, the user lands back in a valid chat state.
3. Draft text or related state is preserved appropriately.
4. The voice flow does not destabilize keyboard/composer behavior.
5. The user can continue working immediately after the voice interaction.

---

## Epic 8 — Handle Failure / Blocked States

### PUS-8.1 Understand when something is blocked
**As a** user  
**I want** clear blocked/failure states  
**So that** I understand why something did not complete.

**Acceptance Criteria**
1. Failure and blocked states are visibly distinct from running and done states.
2. The user can understand the state without technical logs.
3. The app provides an understandable next step where possible.
4. A blocked task does not silently disappear.
5. The user can return to normal chat use after encountering a blocked state.

### PUS-8.2 Recover gracefully from interruptions
**As a** user  
**I want** the app to recover cleanly from interrupted actions  
**So that** I do not lose trust or context.

**Acceptance Criteria**
1. Temporary interruptions do not corrupt app state.
2. Drafts, thread position, and navigation context recover gracefully where possible.
3. Broken actions do not cascade into broader UI breakage.
4. The user can retry important actions.
5. Recovery paths are understandable.

---

## Epic 9 — Build Trust Through Clear Status

### PUS-9.1 Know what ZeeBot is doing
**As a** user  
**I want** the assistant to communicate what is happening clearly  
**So that** I trust the system and don’t feel abandoned mid-task.

**Acceptance Criteria**
1. Ongoing work is visibly represented.
2. Completion is clearly indicated.
3. The app distinguishes between active work, waiting, blocked, and completed states.
4. Status communication reduces the need for manual check-ins.
5. The system feels reliable rather than opaque.

### PUS-9.2 Avoid supervising the assistant
**As a** user  
**I want** the assistant to continue obvious next steps on its own  
**So that** I do not have to project-manage it manually.

**Acceptance Criteria**
1. Multi-step workflows feel continuous from the user’s perspective.
2. The app exposes enough state that the user is not forced to keep asking for updates.
3. Hand-offs to subagents or background work remain visible and understandable.
4. The main thread reflects meaningful state changes.
5. The system’s behavior reinforces trust instead of ambiguity.

---

## Open Questions / Assumptions
1. How much of background work status should appear inline in chat vs a dedicated activity surface?
2. Should subagent work be represented as separate threads, task cards, or both?
3. Should voice resolve into transcription, audio send, or both in v1?
4. What exact state model should be exposed to users (queued, running, blocked, review, done, pushed)?
5. Should the app support proactive completion notifications when background work finishes?
