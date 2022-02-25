import { useRouter } from "next/router";
import DetailEpisode from "@feeds/DetailEpisode";
import DetailAnime from "@feeds/DetailAnime";
import OngoingList from "@sidebars/OngoingList";

export default function AnimeDEPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div className="container mt-5 flex flex-col lg:flex-row justify-between">
        <main className="lg:w-10/12 xl:w-9/12">
          {String(id).match("bd") || String(id).match("episode") ? (
            <DetailEpisode />
          ) : (
            <DetailAnime />
          )}
        </main>
        <aside className="lg:w-4/12 xl:w-3/12">
          <OngoingList />
        </aside>
      </div>
    </>
  );
}
