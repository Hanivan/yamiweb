import PaginationEps from "@components/utils/PaginationEps";
import DownloadList from "@utils/DownloadList";
import Title from "@utils/Title";
import Head from "next/head";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function Episode({
  title,
  episode,
  release,
  prevEps,
  animeDetail,
  nextEps,
  downloadList,
  streamList,
}) {
  let { low, med, high } = "";
  const [url, setUrl] = useState("");

  streamList.map(({ low_quality, medium_quality, high_quality }) => {
    low = low_quality;
    med = medium_quality;
    high = high_quality;
  });

  const RenderStream = ({ children, quality }) => {
    return (
      <button
        className="w-full rounded border hover:bg-yami-600 transition"
        onClick={() => setUrl(quality)}
      >
        {children}
      </button>
    );
  };

  return (
    <>
      <Head>
        <title>Yami Web - {title}</title>
      </Head>
      <Title>{title}</Title>
      <span className="text-sm flex items-center">
        Episode {episode} • {release}
      </span>
      <div className="mx-auto text-center md:w-9/12 lg:w-11/12 xl:w-4/6 flex text-sm mt-5 mb-2 gap-2">
        <RenderStream quality={low}>Low</RenderStream>
        <RenderStream quality={med}>Med</RenderStream>
        <RenderStream quality={high}>High</RenderStream>
      </div>
      <div className="w-full md:w-9/12 lg:w-11/12 xl:w-4/6 h-54 md:h-80 aspect-video bg-yami-600 mx-auto rounded">
        <ReactPlayer
          url={`/sorry.mp4`}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
      <PaginationEps prev={prevEps} detail={animeDetail} next={nextEps} />
      <DownloadList downloadList={downloadList} />
    </>
  );
}
