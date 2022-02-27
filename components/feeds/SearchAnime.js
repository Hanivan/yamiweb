import { useEffect, useState } from "react";
import Title from "@utils/Title";
import PostPotrait from "@cards/PostPotrait";
import SkPostPotrait from "@skeletons/SkPostPotrait";
import Head from "next/head";
import { useRouter } from "next/router";
import { NotFound } from "@sections/NotFound";

export default function SearchAnime() {
  const [animeList, setAnimeList] = useState([]);
  const [pageTitle, setPageTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const abortCtrl = new AbortController();
  const signal = abortCtrl.signal;
  const router = useRouter();
  const { q } = router.query;

  const getData = async () => {
    setLoading(true);
    try {
      await fetch(`https://samehadaku-api.herokuapp.com/api/search/${q}`, {
        signal,
      })
        .then((res) => res.json())
        .then((data) => {
          setAnimeList(data.anime_list);
          setPageTitle(data.content_name);
        });
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
    return function cleanup() {
      abortCtrl.abort();
    };
  }, [q]);

  const Dummy = () => {
    let items = [];
    for (let i = 0; i <= 9; i++) {
      items.push(<SkPostPotrait key={i} />);
    }
    return (
      <>
        <Title>{pageTitle}</Title>
        <div className="mt-5 flex flex-wrap gap-3">{items}</div>
      </>
    );
  };

  return (
    <>
      <Head>
        <title>Yami Web - {pageTitle}</title>
      </Head>
      {loading ? (
        <Dummy />
      ) : (
        <>
          {animeList.length < 1 ? (
            <>
              <Title>{pageTitle}</Title>
              <NotFound />
            </>
          ) : (
            <>
              <Title>{pageTitle}</Title>
              <div className="mt-5 flex flex-wrap gap-3">
                {animeList.map(({ id, title, thumb, status, type, score }) => (
                  <PostPotrait
                    key={id}
                    title={title}
                    id={id}
                    thumb={thumb}
                    status={status}
                    type={type}
                    score={score}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
