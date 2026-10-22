# Playlist Copilot — User Flows

## Flow 1: First-Time User (Happy Path)

```
User lands on /                          "What is this?"
    ↓
Reads hero section                       Understands value prop
    ↓
Clicks "Login with Spotify"              Intent to try
    ↓
Redirects to Spotify OAuth page          Browser redirect
    ↓
User authorizes permissions              Spotify consent screen
    ↓
Redirects back to /syncing               App receives token
    ↓
Sees "Syncing your library..."           Progress bar, 200 recent songs
    ↓
Sync complete → /home                    Dashboard with stats
    ↓
User sees prompt input box               "Describe your mood..."
    ↓
Types: "15-min shower, R&B, upbeat"      Natural language input
    ↓
Clicks "Generate Playlist"               Pink CTA button
    ↓
Sees step animation:                     "Understanding..."
    "Understanding your request..."       → "Searching..."
    "Searching your library..."           → "Creating..."
    "Creating your playlist..."           → Complete
    ↓
Sees Playlist Result page                Track list, album art, matched reason
    ↓
Clicks "Open in Spotify"                 Deep link to Spotify app/web
    ↓
Spotify opens → Playlist is there        Plays immediately
    ↓
User starts playback                      Primary success metric
```

## Flow 2: Returning User (Happy Path)

```
Returns to /home                         (Session still valid)
    ↓
Prompt input box visible                 Previous prompt still there or cleared
    ↓
Types new prompt                         "Bedtime, calm, acoustic"
    ↓
Clicks Generate → Processing → Result    Same pipeline
    ↓
Opens in Spotify                         Done
```

## Flow 3: Returning User — Reuse Prompt

```
Returns to /home
    ↓
Scrolls down to "Recent Playlists"       Or navigates to /history
    ↓
Sees past prompt: "Commute, high energy" Date + track count
    ↓
Clicks "Reuse"                           Pre-fills prompt
    ↓
Clicks Generate                          Same pipeline
    ↓
New playlist created                     Fresh playlist; V1 does not overwrite old playlists
```

## Edge Case Flows

### E1: Spotify OAuth Denied

```
User clicks "Login with Spotify"
    ↓
Spotify OAuth page opens
    ↓
User clicks "Cancel" or denies
    ↓
Redirect back to / with error toast:
    "Login cancelled. You need to authorize to use Playlist Copilot."
    ↓
User can try again
```

### E2: Token Expired Mid-Session

```
User on /home, clicks Generate
    ↓
API call returns 401
    ↓
Toast: "Your session expired. Redirecting to login..."
    ↓
Auto-redirect to /login
    ↓
User clicks "Login with Spotify" (usually auto-redirects)
```

### E3: Library Sync Failed

```
User on /syncing
    ↓
Sync process encounters error (rate limit / network)
    ↓
Screen shows:
    "Something went wrong syncing your library."
    [Retry Sync]  [Skip for Now]
    ↓
Retry: restarts sync | Skip: goes to /home with reduced library
    ↓
If Skip: Home shows "Syncing X more songs in background..." toast
```

### E4: Empty Prompt Submitted

```
User on /home, prompt input is empty
    ↓
Clicks "Generate Playlist"
    ↓
Input border turns red + message below:
    "Tell us what you want to hear! e.g., 'Chill jazz for studying'"
    ↓
Focus returns to input. User types something.
```

### E5: LLM Parse Failure / Low Confidence

```
User submits prompt
    ↓
DeepSeek returns low confidence, malformed JSON, or timeout
    ↓
Branch:
    → If confidence is 0.4-0.7: Show one clarification question
      "Do you want more R&B or Pop?"
    → If JSON is malformed or request times out: Retry once internally
    → If confidence is < 0.4 or retry still fails: Use fallback keyword/default parameters
      "I created a playlist based on what I understood. Want to try describing it differently?"
    ↓
User can: answer clarification, accept fallback playlist, or re-enter prompt
```

### E6: No Matching Tracks Found

```
User submits prompt with very specific constraints
    ↓
Database query returns 0 results
    ↓
Screen shows:
    "🔍 No tracks matched your description."
    "Try broadening your search — remove specific genres or moods."
    [Try a Different Description]
    ↓
Or auto-broaden: relax one parameter, re-query, show "We found X tracks by relaxing your genre filter"
```

**V1 note**: Auto-broadening should be conservative. If implemented, relax only one constraint and explain it clearly. Otherwise, return the no-results state and ask the user to broaden the prompt.

### E7: Spotify Playlist Creation Failed

```
Playlist generation succeeds, but Spotify API call fails
    ↓
Toast: "Couldn't create playlist on Spotify. Please try again."
    ↓
Track list still visible on screen
    ↓
[Retry] button → re-attempts Spotify API call only
```

## Full Flow Diagram (Mermaid)

```mermaid
flowchart TD
    START([User opens app]) --> AUTH{Logged in?}
    AUTH -->|No| LANDING[Landing Page]
    AUTH -->|Yes| HOME[Home / Dashboard]
    
    LANDING --> LOGIN[Login with Spotify]
    LOGIN --> OAUTH{Authorize?}
    OAUTH -->|Yes| SYNC[Syncing Library]
    OAUTH -->|No| DENIED[Login Cancelled Toast]
    DENIED --> LANDING
    
    SYNC --> SYNC_OK{Sync OK?}
    SYNC_OK -->|Yes| HOME
    SYNC_OK -->|No| SYNC_ERR[Sync Error: Retry or Skip]
    SYNC_ERR -->|Retry| SYNC
    SYNC_ERR -->|Skip| HOME
    
    HOME --> INPUT[Enter Prompt]
    INPUT --> VALID{Valid?}
    VALID -->|Empty| EMPTY[Validation: "Tell us what you want!"]
    EMPTY --> INPUT
    VALID -->|OK| GENERATE[Generating...]
    
    GENERATE --> LLM{LLM Parse OK?}
    LLM -->|OK| SEARCH[Search Library]
    LLM -->|Low Confidence| CLARIFY[Clarification Question]
    CLARIFY --> SEARCH
    LLM -->|Fail| FALLBACK[Fallback: keyword match]
    FALLBACK --> SEARCH
    
    SEARCH --> FOUND{Results?}
    FOUND -->|Yes| CREATE[Create Spotify Playlist]
    FOUND -->|No| NO_RES[No Results: broaden suggestion]
    NO_RES --> INPUT
    
    CREATE --> SPOTIFY{Spotify OK?}
    SPOTIFY -->|Yes| RESULT[Playlist Result Page]
    SPOTIFY -->|No| SPOT_ERR[Retry / Error toast]
    SPOT_ERR --> CREATE
    
    RESULT --> OPEN[Open in Spotify]
    RESULT --> NEW[New Prompt]
    RESULT --> HIST[View History]
    
    NEW --> INPUT
    HIST --> REUSE[Reuse or View]
```

## Session & State Notes

| State | Persistence | Notes |
|---|---|---|
| Spotify OAuth Token | Session cookie / JWT | Auto-refresh; expire → re-login |
| Library Sync Status | DB flag per user | "syncing" / "synced" / "error" |
| Current Prompt | URL state or local | Survives page refresh |
| Generated Playlist | DB record + Spotify ID | Always retrievable from History |
| Processing Step | UI state only | Lost on refresh → show result if completed |

## Product Flow Notes

| Area | Recommendation |
|---|---|
| **Clarification** | Keep it to one question. The product is a fast playlist generator, not a chatbot. |
| **Result explanation** | Show one natural sentence first, then tags. Tags alone can feel like machine output. |
| **Unsupported metadata** | Do not promise attributes that Spotify metadata cannot verify, such as vocal gender. Treat them as user preferences or future enhancements. |
| **Open in Spotify** | This is the key conversion action. Do not add a competing "Save" CTA in V1. |
