import {
  Clock,
  Coffee,
  Moon,
  Music2,
  Route,
  ShowerHead,
  Sparkles,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ExampleChip = {
  label: string;
  prompt: string;
  icon: LucideIcon;
};

export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverClass: string;
};

export type HistoryItem = {
  id: string;
  prompt: string;
  playlistName: string;
  date: string;
  trackCount: number;
  duration: string;
};

export const libraryStats = {
  tracks: "2,347",
  playlists: "68",
  lastSynced: "2 hours ago",
  syncedRecent: 142,
  syncTarget: 200
};

export const sceneChips: ExampleChip[] = [
  {
    label: "Shower",
    prompt: "15-min shower, R&B, upbeat",
    icon: ShowerHead
  },
  {
    label: "Study",
    prompt: "Coffee shop study, instrumental jazz",
    icon: Coffee
  },
  {
    label: "Commute",
    prompt: "Commute, high energy, strong beat",
    icon: Route
  },
  {
    label: "Sleep",
    prompt: "Bedtime, calm acoustic, warm",
    icon: Moon
  }
];

export const vibeChips: ExampleChip[] = [
  {
    label: "Upbeat",
    prompt: "upbeat, energetic",
    icon: Zap
  },
  {
    label: "Chill",
    prompt: "chill, relaxed",
    icon: Sparkles
  },
  {
    label: "R&B",
    prompt: "R&B, soulful",
    icon: Music2
  },
  {
    label: "Short",
    prompt: "under 20 minutes",
    icon: Clock
  }
];

export const detectedTags = [
  { label: "upbeat", confidence: "high" },
  { label: "R&B", confidence: "high" },
  { label: "15 min", confidence: "high" },
  { label: "vocal-forward", confidence: "uncertain" }
];

export const playlistTracks: Track[] = [
  {
    id: "track-1",
    title: "Warm Tiles",
    artist: "Mira Lane",
    album: "Steam Room Radio",
    duration: "3:12",
    coverClass: "from-rose-400 via-orange-300 to-amber-300"
  },
  {
    id: "track-2",
    title: "No Skip Morning",
    artist: "Aster V",
    album: "Little Rushes",
    duration: "3:45",
    coverClass: "from-teal-500 via-cyan-300 to-sky-300"
  },
  {
    id: "track-3",
    title: "Bright Water",
    artist: "June Alma",
    album: "Blue Tile",
    duration: "2:58",
    coverClass: "from-blue-500 via-indigo-300 to-emerald-300"
  },
  {
    id: "track-4",
    title: "Fifteen Minutes",
    artist: "Kairo North",
    album: "Quick Heat",
    duration: "3:26",
    coverClass: "from-zinc-700 via-slate-400 to-lime-300"
  },
  {
    id: "track-5",
    title: "Keep It Moving",
    artist: "Luma Field",
    album: "R&B Errands",
    duration: "4:01",
    coverClass: "from-amber-300 via-pink-300 to-red-400"
  }
];

export const historyItems: HistoryItem[] = [
  {
    id: "history-1",
    prompt: "15-min shower, R&B, upbeat",
    playlistName: "Upbeat R&B Shower",
    date: "Jul 2",
    trackCount: 15,
    duration: "52 min"
  },
  {
    id: "history-2",
    prompt: "Coffee shop study, instrumental jazz",
    playlistName: "Cafe Focus",
    date: "Jul 1",
    trackCount: 22,
    duration: "1 hr 18 min"
  },
  {
    id: "history-3",
    prompt: "Commute, high energy, strong beat",
    playlistName: "Fast Lane Library",
    date: "Jun 30",
    trackCount: 18,
    duration: "59 min"
  }
];
