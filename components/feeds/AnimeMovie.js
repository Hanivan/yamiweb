import { useEffect, useState } from "react";
import PostPotrait from "@cards/PostPotrait";
import Title from "@utils/Title";
import SkPostPotrait from "@skeletons/SkPostPotrait";
import Button from "@utils/Button";

export default function AnimeMovie() {
  const [animeList, setAnimeList] = useState([]);
  const [pageTitle, setPageTitle] = useState("");

  const getData = async () => {
    try {
      await fetch(`https://samehadaku-api.herokuapp.com/api/movie`)
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
  }, []);

  return (
    <div className="my-16">
      <Title>{pageTitle}</Title>
      <div className="my-5 flex flex-wrap gap-3">
        {animeList.length ? (
          animeList.map(({ id, title, thumb, status, type, score }) => (
            <PostPotrait
              key={id}
              title={title}
              id={id}
              thumb={thumb || "/takagi.jpg"}
              status={status}
              type={type}
              score={score}
            />
          ))
        ) : (
          <Dummy />
        )}
      </div>
      <Button href="/movie" text="Lihat Semua" />
    </div>
  );
}
