import DetailEpisode from "@feeds/DetailEpisode";
import OngoingList from "@sidebars/OngoingList";

export default function AnimeEpisodePage() {
  return (
    <>
      <div className="container mt-5 flex flex-col lg:flex-row justify-between overflow-x-hidden">
        <main className="lg:w-10/12 xl:w-9/12">
          <DetailEpisode />
        </main>
        <aside className="lg:w-4/12 xl:w-3/12">
          <OngoingList />
        </aside>
      </div>
    </>
  );
}
