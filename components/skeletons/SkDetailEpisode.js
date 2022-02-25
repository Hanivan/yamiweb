import Title from "@components/utils/Title";
import Head from "next/head";

export default function SkDetailEpisode() {
  return (
    <>
      <Head>
        <title>Yami Web -</title>
      </Head>
      <Title></Title>
      <div className="animate-pulse">
        <span className="text-sm flex items-center w-44 h-4 bg-yami-600"></span>
        <div className="mx-auto text-center md:w-9/12 lg:w-11/12 xl:w-4/6 flex gap-2 text-sm mt-2 mt-5 mb-2">
          <div className="w-full h-6 bg-yami-600 rounded-tl rounded-bl"></div>
          <div className="w-full h-6 bg-yami-600"></div>
          <div className="w-full h-6 bg-yami-600 rounded-tr rounded-br"></div>
        </div>
        <div className="w-full md:w-9/12 lg:w-11/12 xl:w-4/6 h-54 md:h-80 aspect-video bg-yami-600 mx-auto rounded"></div>
        <div className="mx-auto text-center md:w-9/12 lg:w-11/12 xl:w-4/6 flex gap-2 text-sm mt-2">
          <div className="w-full h-6 bg-yami-600 rounded-tl rounded-bl"></div>
          <div className="w-full h-6 bg-yami-600"></div>
          <div className="w-full h-6 bg-yami-600 rounded-tr rounded-br"></div>
        </div>
        <div className="my-10 mx-auto">
          <Title></Title>
          <div className="mt-3">
            <div className="flex my-2 items-center bg-yami-600 h-9 w-full md:w-10/12 rounded"></div>
            <div className="flex my-2 items-center bg-yami-600 h-9 w-full md:w-10/12 rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
}
