import { validateTheaterAppCatalog } from "../dtos/TheaterAppCatalogDto";
import { TheaterApp } from "../entities/TheaterApp";
import { getTheaterAppCatalog } from "../repositories/TheaterAppRepository";
import {
  resolveCompatibilityNote,
  resolveLaunchUrl,
} from "../services/TheaterLaunchUrlService";

async function execute() {
  try {
    const rawTheaterAppCatalog = await getTheaterAppCatalog();
    const validatedTheaterAppCatalog = validateTheaterAppCatalog(
      rawTheaterAppCatalog
    );

    const theaterApps = validatedTheaterAppCatalog.map((theaterAppData) => {
      const theaterApp = new TheaterApp(theaterAppData);

      return theaterApp.toLauncherCard({
        launchUrl: resolveLaunchUrl(theaterApp),
        compatibilityNote: resolveCompatibilityNote(theaterApp),
      });
    });

    return { success: true, data: theaterApps };
  } catch (error) {
    console.error("Failed to build theater app catalog.", error);
    return { success: false, data: [] };
  }
}

export { execute };
