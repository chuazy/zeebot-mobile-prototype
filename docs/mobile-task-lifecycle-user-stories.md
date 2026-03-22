# ZeeBot Mobile Prototype — Task Lifecycle User Stories

## Purpose
Define task lifecycle behaviors for ZeeBot as an agentic assistant. This covers how tasks are created, tracked, updated, cancelled, retried, reviewed, and completed.

---

## Lifecycle States
Core task-state model to design against:
- queued
- running
- blocked
- review
- done
- failed
- cancelled

---

## Epics
1. Task Creation
2. Task State Visibility
3. Parallel Task Handling
4. Task Review & Inspection
5. Task Recovery
6. Task Cancellation & Retry
7. Completed Task Access

---

## Epic 1 — Task Creation

### TSK-1.1 Create a task from chat
**As a** user  
**I want** a meaningful request to become a trackable task when appropriate  
**So that** I can understand that work is happening beyond the immediate chat turn.

**Acceptance Criteria**
1. Multi-step or asynchronous work can be represented as a task.
2. The task is visibly linked to the originating request.
3. The task has a recognizable title or summary.
4. The user does not need to manually create a task for every background workflow.
5. The representation makes clear that the work is ongoing.

### TSK-1.2 Distinguish conversational replies from task execution
**As a** user  
**I want** to know whether ZeeBot is simply replying or actually starting work  
**So that** I understand what to expect next.

**Acceptance Criteria**
1. The UI differentiates immediate conversational responses from delegated/background tasks.
2. Task creation has visible status context.
3. The user can understand whether follow-up work is still in progress.
4. The app avoids implying completion when only a task has started.
5. The distinction remains clear across main-thread and delegated work.

---

## Epic 2 — Task State Visibility

### TSK-2.1 See current task state
**As a** user  
**I want** to see the current state of a task  
**So that** I know whether it is queued, running, blocked, under review, or done.

**Acceptance Criteria**
1. The task state is visible in plain language.
2. State changes are understandable without technical knowledge.
3. The state model is consistent across tasks.
4. The current state updates when progress changes.
5. Historical stale states do not remain misleadingly visible.

### TSK-2.2 Understand why a task changed state
**As a** user  
**I want** enough context around task state changes  
**So that** I know what happened and what it means.

**Acceptance Criteria**
1. Major state changes provide short, understandable context.
2. Review and blocked states are distinguishable from normal progress.
3. Completion includes enough summary to orient the user.
4. Failure and blocked states provide at least a basic reason.
5. State context does not require reading raw logs.

---

## Epic 3 — Parallel Task Handling

### TSK-3.1 See multiple active tasks clearly
**As a** user  
**I want** to understand when more than one task is active  
**So that** parallel work does not feel opaque.

**Acceptance Criteria**
1. Multiple tasks can be represented without merging into one ambiguous status.
2. Distinct task cards/rows/entries are visually separable.
3. The user can identify which task belongs to which request/thread.
4. Parallel task visibility does not overwhelm the main chat.
5. The user can tell which tasks are still active and which are done.

### TSK-3.2 Re-enter a task after leaving
**As a** user  
**I want** to leave a task and come back later  
**So that** I can multitask without losing context.

**Acceptance Criteria**
1. Active tasks remain discoverable after navigation away.
2. Re-entry preserves enough context to resume understanding quickly.
3. The app shows whether the task advanced while the user was away.
4. The user can return to the originating thread or task detail.
5. The task does not appear to have disappeared unless it was intentionally cleared.

---

## Epic 4 — Task Review & Inspection

### TSK-4.1 Review task output before accepting
**As a** user  
**I want** to inspect important outputs  
**So that** I can trust what ZeeBot produced.

**Acceptance Criteria**
1. Task output is reviewable from a task or related thread context.
2. The user can understand what the task produced.
3. Review does not require leaving the mobile shell entirely.
4. The user can return to main chat without losing context.
5. The output remains tied to the task that created it.

### TSK-4.2 See summary first, then detail
**As a** user  
**I want** a summary of task progress/output before diving into detail  
**So that** I’m not forced into process noise.

**Acceptance Criteria**
1. Task summaries are available.
2. Detail is accessible on demand.
3. The transition between summary and detail is clear.
4. The app does not default to noisy logs unless necessary.
5. Summary-level visibility is enough for routine monitoring.

---

## Epic 5 — Task Recovery

### TSK-5.1 Recover from interrupted tasks
**As a** user  
**I want** interrupted tasks to recover gracefully  
**So that** transient issues do not destroy trust.

**Acceptance Criteria**
1. Temporary interruption does not silently erase task context.
2. The task state reflects interruption/recovery accurately.
3. The user can understand whether work resumed or failed.
4. Recovery paths are visible where possible.
5. The app avoids phantom “running” states after hard failure.

### TSK-5.2 Understand failed tasks
**As a** user  
**I want** failed tasks to be clearly marked and explained at a useful level  
**So that** I know what to do next.

**Acceptance Criteria**
1. Failed tasks are visibly distinct from blocked and running tasks.
2. The user can understand failure at a practical level.
3. Retry or review options are visible where appropriate.
4. Failed tasks remain accessible for inspection.
5. Failure does not corrupt related chat context.

---

## Epic 6 — Task Cancellation & Retry

### TSK-6.1 Cancel a running task
**As a** user  
**I want** to stop a task that is no longer useful  
**So that** ZeeBot doesn’t keep wasting effort.

**Acceptance Criteria**
1. Running tasks can be cancelled when product policy allows.
2. Cancellation is clearly acknowledged.
3. Cancelled state is visibly distinct from failed or done.
4. The user understands whether partial output still exists.
5. Cancellation does not corrupt unrelated app state.

### TSK-6.2 Retry a failed or blocked task
**As a** user  
**I want** to retry failed or blocked work  
**So that** I do not have to reconstruct the request manually.

**Acceptance Criteria**
1. Retry is available where appropriate.
2. Retrying preserves enough original context.
3. The user understands that a new execution attempt began.
4. Old and new attempts remain distinguishable if needed.
5. Retry does not duplicate successful completed work unintentionally.

---

## Epic 7 — Completed Task Access

### TSK-7.1 Reopen completed tasks
**As a** user  
**I want** to revisit completed work  
**So that** useful outputs remain available later.

**Acceptance Criteria**
1. Completed tasks remain accessible from an appropriate history surface.
2. The user can inspect the outcome later.
3. The relationship to the originating thread remains understandable.
4. Completion state remains visible.
5. Reopening a completed task does not make it appear active again unless retried.

### TSK-7.2 Know what changed since I last looked
**As a** user  
**I want** to understand what changed in a task since my last view  
**So that** I can catch up quickly.

**Acceptance Criteria**
1. The app can indicate that progress happened while away.
2. Significant updates are visible or summarized.
3. The user can understand whether the task advanced, completed, or failed.
4. Re-entry cost is minimized.
5. The app reinforces continuity of work.

---

## Open Questions / Assumptions
1. Where should task lifecycle live primarily: chat thread, activity feed, or both?
2. Which task states should trigger OS notifications vs in-app only signals?
3. Should partial outputs be visible while a task is still running?
4. What degree of cancellation/retry is allowed for different task types?
5. How should completed task history be organized for mobile ergonomics?
