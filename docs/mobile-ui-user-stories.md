# ZeeBot Mobile Prototype — User Stories

## Product Direction
Current agreed UI direction:
- full-height mobile shell
- chat-first experience
- top-left **Main** menu for threads/subagents
- bottom nav with center mic
- tighter composer
- no suggestion chips
- no helper-text clutter

## Product Principles
1. Chat is the primary action surface.
2. The interface should feel mobile-native and uncluttered.
3. Navigation stays accessible without competing with conversation.
4. Subagents and threads are available, but secondary to chatting.
5. Voice entry is prominent, but not disruptive to text chat.

## Epics / Modules
1. Mobile Shell & Layout Framework
2. Chat Home & Conversation Surface
3. Composer & Input Actions
4. Main Menu: Threads & Subagents
5. Bottom Navigation
6. Voice Entry / Center Mic
7. Attachments
8. Conversation State / Empty / Error / Loading States
9. Responsiveness / Overflow Prevention
10. Usability / Accessibility / Regression

---

## Epic 1 — Mobile Shell & Layout Framework

### US-1.1 Full-height mobile shell
**As a** mobile user  
**I want** the app to render in a full-height mobile shell  
**So that** the experience feels like a focused messaging app rather than a webpage inside a browser.

**Acceptance Criteria**
1. The primary app container fills the full visible mobile viewport height.
2. The layout adapts to mobile browser UI changes without large blank gaps.
3. No extra full-page vertical scroll exists in the active chat view; scrolling occurs only in intended content regions.
4. Top bar, chat region, composer, and bottom nav remain structurally stable across supported mobile sizes.
5. Safe-area insets are respected on devices with notches or home indicators.

### US-1.2 Persistent structural regions
**As a** user  
**I want** consistent placement of the top bar, chat area, composer, and bottom nav  
**So that** I can build muscle memory and navigate quickly.

**Acceptance Criteria**
1. The top-left Main menu trigger remains in the header area on primary chat screens.
2. The composer stays anchored near the bottom of the shell.
3. The bottom nav remains visible in core screens unless a deliberate full-screen mode hides it.
4. Structural regions do not jump position during normal loading or message updates.
5. Layout spacing remains visually compact without unnecessary empty bands.

---

## Epic 2 — Chat Home & Conversation Surface

### US-2.1 Chat-first landing experience
**As a** returning or new user  
**I want** the main screen to prioritize the conversation area  
**So that** I can immediately read or continue chatting.

**Acceptance Criteria**
1. On app launch, the chat surface occupies the majority of visible screen space.
2. The default focal point is the conversation area or composer, not promotional or instructional UI.
3. No suggestion chips are shown in the default chat home.
4. No persistent helper text block is shown around the composer in the default state.
5. If there is no history, the empty state remains minimal and does not push the composer far down the screen.

### US-2.2 Minimal empty state
**As a** first-time user  
**I want** a clean empty chat state  
**So that** I can understand where to begin without visual clutter.

**Acceptance Criteria**
1. The empty state contains at most a minimal title, brand cue, or one-line prompt.
2. The empty state does not include suggestion chips.
3. The empty state does not include multi-line helper copy unless explicitly triggered.
4. The composer is visible without scrolling.
5. Empty-state content does not visually dominate the screen over the composer.

### US-2.3 Readable conversation thread
**As a** user in an active chat  
**I want** messages to be easy to scan in the available vertical space  
**So that** I can follow the conversation efficiently.

**Acceptance Criteria**
1. Message bubbles/rows are readable without overlapping nav or composer controls.
2. The conversation list scrolls independently from fixed shell regions.
3. New messages append in chronological order and remain visually anchored.
4. Spacing remains compact but legible.
5. Long conversations do not visibly break shell layout.

---

## Epic 3 — Composer & Input Actions

### US-3.1 Tighter composer footprint
**As a** user  
**I want** a compact composer  
**So that** more of the conversation remains visible on screen.

**Acceptance Criteria**
1. The composer uses a visually tighter footprint than a large multi-row design.
2. In the default state, the composer occupies only the minimum height needed for one-line text entry plus actions.
3. The composer expands only as needed when text wraps, up to a defined max height.
4. After max height, further text entry scrolls within the input.
5. Composer spacing does not create a large dead zone above bottom nav.

### US-3.2 Primary text message sending
**As a** user  
**I want** to type and send a message quickly  
**So that** I can interact with the assistant with minimal friction.

**Acceptance Criteria**
1. Tapping the composer focuses the text input.
2. Entered text remains visible and editable before sending.
3. The send action is available when message content is valid.
4. Sending adds the user message to the thread and clears the composer on success.
5. Empty or whitespace-only messages cannot be sent.

### US-3.3 Keyboard-aware composer behavior
**As a** mobile user  
**I want** the composer to remain usable when the keyboard opens  
**So that** text entry feels stable and native.

**Acceptance Criteria**
1. When the keyboard opens, the focused composer remains visible.
2. The active input is not obscured by the keyboard.
3. The bottom nav and composer reposition gracefully without overlapping.
4. The conversation view adjusts so recent messages and the active draft remain accessible.
5. Closing the keyboard restores the shell without broken spacing.

### US-3.4 No suggestion chips or helper-text clutter
**As a** user  
**I want** the composer area to stay visually clean  
**So that** I can focus on my own prompt instead of UI noise.

**Acceptance Criteria**
1. No suggestion chips are rendered above the composer in the main chat experience.
2. No persistent helper text is rendered around the composer by default.
3. Error or validation text appears only when contextually required.
4. Any transient system guidance does not permanently consume layout space.
5. Core actions like send or mic remain accessible without helper copy.

---

## Epic 4 — Main Menu: Threads & Subagents

### US-4.1 Top-left Main menu access
**As a** user  
**I want** a clearly placed Main menu in the top-left  
**So that** I can access secondary navigation patterns from a predictable location.

**Acceptance Criteria**
1. A Main menu trigger is present in the top-left area of the primary shell.
2. The trigger is visible and tappable on the main chat screen.
3. Activating the trigger opens the Main menu in a consistent manner.
4. The menu can be dismissed without losing chat context.
5. The trigger placement does not compete with the composer or bottom nav.

### US-4.2 Access threads from Main menu
**As a** user with multiple conversations  
**I want** to browse and switch threads from the Main menu  
**So that** I can return to previous conversations.

**Acceptance Criteria**
1. The Main menu contains a section or list for threads.
2. Each visible thread item has enough information to distinguish it from others.
3. Tapping a thread opens that conversation.
4. The currently active thread is visually identifiable.
5. Closing or leaving the menu preserves the selected thread state.

### US-4.3 Access subagents from Main menu
**As a** user  
**I want** to access available subagents from the Main menu  
**So that** I can switch context or capability without cluttering the main chat screen.

**Acceptance Criteria**
1. The Main menu contains a section or entry point for subagents.
2. Users can view the list of available subagents from the menu.
3. Selecting a subagent updates the visible chat context or starts a subagent-specific flow.
4. The selected subagent state is reflected clearly.
5. Subagent access does not require leaving the primary mobile shell pattern.

### US-4.4 Menu usability on mobile
**As a** mobile user  
**I want** the Main menu to be easy to use on small screens  
**So that** secondary navigation does not feel cramped or confusing.

**Acceptance Criteria**
1. Menu items are large enough to tap reliably on mobile.
2. Long thread or subagent lists are scrollable within the menu region.
3. The menu does not obscure critical system UI in a broken way.
4. The user can dismiss the menu via a clear gesture or control.
5. Opening the menu does not reset the active chat draft.

---

## Epic 5 — Bottom Navigation

### US-5.1 Persistent bottom navigation
**As a** user  
**I want** a bottom navigation bar for core destinations  
**So that** I can move across the app quickly.

**Acceptance Criteria**
1. A bottom navigation bar is present in the main shell.
2. The nav contains the agreed core destinations for MVP.
3. The currently active destination is visually highlighted.
4. Navigation items remain accessible without obscuring chat content.
5. Bottom nav spacing respects safe areas and device ergonomics.

### US-5.2 Center mic prominence in bottom nav
**As a** user  
**I want** the microphone action to be centered and visually prominent  
**So that** voice entry is easy to discover and initiate.

**Acceptance Criteria**
1. The microphone action appears in the center position of the bottom nav.
2. The mic is visually more prominent than standard nav items.
3. The mic remains tappable and unobstructed on supported mobile sizes.
4. Prominence does not break nav balance or usability.
5. The mic’s visual treatment clearly indicates actionability.

### US-5.3 Bottom nav coexistence with composer
**As a** user  
**I want** bottom navigation and the composer to coexist cleanly  
**So that** the app feels organized rather than crowded.

**Acceptance Criteria**
1. Composer and bottom nav do not overlap interactively or visually.
2. Tapping nav items does not corrupt the current draft.
3. Returning to chat restores composer and recent thread state as defined.
4. Bottom nav does not push the composer to an impractical height.
5. Keyboard-open state is handled cleanly.

---

## Epic 6 — Voice Entry / Center Mic

### US-6.1 Single voice affordance
**As a** user  
**I want** one clear voice entry point  
**So that** voice feels simple rather than duplicated.

**Acceptance Criteria**
1. No duplicate voice controls are shown elsewhere in the main shell.
2. The center mic is the canonical voice entry.
3. There is no separate voice-mode clutter on the main screen.
4. The mic remains discoverable when idle.
5. The mic does not visually compete with too many neighboring controls.

### US-6.2 Mic activation behavior
**As a** user  
**I want** tapping the center mic to trigger the intended voice behavior  
**So that** I can use voice naturally.

**Acceptance Criteria**
1. Tapping the mic gives immediate feedback.
2. The triggered behavior is consistent and non-broken.
3. The chat shell remains structurally stable during the transition.
4. Cancelling or backing out returns to a valid state.
5. Repeated taps do not create duplicate or stacked states.

### US-6.3 Mic/text coexistence
**As a** user  
**I want** mic behavior to remain clear relative to typed text  
**So that** the primary action is never confusing.

**Acceptance Criteria**
1. Typed text does not corrupt mic state.
2. Mic activation does not erase draft text unexpectedly.
3. Keyboard and mic flows do not overlap in a broken way.
4. Error states are recoverable.
5. Voice-related permissions or failures are handled cleanly.

---

## Epic 7 — Attachments

### US-7.1 Attachment entry
**As a** user  
**I want** to attach files from the composer area  
**So that** I can add context quickly.

**Acceptance Criteria**
1. The attachment entry point is visible.
2. Tapping it opens the intended picker/sheet/screen.
3. Cancelling returns cleanly without losing draft.
4. Attachment entry does not break chat layout.
5. Attachment access remains usable on small screens.

### US-7.2 Attachment state and preview
**As a** user  
**I want** attached items to appear in a compact way  
**So that** I know what will be sent without clutter.

**Acceptance Criteria**
1. Attached items show clearly.
2. Attached items can be removed if needed.
3. Long names or multiple items do not break layout.
4. Preview state remains visually compact.
5. Attachment rows remain scrollable or truncatable as designed.

---

## Epic 8 — Responsiveness / Overflow Prevention

### US-8.1 No horizontal overflow
**As a** user  
**I want** all content to fit mobile width  
**So that** nothing spills off-screen.

**Acceptance Criteria**
1. No horizontal scrolling exists in the main shell.
2. Long text wraps safely inside messages and controls.
3. Header elements, nav items, attachment rows, menus, and message bubbles stay within bounds.
4. Very long labels truncate or wrap safely.
5. Overflow prevention works across supported mobile widths.

### US-8.2 Slim header
**As a** user  
**I want** a slim header  
**So that** more vertical space remains for conversation.

**Acceptance Criteria**
1. Header height is compact.
2. Main button, title block, and avatar fit without crowding.
3. Text styles do not waste space.
4. Safe-area handling remains correct.
5. The header still communicates active context clearly.

---

## Open Questions / Assumptions
1. Is the center mic a true voice recorder, or currently a shortcut/state entry?
2. Should subagent selection switch chat context directly, or open a separate drill-in?
3. What are the final bottom-nav destinations for v1?
4. Should attachments be direct picker entry, sheet-based, or context-aware?
5. Should voice eventually transcribe into the composer first, or send audio directly?
