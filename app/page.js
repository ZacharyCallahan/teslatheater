import { execute as getTheaterApps } from "@/src/domains/theater/use-cases/getTheaterAppsUseCase";
import TheaterLauncherClient from "@/src/features/theater/components/TheaterLauncherClient";

export default async function Home() {
  const { success, data } = await getTheaterApps();

  return (
    <div className="flex flex-1 items-start justify-center px-4 py-6 sm:px-6 sm:py-8">
      <main className="w-full max-w-7xl">
        <TheaterLauncherClient apps={data} catalogReady={success} />
      </main>
    </div>
  );
}
