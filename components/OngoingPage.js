import GenreList from "@sidebars/GenreList";
import OngoingAnime from "@feeds/OngoingAnime";

export default function AnimePage() {
  return (
    <>
      <div className="container mt-5 flex flex-col lg:flex-row justify-between">
        <main className="lg:w-10/12 xl:w-9/12">
          <OngoingAnime />
        </main>
        <aside className="lg:w-4/12 xl:w-3/12">
          <GenreList />
        </aside>
      </div>
    </>
  );
}
