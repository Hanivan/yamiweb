import Title from "@utils/Title";
import Head from "next/head";

export default function SkDetailAnime() {
  return (
    <>
      <Head>
        <title>Yami Web -</title>
      </Head>
      <div className="lg:mr-4 mb-5 animate-pulse">
        <div className="md:flex items-center justify-between">
          <div className="w-full">
            <div className="animation-none">
              <Title></Title>
            </div>
            <div className="text-sm h-5 w-56 bg-yami-600"></div>
          </div>
          <div className="w-full flex mt-3 md:mt-0 text-center gap-2 justify-center items-start lg:items-center xl:text-left xl:justify-evenly">
            <div>
              <div className="h-4 w-28 bg-yami-600"></div>
              <div className="h-4 w-28 mt-2 bg-yami-600"></div>
            </div>
            <div>
              <div className="h-4 w-28 bg-yami-600"></div>
              <div className="h-4 w-28 mt-2 bg-yami-600"></div>
            </div>
            <div>
              <div className="h-4 w-28 bg-yami-600"></div>
              <div className="h-4 w-28 mt-2 bg-yami-600"></div>
            </div>
          </div>
        </div>
        <div className="mt-5 md:flex">
          <div className="bg-yami-600 w-full md:w-48 w-full h-62 h-60 rounded mr-3"></div>
          <div className="w-full">
            <div className="border-b border-yami-600 pb-2 mb-2">
              <div className="w-full h-40 bg-yami-600 pb-2"></div>
            </div>
            <div className="w-4/6 h-5 bg-yami-600"></div>
            <div className="w-4/6 h-5 mt-2 bg-yami-600"></div>
            <div className="w-4/6 h-5 mt-2 bg-yami-600"></div>
            <div className="w-4/6 h-5 mt-2 bg-yami-600"></div>
            <div className="w-4/6 h-5 mt-2 bg-yami-600"></div>
          </div>
        </div>
        <div className="mt-32">
          <Title>Daftar Episode</Title>
          <div className="w-full md:w-4/6 h-44 bg-yami-600"></div>
          <div className="w-full md:w-4/6 h-8 mt-3 rounded bg-yami-600"></div>
        </div>
      </div>
    </>
  );
}
