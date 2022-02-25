export default function SkPostLandscape() {
  return (
    <article className="md:w-6/12 mb-3 mx-auto md:mx-0 animate-pulse">
      <div className="flex flex-col md:flex-row items-start">
        <div className="rounded w-40 md:w-56 bg-yami-600 mb-2 md:mb-0 aspect-video"></div>
        <div className="md:ml-3  w-40 md:w-full md:mr-3">
          <div className="w-11/12 h-4 bg-yami-600"></div>
          <div className="w-6/12 h-4 mt-2 bg-yami-600"></div>
          <div className="w-4/12 h-4 mt-2 bg-yami-600"></div>
          <div className="w-8/12 h-4 mt-2 bg-yami-600"></div>
        </div>
      </div>
    </article>
  );
}
