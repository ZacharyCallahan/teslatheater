function getCardStyle(accentColor) {
  return {
    background: `linear-gradient(140deg, ${accentColor}2e 0%, rgba(8, 10, 14, 0.92) 52%, rgba(5, 7, 12, 0.96) 100%)`,
    boxShadow: `inset 0 0 0 1px ${accentColor}55`,
  };
}

function getOpenButtonStyle(accentColor) {
  return {
    background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}cc 100%)`,
    boxShadow: `0 8px 18px ${accentColor}4d`,
  };
}

function TheaterAppCard({ app }) {
  return (
    <article
      className="flex h-full flex-col rounded-2xl border border-white/10 p-4 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/5"
      style={getCardStyle(app.accentColor)}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-lg font-semibold text-white">{app.name}</p>
          <p className="mt-1 text-sm text-zinc-300">{app.description}</p>
        </div>
        <div
          className="rounded-md border border-white/10 bg-black/30 px-2 py-1 text-xs font-semibold"
          style={{ color: app.accentColor }}
        >
          {app.iconText}
        </div>
      </div>

      <p className="mb-4 text-xs leading-5 text-zinc-400">{app.compatibilityNote}</p>

      <div className="mt-auto flex flex-wrap items-center gap-2">
        <a
          href={app.launchUrl}
          className="inline-flex min-h-10 flex-1 items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold text-white transition hover:brightness-110 active:scale-[0.99]"
          style={getOpenButtonStyle(app.accentColor)}
        >
          Open App
        </a>
        <a
          href={app.launchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-100 transition hover:bg-white/10"
        >
          New Tab
        </a>
      </div>

      {app.requiresLogin ? (
        <p className="mt-3 text-xs text-amber-200/90">Login required</p>
      ) : (
        <p className="mt-3 text-xs text-emerald-200/90">No login required</p>
      )}
    </article>
  );
}

export default TheaterAppCard;
