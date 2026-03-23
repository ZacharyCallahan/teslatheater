function TheaterTopBar({ totalApps, loginRequiredCount }) {
  return (
    <header className="mb-6 rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">
            Tesla Theater
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">
            App Launcher
          </h1>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-right">
          <p className="text-xs uppercase tracking-[0.15em] text-zinc-300">
            Ready Apps
          </p>
          <p className="text-lg font-semibold text-white">{totalApps}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-zinc-300">
        Direct launch opens each service in the browser. Use each service&apos;s
        player controls for fullscreen playback.
      </p>
      <p className="mt-2 text-xs text-zinc-400">
        {loginRequiredCount} app{loginRequiredCount === 1 ? "" : "s"} require
        account sign-in.
      </p>
    </header>
  );
}

export default TheaterTopBar;
