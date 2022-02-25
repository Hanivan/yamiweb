import GenreList from "@sidebars/GenreList";
import AnimeSeason from "@feeds/AnimeSeason";
import AnimeOngoing from "@feeds/AnimeOngoing";
import AnimeMovie from "@feeds/AnimeMovie";

export default function HomePage() {
  return (
    <>
      <div className="container mt-5 flex flex-col lg:flex-row justify-between">
        <main className="lg:w-10/12 xl:w-9/12">
          <AnimeSeason />
          <AnimeOngoing />
          <AnimeMovie />
        </main>
        <aside className="lg:w-4/12 xl:w-3/12">
          <GenreList />
        </aside>
      </div>
    </>
  );
}
