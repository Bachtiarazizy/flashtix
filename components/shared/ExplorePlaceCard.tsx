import CardImage from "./CardImage";

export default function ExplorePlaceCard() {
  return (
    <section id="trendingplace" className="mx-16 mt-16">
      <div>
        <h2 className="text-2xl font-semibold mt-16">Explore Beautifull Place In</h2>
      </div>
      <div className="flex flex-row mt-16 justify-around">
        <CardImage />
        <CardImage />
        <CardImage />
      </div>
    </section>
  );
}
