# Playlist Copilot — UX Copy

> Principle: Every word in the UI should feel like a music friend talking, not a robot or a corporate product.

---

## Landing Page

| Element | Copy |
|---|---|
| **Hero Headline** | "Describe it. We'll find it." |
| **Hero Alt Headlines (A/B test)** | "Turn your Spotify library into the perfect playlist." / "Your music, your words, your playlist." |
| **Hero Subhead** | "Tell us your mood, scene, or vibe. We search your library for the right songs — instantly." |
| **Hero Example** | "15-min shower, upbeat R&B" → Playlist appears instantly (visual demo in hero) |
| **CTA Button** | "Login with Spotify" |
| **How It Works — Step 1** | "1. Connect your Spotify" |
| **How It Works — Step 1 Sub** | "Link your account. We only access your Liked Songs and playlists." |
| **How It Works — Step 2** | "2. Describe your mood" |
| **How It Works — Step 2 Sub** | "Say it naturally. \"Rainy day indie\" or \"Shower R&B\" — whatever feels right." |
| **How It Works — Step 3** | "3. Play instantly" |
| **How It Works — Step 3 Sub** | "Your playlist appears in Spotify. Open and press play. That's it." |
| **Footer** | "Built with ❤️ + AI · Not affiliated with Spotify" |

---

## Login Page

| Element | Copy |
|---|---|
| **Page Title** | "Connect your Spotify" |
| **CTA Button** | "Login with Spotify" |
| **Permission Note** | "We'll ask for permission to:" |
| **Permission Bullet 1** | "Read your Liked Songs and playlists" |
| **Permission Bullet 2** | "Create new playlists" |
| **Permission Bullet 3** | "Add tracks to playlists" |
| **Privacy Note** | "We never see your password, email, or private data. You can disconnect anytime." |
| **Cancel Link** | "← Back" |

---

## Syncing Page

| State | Copy |
|---|---|
| **Syncing (active)** | "Syncing your library..." |
| **Syncing Subtitle** | "Pulling in your liked songs so we can find the right ones." |
| **Syncing Note** | "⚡ This only happens once. We'll keep your library updated automatically." |
| **Progress Detail** | "Synced 142 of 200 recent tracks" |
| **Skip Option** | "Skip for now" (secondary link) |
| **Sync Complete** | "All synced! 🎉" |
| **Sync Complete Sub** | "We found 2,347 tracks in your library. Ready to go." |
| **Sync Error** | "Something went wrong." |
| **Sync Error Sub** | "We couldn't sync your library. This might be a temporary Spotify issue." |
| **Sync Error CTA** | "Try Again" / "Skip for Now" |

---

## Home / Dashboard

| Element | Copy |
|---|---|
| **Welcome** | "Hi there 👋" |
| **Library Stats** | "2,347 tracks synced" (with small "Re-sync" link) |
| **Prompt Placeholder** | "Describe what you want to hear..." |
| **Prompt Hint** | "Try describing a scene, mood, or activity — like you're talking to a friend who knows your music taste." |
| **Example Chip 1** | "15-min shower, R&B, upbeat" |
| **Example Chip 2** | "Coffee shop study, instrumental jazz" |
| **Example Chip 3** | "Commute, high energy" |
| **Example Chip 4** | "Bedtime, calm acoustic" |
| **CTA Button** | "Generate Playlist" |
| **Recent Section Header** | "Recent Playlists" |
| **Recent View All** | "View all" |
| **Recent Empty** | "Your generated playlists will show up here." |
| **Nav — Home** | "Home" |
| **Nav — History** | "History" |
| **Nav — Settings** | "Settings" |

---

## Generating Page (Processing Animation)

| Step | Copy | Duration |
|---|---|---|
| **Step 1** | "Understanding your request..." | 1-3 sec |
| **Step 2** | "Searching your library..." | 1-5 sec |
| **Step 3** | "Creating your playlist..." | 2-5 sec |
| **Complete** | "Ready to press play. 🎧" | — |
| **Fun Detail** | Floating music note emojis: 🎵 🎶 ✨ (subtle animation) | Throughout |

---

## Clarification State

Use this only when confidence is medium, not for every prompt.

| Element | Copy |
|---|---|
| **Clarification Title** | "Just to make sure..." |
| **Clarification Prompt** | "Did you mean more R&B or more Pop?" |
| **Option 1** | "R&B" |
| **Option 2** | "Pop" |
| **Option 3** | "Both" |
| **Secondary Link** | "I'll rephrase it" |

---

## Playlist Result Page

| Element | Copy |
|---|---|
| **Page Title** | "Your Playlist" |
| **Playlist Name** | LLM-generated: e.g., "Upbeat R&B Shower" (or user-editable in V1.1) |
| **Track Count** | "15 tracks · 52 min" |
| **Primary CTA** | "Open in Spotify" (with Spotify logo) |
| **Primary CTA Sub** | "Your playlist is already saved in Spotify." |
| **Secondary CTA** | "New Prompt" |
| **Track List** | Album art + Title + Artist per row |
| **Track List Empty** | — (shouldn't happen if flow is correct) |
| **Matched Because Sentence** | "Matched your upbeat R&B shower vibe using songs from your library for a short session." |
| **Matched Tags** | "upbeat" / "R&B" / "short session" |
| **Quick Refine Placeholder** | "Quick Refine is coming in V1.1." |

---

## History Page

| Element | Copy |
|---|---|
| **Page Title** | "History" |
| **Empty State** | "No playlists yet." |
| **Empty Sub** | "Go to Home and describe what you want to hear." |
| **Empty CTA** | "Create Your First Playlist" |
| **History Card** | Date + Prompt preview (truncated) + Track count + "Open in Spotify" link |
| **Reuse Button** | "Reuse" |

---

## Settings Page

| Element | Copy |
|---|---|
| **Page Title** | "Settings" |
| **Section: Account** | "Account" |
| **Account Status** | "Connected as [Spotify username]" |
| **Disconnect** | "Disconnect Spotify" |
| **Disconnect Confirm** | "Are you sure? You'll lose access to your library until you reconnect." |
| **Section: Library** | "Library" |
| **Sync Status** | "Last synced: 2 hours ago · 2,347 tracks" |
| **Re-sync Button** | "Re-sync Library" |
| **Section: About** | "About" |
| **Version** | "Playlist Copilot v1.0" |
| **Credits** | "Built with DeepSeek, Next.js, and Spotify API" |

---

## Error & Edge Case Copy

| State | Copy |
|---|---|
| **Empty Prompt** | "Tell us what you want to hear! 😊" |
| **Empty Prompt Hint** | "e.g., 'Chill jazz for studying' or 'Upbeat pop for running'" |
| **Token Expired** | "Your session expired. Logging you back in..." |
| **Sync Failed** | "Couldn't sync right now. You can still use the app with your last synced library." |
| **LLM Parse Failed** | "I wasn't completely sure what you meant, but I gave it a try." |
| **LLM Parse Failed Sub** | "Want to describe it differently?" |
| **No Results** | "No tracks matched your description." |
| **No Results Hint** | "Try removing specific genres or moods to broaden your search." |
| **No Results CTA** | "Try a Different Description" |
| **Clarification Prompt** | "Just to make sure — did you mean more R&B or more Pop?" |
| **Clarification Options** | "R&B" / "Pop" / "Both" |
| **Spotify Error** | "Couldn't create the playlist on Spotify. Please try again." |
| **Network Error** | "Looks like you're offline. Check your connection and try again." |
| **Generic Error** | "Something went wrong. Please try again in a moment." |

---

## Microcopy Principles

| Principle | Example |
|---|---|
| **Be human, not robotic** | "Tell us what you want to hear!" not "Enter search parameters" |
| **Be brief** | Buttons ≤ 3 words. Descriptions ≤ 1 line. |
| **Be helpful on errors** | Every error tells you what went wrong AND what to do next |
| **Celebrate completion** | 🎉 🎵 ✨ — music is emotional, the copy should be too |
| **Never blame the user** | "No tracks matched" not "You entered an invalid prompt" |

---

## AI Feedback & Explainability Copy

### Generating — AI Understanding Feedback

| Element | Copy |
|---|---|
| **AI Label** | "AI detected ↓" |
| **Matched Tags** | "✓ upbeat" / "✓ R&B" / "✓ 15 min" |
| **Uncertain Tag** | "? vocals requested" / "? pop" (indicates low confidence or unsupported metadata) |
| **Step Text** | unchanged: "Understanding your request..." → "Searching your library..." → "Creating your playlist..." |

### Playlist Result — Explainability

| Element | Copy |
|---|---|
| **Explain Box Title** | "💡 Matched because:" |
| **Explain Sentence** | "Matched your upbeat R&B shower vibe using songs from your library for a short session." |
| **Match Tags** | "✓ upbeat" / "✓ R&B" / "✓ short session" |
| **Quick Refine (V1.1 placeholder)** | "Quick Refine is coming in V1.1." with disabled chips: "More R&B" / "Less pop" / "Shorter" |

### Unsupported Metadata Rule

Do not show "female vocals" or similar attributes as a confirmed match in V1 unless the product has a reliable metadata source. If the user asks for it, treat it as a preference in the prompt, not as a guaranteed filter.

---

## Copy for Relume / Galileo / Figma

Use these directly when designing screens:

### Hero Section Copy Block
```
Headline: Your music, your words, your playlist.
Subhead: Describe how you feel. We'll find the right songs from your Spotify library.
CTA: Login with Spotify
```

### Prompt Input Copy Block
```
Placeholder: Describe what you want to hear...
Hint: Try describing a scene, mood, or activity — like talking to a music-loving friend.
Chips: 15-min shower, R&B, upbeat | Coffee shop study, instrumental jazz | Commute, high energy
```

### Generating Copy Block (3-step sequence)
```
Step 1: Understanding your request...
Step 2: Searching your library...
Step 3: Creating your playlist...
Done: Done! 🎵
```
