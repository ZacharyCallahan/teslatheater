const launchUrlBySlug = {
  youtube: "https://www.youtube.com",
  netflix: "https://www.netflix.com/browse",
  hulu: "https://www.hulu.com",
  "disney-plus": "https://www.disneyplus.com/home",
  twitch: "https://www.twitch.tv/directory",
  plex: "https://app.plex.tv/desktop",
  crunchyroll: "https://www.crunchyroll.com",
  max: "https://play.max.com",
  kick: "https://kick.com/categories",
  x: "https://x.com/explore",
};

const compatibilityNoteBySlug = {
  youtube: "Fullscreen is controlled by YouTube's player controls.",
  netflix: "Netflix sign-in is required before playback and fullscreen.",
  hulu: "Hulu sign-in is required for most playback experiences.",
  "disney-plus": "Disney+ may require account verification before playback.",
  twitch: "Live streams depend on Twitch playback and regional availability.",
  plex: "Plex login and server availability determine playback access.",
  crunchyroll: "Some titles require a premium plan for full playback.",
  max: "Max requires an active subscription and account login.",
  kick: "Stream playback quality depends on creator stream settings.",
  x: "Video fullscreen depends on X media player availability.",
};

function resolveLaunchUrl(theaterApp) {
  return launchUrlBySlug[theaterApp.slug] ?? theaterApp.baseUrl;
}

function resolveCompatibilityNote(theaterApp) {
  return (
    compatibilityNoteBySlug[theaterApp.slug] ??
    "Fullscreen behavior is managed by the destination service."
  );
}

export { resolveLaunchUrl, resolveCompatibilityNote };
