# Playlist Copilot — Task Flows

## Task 1: Generate a Playlist (Core Task)

| Step | Actor | Action | System Response | Notes |
|---|---|---|---|---|
| **Goal** | User | Open app wanting music for a specific context | — | Mental state: "I need music for X" |
| **1. Navigate** | User | Opens app / returns to Home | Loads dashboard, shows prompt input | Already logged in |
| **2. Describe** | User | Types prompt: "Coffee shop study, instrumental jazz" | Input shows text, character count updates | Free-form, no constraints |
| **3. Submit** | User | Clicks "Generate Playlist" | Input locks; button shows spinner | Validates non-empty |
| **4. Understand** | System | — | Shows "Understanding your request..." (1-3s) | DeepSeek API call |
| **5. Search** | System | — | Shows "Searching your library..." (1-5s) | Turso DB query |
| **6. Create** | System | — | Shows "Creating your playlist..." (2-5s) | Spotify API call |
| **7. Review** | User | Sees playlist with track list | Shows Result page: name, tracks, album art, matched reason | Satisfaction check |
| **8. Play** | User | Clicks "Open in Spotify" | Deep links to Spotify; playlist ready | End of core flow |
| **9. Return** | User | Optional: returns to Home for new prompt | Home resets; prompt input cleared | Or stays in Spotify |

**Success metric**: User clicks "Open in Spotify" and starts playback.

---

## Task 2: First-Time Onboarding

| Step | Actor | Action | System Response | Notes |
|---|---|---|---|---|
| **Goal** | New User | Discover app, want to try it | — | No account linked |
| **1. Land** | User | Arrives at Landing page | Shows hero, value prop, CTA | Could be from link/share |
| **2. Decide** | User | Reads value prop, clicks "Login with Spotify" | Redirects to Spotify OAuth | Trust moment |
| **3. Authorize** | User | Reads permissions, clicks "Agree" | Redirects back with token | Spotify handles auth |
| **4. Wait** | User | Sees "Syncing your library..." | Pulls 200 recent Liked Songs + Audio Features | First sync only |
| **5. Explore** | User | Arrives at Home with synced library | Shows library stats + prompt input | Ready to use |
| **6. Try** | User | Clicks an example chip or types prompt | Pre-fills input or focuses textarea | Learning moment |

**Success metric**: User completes first playlist generation within 2 minutes of landing.

---

## Task 3: Reuse a Past Prompt

| Step | Actor | Action | System Response | Notes |
|---|---|---|---|---|
| **Goal** | User | Want to recreate a playlist from a previous prompt | — | Recurring scenario |
| **1. Navigate** | User | Goes to History (/history) or scrolls to Recent | Shows list of past prompts | Top-down chronological |
| **2. Scan** | User | Reads past prompts, finds target | Each card: prompt text, date, track count | Scan, don't read |
| **3. Reuse** | User | Clicks "Reuse" on a past prompt | Pre-fills prompt input; navigates to Home | Same text, fresh generation |
| **4. Generate** | User | Clicks "Generate Playlist" | Standard pipeline runs | New playlist created |
| **5. Compare** | User | Optional: compares new vs old playlist | — | V1 creates a fresh playlist instead of overwriting old ones |

**Success metric**: User completes reuse flow in < 3 clicks.

---

## Task 4: Handle a Failed Generation

| Step | Actor | Action | System Response | Notes |
|---|---|---|---|---|
| **Goal** | User | Prompt didn't work; needs to recover | — | Could be LLM error or no results |
| **1. Submit** | User | Enters prompt, clicks Generate | Pipeline starts | Normal so far |
| **2. Clarify** | System | LLM returns medium confidence (0.4-0.7) | Shows clarification: "Do you want more R&B or Pop?" | AI UX moment |
| **3. Clarify** | User | Clicks "R&B", "Pop", or "Both" | Continues generation with the selected constraint | Only one round |
| **4. Wait** | User | (if clarification succeeds) | Pipeline continues | Or falls back |
| **5. Repair** | User | If parsing fails or no results: reads suggestion | "Try broadening: remove genre filter" | Gentle guidance |
| **6. Retry** | User | Edits prompt, clicks Generate again | New pipeline run | Learned what not to say |

**Success metric**: User doesn't abandon. 80% of failed prompts lead to successful retry.

---

## Task 5: Re-sync Library

| Step | Actor | Action | System Response | Notes |
|---|---|---|---|---|
| **Goal** | User | Added many new Liked Songs; wants them available | — | Power user behavior |
| **1. Navigate** | User | Goes to Settings (/settings) | Shows account + sync status | Low frequency |
| **2. Trigger** | User | Clicks "Re-sync Library" | Button shows spinner; "Syncing..." | Manual trigger |
| **3. Wait** | System | Pulls new Liked Songs + Audio Features | Incremental sync (only new tracks) | Faster than first sync |
| **4. Done** | User | Sees "Sync complete: +42 new tracks" | Stats updated; returns to Home | Background possible too |

**Success metric**: Re-sync completes in < 30 seconds for incremental updates.

---

## Task Decomposition for Usability Testing

Each Task above can be given to a test participant as a scenario:

> **Scenario 1**: "Imagine you're about to take a shower and want upbeat R&B. Use this app to create a playlist."
>
> **Scenario 2**: "You used this app yesterday to create a commute playlist. Create a similar one today."
>
> **Scenario 3**: "The app didn't understand your prompt. Figure out what to do."

| Measure | How to Capture |
|---|---|
| Time on Task | Stopwatch from prompt given to completion |
| Error Rate | Count of wrong clicks, dead ends, confusion moments |
| Satisfaction | Post-task: "How easy was that? (1-5)" |
| Verbal Commentary | Think-aloud protocol during test |

## V1 Design Notes

| Note | Why it matters |
|---|---|
| Keep Home focused on one action: describing music need | This supports the product principle of speed over features. |
| Clarification should be one-tap when possible | Users are trying to start listening, not configure search filters. |
| Result explanation should combine sentence + tags | A sentence builds trust; tags make the AI reasoning scannable. |
| Treat vocal gender and similar attributes as unsupported in V1 | Spotify Audio Features do not reliably provide this metadata. |
| Mark Quick Refine as V1.1 | It is a strong future feature, but not required to validate the MVP loop. |
