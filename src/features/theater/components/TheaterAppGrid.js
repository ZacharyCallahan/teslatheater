import TheaterAppCard from "./TheaterAppCard";

function TheaterAppGrid({ apps }) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {apps.map((app) => (
        <TheaterAppCard key={app.slug} app={app} />
      ))}
    </section>
  );
}

export default TheaterAppGrid;
