# ZeeBot Mobile Prototype — Notification User Stories

## Purpose
Define notification-related product stories for ZeeBot as an agentic mobile assistant. Notifications are a core trust layer for async work, task progress, completions, and new assistant messages.

---

## Notification Goals
The app should help a user:
1. know when work has started
2. know when work is still running
3. know when work is blocked
4. know when work is completed
5. know when ZeeBot sent a meaningful new reply
6. control notification volume and urgency

---

## Epics
1. Task Progress Notifications
2. Task Completion Notifications
3. New Message Notifications
4. Notification Prioritization
5. Notification Controls & Preferences
6. Notification Navigation / Deep Linking

---

## Epic 1 — Task Progress Notifications

### NTF-1.1 Notify when work starts
**As a** user  
**I want** to be notified when a meaningful task starts  
**So that** I know ZeeBot is actively working.

**Acceptance Criteria**
1. A meaningful task start generates a visible signal.
2. The notification makes clear which task started.
3. The notification does not require reading technical logs.
4. The notification distinguishes started from completed.
5. Low-value micro-actions do not generate unnecessary start notifications.

### NTF-1.2 Notify when work is still running
**As a** user  
**I want** a running-status notification when work takes longer than expected  
**So that** I do not keep checking manually.

**Acceptance Criteria**
1. Long-running work can generate a “still running” status signal.
2. The status clearly indicates ongoing work, not completion.
3. Repeated running notifications are rate-limited to avoid spam.
4. The user can distinguish one running task from another.
5. Running notifications stop once work is done or blocked.

### NTF-1.3 Notify when work is blocked
**As a** user  
**I want** to know when a task becomes blocked  
**So that** I understand why progress stopped.

**Acceptance Criteria**
1. Blocked work generates a distinct blocked notification.
2. The notification summarizes the blocker in plain language.
3. The blocked state is distinguishable from running and done.
4. If user action is needed, that is stated clearly.
5. Blocked tasks do not silently disappear.

---

## Epic 2 — Task Completion Notifications

### NTF-2.1 Notify when work is completed
**As a** user  
**I want** a clear completion notification  
**So that** I know output is ready for review.

**Acceptance Criteria**
1. Completed work generates a completion notification.
2. The notification clearly indicates which task completed.
3. The user can tell whether review or action is needed.
4. Completion is not confused with running or blocked states.
5. Duplicate completion notifications are avoided.

### NTF-2.2 Notify when review is needed
**As a** user  
**I want** to know when ZeeBot needs me to review, approve, or decide something  
**So that** I can intervene at the right time.

**Acceptance Criteria**
1. Review-needed states generate distinct notifications.
2. The notification indicates whether approval, revision, or inspection is needed.
3. The notification deep-links to the right place when opened.
4. Review requests are clearly distinguishable from passive completions.
5. Expired or resolved review notifications update appropriately.

---

## Epic 3 — New Message Notifications

### NTF-3.1 Notify on meaningful new ZeeBot messages
**As a** user  
**I want** to be notified when ZeeBot sends a meaningful new message  
**So that** I do not miss an answer.

**Acceptance Criteria**
1. Meaningful new assistant replies trigger a message notification.
2. Message notifications are distinguishable from task-state notifications.
3. Notification previews provide enough context to be useful.
4. Trivial status churn does not masquerade as a reply notification.
5. Opening the notification lands the user in the relevant conversation.

### NTF-3.2 Notify on subagent or delegated output
**As a** user  
**I want** to be notified when delegated work produces important output  
**So that** I can review results without constantly checking.

**Acceptance Criteria**
1. Important delegated outputs can trigger notifications.
2. The notification indicates that the output came from delegated/background work.
3. The relationship to the originating request is understandable.
4. The user can open directly into the relevant thread/task/output.
5. Low-value intermediate churn does not overwhelm the user.

---

## Epic 4 — Notification Prioritization

### NTF-4.1 Match notification urgency to importance
**As a** user  
**I want** notification priority to match the importance of the event  
**So that** I am not spammed by low-value updates.

**Acceptance Criteria**
1. Important events are visually or behaviorally distinguishable from informational ones.
2. Low-value updates can be downgraded or batched.
3. Completion, blocked, and approval-needed events can be prioritized above passive state updates.
4. Message notifications remain distinct from background noise.
5. Prioritization rules remain consistent across the app.

### NTF-4.2 Avoid notification spam
**As a** user  
**I want** repetitive low-value notifications suppressed  
**So that** I maintain trust in the signal quality.

**Acceptance Criteria**
1. Repetitive running-state notifications are throttled.
2. Duplicate notifications for the same state change are prevented.
3. Low-importance events can be batched or muted.
4. The user is not penalized with more noise as the system becomes more agentic.
5. Signal quality remains high enough that notifications stay meaningful.

---

## Epic 5 — Notification Controls & Preferences

### NTF-5.1 Control notification volume
**As a** user  
**I want** to choose how many notifications I receive  
**So that** ZeeBot fits my working style.

**Acceptance Criteria**
1. The user can choose between modes such as all / important only / completion only.
2. Preferences apply consistently across message and task notifications where appropriate.
3. The selected mode is visible and changeable.
4. Changes take effect without needing app reinstallation or reset.
5. Defaults are sensible for a first-time user.

### NTF-5.2 Quiet hours / focus-friendly behavior
**As a** user  
**I want** notification behavior that respects timing and focus  
**So that** the assistant helps without becoming disruptive.

**Acceptance Criteria**
1. Quiet/focus-friendly behavior can be configured.
2. Low-priority updates can be suppressed or delayed during quiet periods.
3. Urgent or approval-critical events can be handled differently if intended by product rules.
4. Quiet-hour behavior is understandable.
5. The user can override settings when needed.

---

## Epic 6 — Notification Navigation / Deep Linking

### NTF-6.1 Open the right place from a notification
**As a** user  
**I want** notifications to take me directly to the relevant task, thread, or message  
**So that** I do not have to hunt for context.

**Acceptance Criteria**
1. Task notifications open the related task/thread/output.
2. Message notifications open the relevant conversation.
3. Approval notifications open the exact review point when possible.
4. If the target is unavailable, the fallback is graceful and understandable.
5. Returning from a notification deep-link preserves a coherent navigation state.

---

## Open Questions / Assumptions
1. Which notification events should appear as in-app state only vs OS-level notifications?
2. Should progress updates appear inline in chat, in a dedicated activity feed, as system notifications, or all three?
3. What is the default notification policy for long-running work?
4. How should notification settings interact with quiet hours and task urgency?
5. Should the app support batched “digest” notifications for multiple running tasks?
