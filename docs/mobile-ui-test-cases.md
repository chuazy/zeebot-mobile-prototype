# ZeeBot Mobile Prototype — QA Test Cases

## Scope
Current agreed UI direction under test:
- full-height mobile shell
- chat-first experience
- top-left Main menu for threads/subagents
- bottom nav with center mic
- tighter composer
- no suggestion chips
- no helper-text clutter

## Test Categories
1. Layout & Structural Rendering
2. Navigation & Screen Transitions
3. Composer Behavior
4. Center Mic Behavior
5. Menu & Subagent Access
6. Attachments
7. Responsiveness & Device Adaptation
8. Overflow Prevention & Content Resilience
9. Usability & Interaction Quality
10. Regression Coverage

---

## Smoke Tests
Run on every build / high-frequency validation.

- **SMK-01** App/chat screen loads without broken layout
- **SMK-02** Composer accepts text and sends a basic message
- **SMK-03** Center mic button is visible and tappable
- **SMK-04** Main menu opens and closes reliably
- **SMK-05** Subagent/thread entry point is discoverable and opens
- **SMK-06** Attachment flow opens and can attach at least one supported item
- **SMK-07** Message list remains scrollable after sending/receiving messages
- **SMK-08** No horizontal overflow/cutoff on default mobile viewport
- **SMK-09** Back navigation returns to prior screen without dead-end
- **SMK-10** Keyboard-open state does not hide critical composer controls

---

## Functional Test Cases

### 1. Layout & Structural Rendering

#### LAY-01 — Initial chat layout renders correctly
**Preconditions:** App launches to main chat screen.  
**Steps:**
1. Open the prototype.
2. Observe the initial chat view.

**Expected Results:**
- Header, message area, composer, and primary actions render.
- No overlapping controls.
- No clipped text or icons.
- Safe-area spacing is respected top and bottom.

#### LAY-02 — Empty state layout remains balanced
**Preconditions:** No active thread or fresh conversation state available.  
**Steps:**
1. Open a fresh/empty conversation.

**Expected Results:**
- Empty-state content is minimal and balanced.
- Composer and center mic remain reachable.
- No excessive blank regions causing confusion.

#### LAY-03 — Dense thread layout remains usable
**Preconditions:** Conversation with 30+ messages.  
**Steps:**
1. Open a long thread.
2. Scroll through the thread.

**Expected Results:**
- Messages align consistently.
- Input/composer area remains anchored.
- No layout jumps during scrolling.

#### LAY-04 — Keyboard open does not break layout
**Preconditions:** Chat screen open.  
**Steps:**
1. Tap composer.
2. Open software keyboard.

**Expected Results:**
- Composer remains visible.
- Send/mic/attachment/menu controls are not obscured unexpectedly.
- Message list resizes rather than overlapping keyboard.

#### LAY-05 — Safe area / notch handling
**Preconditions:** Device/emulator with notch or home indicator.  
**Steps:**
1. Open chat screen.
2. Rotate if supported.

**Expected Results:**
- Header and bottom composer do not collide with notch/home indicator.
- Touch targets remain usable near edges.

---

### 2. Navigation & Screen Transitions

#### NAV-01 — Entry into chat screen
**Preconditions:** App starts from home/landing state.  
**Steps:**
1. Navigate into chat.

**Expected Results:**
- Transition completes without blank screen or flicker.
- Correct thread or default conversation appears.

#### NAV-02 — Back navigation from chat
**Preconditions:** User inside active chat.  
**Steps:**
1. Tap system back or app back control.

**Expected Results:**
- Returns to previous screen.
- No frozen state or duplicate stack.

#### NAV-03 — Re-entering same chat preserves state
**Preconditions:** Existing thread with scroll position/content.  
**Steps:**
1. Open thread.
2. Scroll midway.
3. Leave screen.
4. Re-enter.

**Expected Results:**
- State restoration follows intended behavior.
- No duplicated messages or unexpected reset.

#### NAV-04 — Navigation during keyboard-open state
**Preconditions:** Composer focused; keyboard open.  
**Steps:**
1. Open keyboard.
2. Attempt back navigation or menu navigation.

**Expected Results:**
- Keyboard dismisses or navigation proceeds cleanly.
- No stranded half-transition state.

#### NAV-05 — Rapid repeated navigation taps
**Preconditions:** Any screen with navigable actions.  
**Steps:**
1. Tap a navigation control multiple times quickly.

**Expected Results:**
- Only one intended navigation action occurs.
- No duplicate screens or crash.

---

### 3. Composer Behavior

#### COM-01 — Composer accepts short text
**Preconditions:** Chat open.  
**Steps:**
1. Tap composer.
2. Enter short text.

**Expected Results:**
- Text appears immediately.
- Cursor placement is correct.

#### COM-02 — Send button state changes appropriately
**Preconditions:** Chat open.  
**Steps:**
1. Observe send state when composer is empty.
2. Enter text.

**Expected Results:**
- Empty state disables or hides send action as intended.
- Non-empty state enables send.

#### COM-03 — Send single-line message
**Preconditions:** Composer contains valid text.  
**Steps:**
1. Tap send.

**Expected Results:**
- Message is submitted once.
- Composer clears or resets appropriately.
- Thread updates without visual corruption.

#### COM-04 — Multi-line composer growth
**Preconditions:** Chat open.  
**Steps:**
1. Type enough text for 3–6 lines.

**Expected Results:**
- Composer expands up to intended limit.
- Message list area adjusts smoothly.
- No overlap with adjacent controls.

#### COM-05 — Long-text behavior
**Preconditions:** Chat open.  
**Steps:**
1. Paste very long text.

**Expected Results:**
- No freeze, cutoff rendering, or horizontal overflow.
- Internal input scrolling works if capped.

#### COM-06 — Whitespace-only submission
**Preconditions:** Chat open.  
**Steps:**
1. Enter spaces/newlines only.
2. Attempt send.

**Expected Results:**
- Empty-equivalent content is rejected or trimmed.
- No blank message is sent unintentionally.

#### COM-07 — Draft retention after temporary navigation
**Preconditions:** Unsent text exists.  
**Steps:**
1. Type draft.
2. Open menu or attachment picker.
3. Return to composer.

**Expected Results:**
- Draft persists unless intentionally cleared.

#### COM-08 — Rapid send tap prevention
**Preconditions:** Composer contains text.  
**Steps:**
1. Tap send repeatedly quickly.

**Expected Results:**
- At most one message is sent per intended submission.
- No duplicates from tap race.

#### COM-09 — Paste rich/unusual text
**Preconditions:** Chat open.  
**Steps:**
1. Paste text with emoji, URLs, long words, and line breaks.

**Expected Results:**
- Rendering remains stable.
- No broken line wrapping or layout overflow.

---

### 4. Center Mic Behavior

#### MIC-01 — Center mic visible in expected idle state
**Preconditions:** Idle/default chat state.  
**Steps:**
1. Open chat with empty composer.

**Expected Results:**
- Center mic is visible, centered/aligned as designed, and clearly tappable.

#### MIC-02 — Center mic tap triggers intended mode
**Preconditions:** Chat open; mic available.  
**Steps:**
1. Tap center mic.

**Expected Results:**
- Intended voice state/shortcut activates.
- UI feedback confirms activation.

#### MIC-03 — Mic state transitions when text exists
**Preconditions:** Composer has typed text.  
**Steps:**
1. Enter text into composer.

**Expected Results:**
- Mic either hides, disables, or deprioritizes per design.
- No conflicting send-vs-mic state.

#### MIC-04 — Permission denied handling
**Preconditions:** Microphone permission denied.  
**Steps:**
1. Tap center mic.

**Expected Results:**
- Clear error or explanation shown.
- User can recover or cancel.
- No dead-end spinner.

#### MIC-05 — Start then cancel mic interaction
**Preconditions:** Mic mode accessible.  
**Steps:**
1. Tap mic.
2. Cancel before completion.

**Expected Results:**
- Returns to prior composer/chat state cleanly.
- No phantom state remains.

#### MIC-06 — Rapid repeated mic taps
**Preconditions:** Chat open.  
**Steps:**
1. Tap mic repeatedly.

**Expected Results:**
- At most one voice state starts.
- No stacked overlays or crash.

#### MIC-07 — Mic with keyboard previously open
**Preconditions:** Composer focused; keyboard visible.  
**Steps:**
1. Open keyboard.
2. Switch to mic via intended path.

**Expected Results:**
- State transition is smooth.
- Keyboard and mic UI do not overlap improperly.

---

### 5. Menu & Subagent Access

#### MEN-01 — Main menu opens from chat
**Preconditions:** Chat open.  
**Steps:**
1. Tap menu icon/control.

**Expected Results:**
- Menu opens fully within viewport.
- Items are readable and tappable.

#### MEN-02 — Menu closes via dismiss actions
**Preconditions:** Menu open.  
**Steps:**
1. Tap outside menu or close control.

**Expected Results:**
- Menu dismisses reliably.
- Underlying chat returns to active state.

#### MEN-03 — Menu content does not overflow
**Preconditions:** Menu contains multiple actions.  
**Steps:**
1. Open menu.
2. Inspect all items.

**Expected Results:**
- No clipped labels, cut-off icons, or off-screen unreachable items.

#### SUB-01 — Subagent entry point is visible/discoverable
**Preconditions:** Chat/menu available.  
**Steps:**
1. Locate subagent access path.

**Expected Results:**
- Subagent action is understandable from label/icon/context.

#### SUB-02 — Open subagent interface
**Preconditions:** Subagent entry point available.  
**Steps:**
1. Tap subagent access.

**Expected Results:**
- Correct subagent panel/screen opens.
- Transition does not break chat state.

#### SUB-03 — Return from subagent to main chat
**Preconditions:** Inside subagent view.  
**Steps:**
1. Navigate back to main chat.

**Expected Results:**
- Prior thread/composer state is preserved appropriately.

#### SUB-04 — Multiple subagent options render correctly
**Preconditions:** More than one subagent option exists.  
**Steps:**
1. Open subagent list.

**Expected Results:**
- Labels do not truncate badly.
- Selection targets are clear and non-overlapping.

---

### 6. Attachments

#### ATT-01 — Attachment entry point visible and tappable
**Preconditions:** Chat open.  
**Steps:**
1. Locate attachment icon/control.
2. Tap it.

**Expected Results:**
- Attachment picker/sheet opens.

#### ATT-02 — Attach image/photo successfully
**Preconditions:** Photo permissions granted.  
**Steps:**
1. Open attachments.
2. Select image.
3. Confirm attach/send.

**Expected Results:**
- Selected image previews or attaches correctly.
- No layout break in composer/message thread.

#### ATT-03 — Cancel attachment flow
**Preconditions:** Attachment picker open.  
**Steps:**
1. Open picker.
2. Cancel.

**Expected Results:**
- Returns cleanly to chat.
- Draft text remains intact.

#### ATT-04 — Long filename handling
**Preconditions:** Attachment with long filename selected.  
**Steps:**
1. Attach long-name file.

**Expected Results:**
- Filename truncates or wraps safely.
- No horizontal overflow.

#### ATT-05 — Multiple attachments
**Preconditions:** Multi-attach supported.  
**Steps:**
1. Attach several items.

**Expected Results:**
- Layout remains stable.
- Items are readable, removable, and do not break shell width.

---

### 7. Responsiveness & Device Adaptation

#### RWD-01 — Default mobile viewport
**Preconditions:** 390x844 or similar viewport.  
**Steps:**
1. Open app.

**Expected Results:**
- No clipping or overflow.
- Header, thread, composer, and nav all fit.

#### RWD-02 — Narrow mobile viewport
**Preconditions:** Smaller device width.  
**Steps:**
1. Open app at a narrower width.

**Expected Results:**
- Main button, title, avatar, bubbles, and nav remain in bounds.

#### RWD-03 — Larger phone viewport
**Preconditions:** Larger device size.  
**Steps:**
1. Open app.

**Expected Results:**
- Layout remains balanced.
- No excessive dead space.

#### RWD-04 — Orientation change if supported
**Preconditions:** Rotation supported.  
**Steps:**
1. Rotate device.

**Expected Results:**
- No broken layout or state loss.

---

### 8. Overflow Prevention & Content Resilience

#### OVR-01 — Long header labels
**Preconditions:** Long thread or context name.  
**Steps:**
1. Set long header label.

**Expected Results:**
- Truncates safely.
- No horizontal push.

#### OVR-02 — Long message text
**Preconditions:** Very long message text or unbroken string.  
**Steps:**
1. Send long text.

**Expected Results:**
- Wraps inside bubble.
- No shell overflow.

#### OVR-03 — Long filenames
**Preconditions:** Long file names in attachment row.  
**Steps:**
1. Attach long-name file.

**Expected Results:**
- Safe truncation or wrapping.
- No overflow.

#### OVR-04 — Long subagent/thread labels
**Preconditions:** Long item labels in menu/list.  
**Steps:**
1. Open menu with long labels.

**Expected Results:**
- Labels fit or truncate safely.
- No overlap.

---

## Edge Cases
- Extremely long single-word strings
- Many messages in a thread
- Draft present while menu opens
- Keyboard open during nav switch
- Attachment picker canceled
- Rapid tap spam on send/nav/mic
- Very narrow devices
- Mic permission denied
- Safe-area edge devices
- Cached asset mismatch after push
- Thread/subagent names longer than expected

---

## Visual Regression Checklist
Check after every meaningful UI change:
- header height compact
- Main button alignment
- title/subtitle fit
- avatar alignment
- message bubble alignment
- no horizontal overflow
- composer height
- send button alignment
- bottom nav spacing
- center mic visual balance
- menu sheet spacing
- attachment row fit
- safe-area bottom spacing
- no unintended dead vertical space

---

## Smoke vs Full Regression Split

### Smoke
- app loads
- header fits
- composer works
- send works
- mic visible/tappable
- Main menu opens/closes
- attachment entry opens
- no horizontal overflow
- bottom nav works

### Full Regression
- all smoke tests
- long-thread behavior
- keyboard transitions
- draft retention
- rapid tap resilience
- permission-denied paths
- attachment edge cases
- long text/filename wrapping
- subagent/thread switching
- responsive viewport sweep
- safe-area validation
- visual regression checklist
