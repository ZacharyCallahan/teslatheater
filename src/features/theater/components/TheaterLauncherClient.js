"use client";

import TheaterAppGrid from "./TheaterAppGrid";
import TheaterTopBar from "./TheaterTopBar";

function TheaterLauncherClient({ apps, catalogReady }) {
  if (!catalogReady) {
    return (
      <section className="rounded-2xl border border-rose-300/30 bg-rose-900/20 p-6 text-rose-100">
        <h1 className="text-xl font-semibold">Launcher unavailable</h1>
        <p className="mt-2 text-sm text-rose-100/90">
          The app catalog could not be loaded. Please refresh the page.
        </p>
      </section>
    );
  }

  const loginRequiredCount = apps.filter((app) => app.requiresLogin).length;

  return (
    <section className="w-full">
      <TheaterTopBar
        totalApps={apps.length}
        loginRequiredCount={loginRequiredCount}
      />
      <TheaterAppGrid apps={apps} />
    </section>
  );
}

export default TheaterLauncherClient;
