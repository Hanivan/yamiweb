import { useEffect, useState } from "react";
import Title from "@utils/Title";
import PostPotrait from "@cards/PostPotrait";
import SkPostPotrait from "@skeletons/SkPostPotrait";
import Head from "next/head";
import { useRouter } from "next/router";

export default function AnimeSeason() {
  const [animeList, setAnimeList] = useState([]);
  const [pageTitle, setPageTitle] = useState("");
  const abortCtrl = new AbortController();
  const signal = abortCtrl.signal;
  const router = useRouter();
  const { id } = router.query;

  const getData = async () => {
    try {
      await fetch(`https://samehadaku-api.herokuapp.com/api/season/${id}`, {
        signal,
      })
        .then((res) => res.json())
        .then((data) => {
          setAnimeList(data.anime_list);
          setPageTitle(data.content_name);
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  const Dummy = () => {
    let items = [];
    for (let i = 0; i <= 9; i++) {
      items.push(<SkPostPotrait key={i} />);
    }
    return <>{items}</>;
  };

  useEffect(() => {
    getData();
    return function cleanup() {
      abortCtrl.abort();
    };
  }, [id]);

  return (
    <>
      <Head>
        <title>Yami Web - {pageTitle}</title>
      </Head>
      <Title>{pageTitle}</Title>
      <div className="mt-5 flex flex-wrap gap-3">
        {animeList.length ? (
          animeList.map(({ id, title, thumb, status, type, score }) => (
            <PostPotrait
              key={id}
              title={title}
              id={id}
              thumb={thumb}
              status={status}
              type={type}
              score={score}
            />
          ))
        ) : (
          <Dummy />
        )}
      </div>
    </>
  );
}
