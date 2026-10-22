import { Database, LogOut, RefreshCw, Shield, UserRound } from "lucide-react";
import { libraryStats } from "@/lib/mock-data";

export default function SettingsPage() {
  return (
    <section className="app-container py-8">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
          Settings
        </p>
        <h1 className="mt-2 text-3xl font-bold">Account and library</h1>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="surface-card p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-ink text-white">
              <UserRound size={21} aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-bold">Account</h2>
              <p className="text-sm text-ink/55">Connected as Raya</p>
            </div>
          </div>
          <button type="button" className="secondary-button w-full text-accent">
            <LogOut size={18} aria-hidden="true" />
            Disconnect Spotify
          </button>
        </section>

        <section className="surface-card p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-sea text-white">
              <Database size={21} aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-bold">Library</h2>
              <p className="text-sm text-ink/55">
                Last synced: {libraryStats.lastSynced} - {libraryStats.tracks} tracks
              </p>
            </div>
          </div>
          <button type="button" className="primary-button w-full">
            <RefreshCw size={18} aria-hidden="true" />
            Re-sync Library
          </button>
        </section>

        <section className="surface-card p-5 lg:col-span-2">
          <div className="flex items-start gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-sun text-ink">
              <Shield size={21} aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-bold">About</h2>
              <p className="mt-2 leading-7 text-ink/62">
                Playlist Copilot v1.0 static shell. Built with Next.js,
                TypeScript, TailwindCSS, mock data, and no real API secrets.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
