import { useEffect, useState } from "react";
import PostSidebar from "@cards/PostSidebar";
import Title from "@utils/Title";
import SkPostSidebar from "@skeletons/SkPostSidebar";

export default function OngoingList() {
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
      items.push(<SkPostSidebar key={i} />);
    }
    return <>{items}</>;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Title>Episode Terbaru</Title>
      <div className="mt-5">
        {animeList.length ? (
          animeList.map(({ title, eps, id, thumb, release_on }) => (
            <PostSidebar
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
    </>
  );
}
