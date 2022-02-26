import GenreList from "@sidebars/GenreList";
import ProducerAnime from "@feeds/ProducerAnime";

export default function ProducerPage() {
  return (
    <>
      <div className="container mt-5 flex flex-col lg:flex-row justify-between overflow-x-hidden">
        <main className="lg:w-10/12 xl:w-9/12">
          <ProducerAnime />
        </main>
        <aside className="lg:w-4/12 xl:w-3/12">
          <GenreList />
        </aside>
      </div>
    </>
  );
}
