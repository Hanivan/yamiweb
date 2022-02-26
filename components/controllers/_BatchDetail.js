import OngoingList from "@sidebars/OngoingList";
import DetailBatch from "@feeds/DetailBatch";

export default function _BatchDetail() {
  return (
    <>
      <div className="container mt-5 flex flex-col lg:flex-row justify-between overflow-x-hidden">
        <main className="lg:w-10/12 xl:w-9/12">
          <DetailBatch />
        </main>
        <aside className="lg:w-4/12 xl:w-3/12">
          <OngoingList />
        </aside>
      </div>
    </>
  );
}
