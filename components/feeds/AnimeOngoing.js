import { useEffect, useState } from "react";
import PostLandscape from "@cards/PostLandscape";
import SkPostLandscape from "@skeletons/SkPostLandscape";
import Title from "@utils/Title";
import Button from "@utils/Button";

export default function AnimeOngoing() {
  const [animeList, setAnimeList] = useState([]);

  const getData = async () => {
    try {
      await fetch(`https://samehadaku-api.herokuapp.com/api/ongoing`)
        .then((res) => res.json())
        .then((data) => {
          setAnimeList(data.anime_list);
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  const Dummy = () => {
    let items = [];
    for (let i = 0; i <= 11; i++) {
      items.push(<SkPostLandscape key={i} />);
    }
    return <>{items}</>;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="my-10">
        <Title>Baru Rilis</Title>
        <div className="mt-5 flex flex-wrap">
          {animeList.length ? (
            animeList.map(({ title, eps, id, thumb, release_on }) => (
              <PostLandscape
                key={id}
                title={title}
                eps={eps}
                id={id}
                thumb={thumb}
                release_on={release_on}
              />
            ))
          ) : (
            <Dummy />
          )}
        </div>
        <Button href="/ongoing" text="Lihat Semua" />
      </div>
    </>
  );
}
