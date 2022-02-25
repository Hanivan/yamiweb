import Title from "@utils/Title";
import TitleH3 from "@utils/TitleH3";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    //
  }, [url]);

  const RenderStream = ({ children, quality }) => {
    return (
      <button
        className="w-full rounded-tl rounded-bl border hover:bg-yami-600 transition"
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
        <ReactPlayer url={url} width="100%" height="100%" controls={true} />
      </div>
      <div className="mx-auto text-center md:w-9/12 lg:w-11/12 xl:w-4/6 flex text-sm mt-2">
        <Link href={prevEps != "#" ? `/${prevEps}` : "#"}>
          <a className="border border-murasakino inline-block w-full rounded-tl rounded-bl hover:bg-yami-600 transition">
            <svg
              className="inline-block css-i6dzq1"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="#A093C7"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </a>
        </Link>
        <Link href={animeDetail ? `/${animeDetail}` : "#"}>
          <a className="border border-murasakino text-murasakino inline-block w-full mx-2 hover:bg-yami-600 transition">
            Semua Episode
          </a>
        </Link>
        <Link href={`/${nextEps}`}>
          <a className="border border-murasakino inline-block w-full rounded-tr rounded-br hover:bg-yami-600 transition">
            <svg
              className="inline-block css-i6dzq1"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="#A093C7"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </Link>
      </div>
      <div className="my-10 mx-auto">
        {downloadList.map(({ title, content }) => (
          <div key={title}>
            <TitleH3>{title}</TitleH3>
            <div className="mt-3">
              {content.map(({ quality, vendor }) => (
                <div
                  key={quality}
                  className="flex my-2 items-center bg-yami-600 w-full md:w-10/12 rounded-tr rounded-br"
                >
                  <span className="text-sm text-yami-900 font-semibold p-2 bg-murasakino rounded-tl rounded-bl">
                    {quality}
                  </span>
                  <ul className="flex mx-auto w-full items-center mx-3 md:ml-0 md:justify-center overflow-x-auto text-sm md:text-base gap-3">
                    {vendor.map(({ name, link }) => (
                      <li key={link}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-murasakino transition"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
