import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Title from "@utils/Title";
import Head from "next/head";
import Link from "next/link";
import SkDetailAnime from "@skeletons/SkDetailAnime";
import DownloadList from "@utils/DownloadList";

export default function DetailAnime() {
  const [animeSeason, setAnimeSeason] = useState([]);
  const [animeTitle, setAnimeTitle] = useState("");
  const [animeThumb, setAnimeThumb] = useState("");
  const [animeSynopsis, setAnimeSynopsis] = useState("");
  const [animeJapanese, setAnimeJapanese] = useState("");
  const [animeType, setAnimeType] = useState("");
  const [animeGenre, setAnimeGenre] = useState([]);
  const [animeDuration, setAnimeDuration] = useState("");
  const [animeScore, setAnimeScore] = useState("");
  const [animeStatus, setAnimeStatus] = useState("");
  const [animeTotalEps, setAnimeTotalEps] = useState("");
  const [animeRelease, setAnimeRelease] = useState("");
  const [animeProducer, setAnimeProducer] = useState([]);
  const [animeStudio, setAnimeStudio] = useState([]);
  const [animeSynonim, setAnimeSynonim] = useState("");
  const [animeEnglish, setAnimeEnglish] = useState("");
  const [downloadList, setDownloadList] = useState([]);
  const abortCtrl = new AbortController();
  const signal = abortCtrl.signal;
  const router = useRouter();
  const { id } = router.query;

  const getData = async () => {
    try {
      await fetch(`https://samehadaku-api.herokuapp.com/api/batch/${id}`, {
        signal,
      })
        .then((res) => res.json())
        .then((data) => {
          data.title == "" && router.push("/404");
          setAnimeSeason(data.season_list);
          setAnimeTitle(data.title);
          setAnimeThumb(data.thumb);
          setAnimeSynopsis(data.synopsis);
          setAnimeJapanese(data.japanese);
          setAnimeType(data.type);
          setAnimeGenre(data.genre_list);
          setAnimeDuration(data.duration);
          setAnimeScore(data.score);
          setAnimeStatus(data.status);
          setAnimeTotalEps(data.total_episode);
          setAnimeRelease(data.release_date);
          setAnimeProducer(data.producer_list);
          setAnimeStudio(data.studio_list);
          setAnimeSynonim(data.synonym);
          setAnimeEnglish(data.english);
          setDownloadList(data.download_list);
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
    return function cleanup() {
      abortCtrl.abort();
    };
  }, [id]);

  const infoAnime = [
    {
      title: "Rating",
      content: `${animeScore}`,
    },
    { title: "Status", content: `${animeStatus}` },
    { title: "Total Episode", content: `${animeTotalEps}` },
  ];

  const Genre = ({ hidden }) => (
    <div
      className={`${
        hidden ? "flex md:hidden" : "hidden md:flex"
      } flex-row flex-wrap mt-2 gap-1.5 lg:-mt-2 xl:mt-2 text-left md:w-40`}
    >
      {animeGenre.map(({ genre_name, genre_id }) => (
        <Link key={genre_id} href={`/anime/genre/${genre_id}`}>
          <a className="border border-yami-300 text-sm text-yami-300 p-1 rounded hover:bg-yami-300 transition hover:text-yami-200">
            {genre_name}
          </a>
        </Link>
      ))}
    </div>
  );

  const DetailTitle = () => (
    <span className="text-sm">
      {animeJapanese} • {animeType} •{" "}
      {animeSeason.length ? (
        <Link href={`/anime/season/${animeSeason[0].season_id}`}>
          <a className="hover:text-murasakino active:text-murasakino transition">
            {animeSeason[0].season_name}
          </a>
        </Link>
      ) : (
        "-"
      )}{" "}
      • {animeDuration}
    </span>
  );

  const Detail = () => (
    <ul>
      <li>
        <p className="text-murasakino">
          <span className="font-semibold text-yami-200">English</span>{" "}
          {animeEnglish}
        </p>
      </li>
      <li>
        <p className="text-murasakino">
          <span className="font-semibold text-yami-200">Release Date</span>{" "}
          {animeRelease}
        </p>
      </li>
      <li>
        <p className="text-murasakino">
          <span className="font-semibold text-yami-200">Synonim</span>{" "}
          {animeSynonim}
        </p>
      </li>
      {animeProducer != undefined && (
        <li>
          <p className="text-murasakino">
            <span className="font-semibold text-yami-200">Producer</span>{" "}
            {animeProducer.map(({ producer_name, producer_id }) => (
              <Link key={producer_id} href={`/anime/producer/${producer_id}`}>
                <a>
                  {producer_name}
                  {", "}
                </a>
              </Link>
            ))}
          </p>
        </li>
      )}
      {animeStudio != undefined && (
        <li>
          <p className="text-murasakino">
            <span className="font-semibold text-yami-200">Studio</span>{" "}
            {animeStudio.map(({ studio_name, studio_id }) => (
              <Link key={studio_id} href={`/anime/studio/${studio_id}`}>
                <a>
                  {studio_name}
                  {", "}
                </a>
              </Link>
            ))}
          </p>
        </li>
      )}
    </ul>
  );

  // const Episodes = () => (
  //   <>
  //     {animeEps.length ? (
  //       <ul className="w-full md:w-4/6 h-44 scrollbar-thin scrollbar-thumb-murasakino scrollbar-track-yami-600 overflow-y-auto">
  //         {animeEps.map(({ title, id, uploaded_on }) => (
  //           <li
  //             key={id}
  //             className="hover:bg-yami-600 hover:cursor-pointer transition text-murasakino rounded py-2 px-1 border-b border-yami-600"
  //           >
  //             <Link href={`/${id}`}>
  //               <a className="inline-block xl:inline text-yami-200 hover:text-murasakino transition w-48 md:w-72 lg:w-64 xl:w-full">
  //                 {title}
  //               </a>
  //             </Link>
  //             <span className="float-right">{uploaded_on}</span>
  //           </li>
  //         ))}
  //       </ul>
  //     ) : (
  //       <p>Kosong</p>
  //     )}
  //   </>
  // );

  return (
    <>
      {!animeTitle ? (
        <SkDetailAnime />
      ) : (
        <>
          <Head>
            <title>Yami Web - {animeTitle}</title>
          </Head>
          <div className="lg:mr-4 mb-5">
            <div className="md:flex items-center justify-between">
              <div className="w-full">
                <Title>{animeTitle}</Title>
                <DetailTitle />
              </div>
              <div className="w-full flex mt-3 md:mt-0 text-center gap-2 justify-center items-start lg:items-center xl:text-left xl:justify-evenly">
                {infoAnime.map(({ title, content }) => (
                  <div key={title}>
                    <h4 className="font-semibold text-lg">{title}</h4>
                    <p className="text-murasakino md:w-24 xl:w-full">
                      {content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 flex flex-col md:flex-row items-center md:items-start">
              <div className="mr-3 md:float-left w-40">
                <img
                  src={animeThumb}
                  alt={animeTitle}
                  className="w-40 h-62 lg:h-60 rounded mb-2 shadow"
                />
                <Genre />
              </div>
              <div>
                <p className="border-b w-full border-yami-600 pb-2 mb-2">
                  {animeSynopsis}
                </p>
                <Detail />
              </div>
            </div>
            <Genre hidden />
            <DownloadList downloadList={downloadList} />
          </div>
        </>
      )}
    </>
  );
}
