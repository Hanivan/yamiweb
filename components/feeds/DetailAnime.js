import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import SkDetailAnime from "@skeletons/SkDetailAnime";
import EpisodeList from "@utils/EpisodeList";
import TitleDetail from "@utils/TitleDetail";
import MetaTitleDetail from "@utils/MetaTitleDetail";
import DetailGenre from "@utils/DetailGenre";
import MetaInfoDetail from "@utils/MetaInfoDetail";

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
  const [animeRate, setAnimeRate] = useState("");
  const [animeStatus, setAnimeStatus] = useState("");
  const [animeTotalEps, setAnimeTotalEps] = useState("");
  const [animeRelease, setAnimeRelease] = useState("");
  const [animeProducer, setAnimeProducer] = useState([]);
  const [animeStudio, setAnimeStudio] = useState([]);
  const [animeSynonim, setAnimeSynonim] = useState("");
  const [animeEps, setAnimeEps] = useState([]);
  const [animeBatch, setAnimeBatch] = useState({});
  const [animeEnglish, setAnimeEnglish] = useState("");
  const abortCtrl = new AbortController();
  const signal = abortCtrl.signal;
  const router = useRouter();
  const { id } = router.query;

  const getData = async () => {
    try {
      await fetch(`https://samehadaku-api.herokuapp.com/api/anime/${id}`, {
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
          setAnimeRate(new Intl.NumberFormat().format(data.rate));
          setAnimeStatus(data.status);
          setAnimeTotalEps(data.total_episode);
          setAnimeRelease(data.release_date);
          setAnimeProducer(data.producer_list);
          setAnimeStudio(data.studio_list);
          setAnimeSynonim(data.synonym);
          setAnimeEps(data.episode_list);
          setAnimeBatch(data.batch_link);
          setAnimeEnglish(data.english);
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
    { title: "Rating", content: `${animeScore} / ${animeRate} User` },
    { title: "Status", content: `${animeStatus}` },
    { title: "Total Episode", content: `${animeTotalEps}` },
  ];

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
              <TitleDetail
                title={animeTitle}
                japanese={animeJapanese}
                type={animeType}
                seasons={animeSeason}
                duration={animeDuration}
              />
              <MetaTitleDetail details={infoAnime} />
            </div>
            <div className="mt-5 flex flex-col md:flex-row items-center md:items-start">
              <div className="mr-3 md:float-left w-40">
                <img
                  src={animeThumb}
                  alt={animeTitle}
                  className="w-40 h-62 lg:h-60 rounded mb-2 shadow"
                />
                <DetailGenre genres={animeGenre} />
              </div>
              <div>
                <p className="border-b w-full border-yami-600 pb-2 mb-2">
                  {animeSynopsis}
                </p>
                <MetaInfoDetail
                  english={animeEnglish}
                  release={animeRelease}
                  synonim={animeSynonim}
                  producers={animeProducer}
                  studios={animeStudio}
                />
              </div>
            </div>
            <DetailGenre mobile genres={animeGenre} />
            <EpisodeList episodes={animeEps} batch={animeBatch} />
          </div>
        </>
      )}
    </>
  );
}
