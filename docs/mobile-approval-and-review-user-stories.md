# ZeeBot Mobile Prototype — Approval & Review User Stories

## Purpose
Define human-in-the-loop approval and review behaviors for ZeeBot. This covers cases where the assistant proposes an action, change, or output that should be reviewed before being accepted or executed.

---

## Goals
The app should help a user:
1. understand when approval is required
2. inspect what ZeeBot intends to do
3. approve, reject, or revise safely
4. review outputs before accepting them
5. preserve auditability and trust

---

## Epics
1. Approval Requests
2. Action Preview
3. Review Before Accepting Output
4. Approval Decision Paths
5. Auditability & Change Visibility

---

## Epic 1 — Approval Requests

### APR-1.1 Request approval before sensitive actions
**As a** user  
**I want** ZeeBot to ask for approval before sensitive or external actions  
**So that** I stay in control of important consequences.

**Acceptance Criteria**
1. Approval-required actions are clearly marked.
2. The user can tell why approval is needed.
3. Approval requests are distinguishable from informational messages.
4. The request appears in a context the user can act on.
5. Sensitive work does not proceed silently without approval when policy requires review.

### APR-1.2 See pending approvals clearly
**As a** user  
**I want** pending approvals to be visible  
**So that** I can respond at the right time.

**Acceptance Criteria**
1. Pending approvals are visible in an appropriate in-app surface.
2. The user can understand what is waiting.
3. Pending approvals remain accessible until resolved or expired.
4. The state changes when approved, rejected, or cancelled.
5. The app does not silently hide pending approval work.

---

## Epic 2 — Action Preview

### APR-2.1 Preview what ZeeBot plans to do
**As a** user  
**I want** to see what the assistant intends to do before approving it  
**So that** I can make an informed decision.

**Acceptance Criteria**
1. Approval flows include a readable preview.
2. The preview shows the essential action details.
3. The user can inspect enough context to judge correctness.
4. Previews are understandable on mobile.
5. Preview visibility does not require reading raw technical logs.

### APR-2.2 Understand consequences of approval
**As a** user  
**I want** to know the consequence of approving an action  
**So that** I understand the risk and effect.

**Acceptance Criteria**
1. The preview explains what will happen at a practical level.
2. The user can distinguish local/internal effects from external/public ones.
3. High-risk actions are not presented ambiguously.
4. The UI encourages informed approval rather than blind confirmation.
5. The user can back out safely.

---

## Epic 3 — Review Before Accepting Output

### APR-3.1 Review generated output before accepting
**As a** user  
**I want** to review important generated outputs before accepting them  
**So that** I can trust the result.

**Acceptance Criteria**
1. Important outputs can be opened for review.
2. The user can read the generated output comfortably on mobile.
3. The output remains linked to the originating task or thread.
4. The user can return to the main thread without losing context.
5. The app does not force acceptance without a chance to review.

### APR-3.2 Review changes, not just results
**As a** user  
**I want** to understand what changed  
**So that** I can decide whether to accept the output.

**Acceptance Criteria**
1. Where relevant, the app exposes what changed, not just the final result.
2. Change visibility is understandable without desktop-only tooling.
3. Summaries are available before full detail.
4. The user can distinguish minor edits from major changes.
5. Review supports trust-building rather than blind acceptance.

---

## Epic 4 — Approval Decision Paths

### APR-4.1 Approve an action
**As a** user  
**I want** to approve a proposed action  
**So that** ZeeBot can continue without unnecessary friction.

**Acceptance Criteria**
1. Approval action is clearly available.
2. Approved state is confirmed.
3. The workflow continues appropriately after approval.
4. Duplicate approvals are avoided.
5. Approval outcome is visible in the task/message flow.

### APR-4.2 Reject an action
**As a** user  
**I want** to reject a proposed action  
**So that** ZeeBot does not proceed incorrectly.

**Acceptance Criteria**
1. Rejection is clearly available.
2. Rejected state is confirmed.
3. The blocked/rejected outcome is visible.
4. The system does not proceed after rejection.
5. The user can continue interacting after rejecting.

### APR-4.3 Revise or request changes
**As a** user  
**I want** to ask for revisions instead of only approve/reject  
**So that** I can guide ZeeBot toward the correct output.

**Acceptance Criteria**
1. The user can indicate that changes are needed.
2. Revision requests are captured in a usable form.
3. The workflow clearly transitions back into work/review.
4. The original context is preserved.
5. Revision does not require starting from scratch unnecessarily.

---

## Epic 5 — Auditability & Change Visibility

### APR-5.1 Preserve approval history
**As a** user  
**I want** approval decisions to remain understandable after the fact  
**So that** I can audit what happened.

**Acceptance Criteria**
1. The app shows whether a task/action was approved, rejected, or revised.
2. Approval state remains tied to the related task/output.
3. The user can revisit important decision points later.
4. Historical state does not become misleading.
5. Auditability remains mobile-usable.

### APR-5.2 Understand who/what produced the output
**As a** user  
**I want** to know whether the result came from main ZeeBot or delegated work  
**So that** I can evaluate it appropriately.

**Acceptance Criteria**
1. The source of output is understandable.
2. Delegated/subagent outputs are distinguishable from main-thread outputs.
3. Review context preserves this distinction.
4. The user can inspect results without ambiguity about origin.
5. Source clarity contributes to trust and accountability.

---

## Open Questions / Assumptions
1. Which actions in v1 require explicit approval vs implicit acceptance?
2. How detailed should mobile previews be before the user needs a deeper drill-in?
3. Should approval requests live inline in chat, in activity, or both?
4. How much diff/change visibility is necessary in v1?
5. Should approvals support one-time vs reusable consent models in the future?
