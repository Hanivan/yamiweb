import PostGenre from "@cards/PostGenre";
import SkPostGenre from "@skeletons/SkPostGenre";
import Title from "@utils/Title";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function AllGenre() {
  const [genreList, setGenreList] = useState([]);

  const getData = async () => {
    try {
      await fetch(`https://samehadaku-api.herokuapp.com/api/genres`)
        .then((res) => res.json())
        .then((data) => {
          setGenreList(data.genre_list);
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const Dummy = () => {
    let items = [];
    for (let i = 0; i <= 40; i++) {
      items.push(<SkPostGenre key={i} />);
    }
    return <>{items}</>;
  };

  return (
    <>
      <Head>
        <title>Yami Web - Daftar Semua Genre</title>
      </Head>
      <Title>Daftar Genre</Title>
      <div className="mt-5 mb-6 flex gap-2 items-center justify-center lg:justify-start flex-wrap">
        {genreList.length ? (
          genreList.map(({ name, title, id, total }) => (
            <PostGenre
              key={id}
              name={name}
              title={title}
              id={id}
              total={total}
            />
          ))
        ) : (
          <Dummy />
        )}
      </div>
    </>
  );
}
