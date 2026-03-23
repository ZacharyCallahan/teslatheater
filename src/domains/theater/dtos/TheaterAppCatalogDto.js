import { z } from "zod";

const theaterAppSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  baseUrl: z.string().url(),
  description: z.string().min(1),
  iconText: z.string().min(1).max(3),
  accentColor: z.string().regex(/^#([0-9a-fA-F]{6})$/),
  requiresLogin: z.boolean(),
});

const theaterAppCatalogSchema = z.array(theaterAppSchema).min(1);

function validateTheaterAppCatalog(theaterAppCatalog) {
  return theaterAppCatalogSchema.parse(theaterAppCatalog);
}

export { validateTheaterAppCatalog };
