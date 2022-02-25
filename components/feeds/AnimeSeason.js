import { useEffect, useState } from "react";
import Title from "@utils/Title";
import PostPotrait from "@cards/PostPotrait";
import SkPostPotrait from "@skeletons/SkPostPotrait";
import Button from "@utils/Button";
import Head from "next/head";

export default function AnimeSeason() {
  const [animeList, setAnimeList] = useState([]);
  const [pageTitle, setPageTitle] = useState("");

  const getData = async () => {
    try {
      await fetch(`https://samehadaku-api.herokuapp.com/api/home`)
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
    for (let i = 0; i <= 11; i++) {
      items.push(<SkPostPotrait key={i} />);
    }
    return <>{items}</>;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>Yami Web - Streaming, Nonton, Download Anime Sub Indo</title>
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
      <Button href="/anime" text="Lihat Daftar Anime" />
    </>
  );
}
