import Title from "@utils/Title";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GenreList() {
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

  const Dummy = () => {
    let items = [];
    for (let i = 0; i <= 11; i++) {
      items.push(
        <li key={i}>
          <div className="w-[115px] h-4 bg-yami-600"></div>
        </li>
      );
    }
    return <ul className="space-y-1 animate-pulse">{items}</ul>;
  };

  const ShowData = () => {
    let items = [];
    genreList.map(({ name, id, total }) => {
      items.push(
        <li key={id}>
          <Link href={`/anime/genre/${id}`}>
            <a className="hover:text-murasakino transition">
              {name} <span className="text-xs">({total})</span>
            </a>
          </Link>
        </li>
      );
    });
    return <ul>{items}</ul>;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Title>Daftar Genre</Title>
      <div className="mt-3 scrollbar-thin scrollbar-thumb-murasakino scrollbar-track-yami-600 h-60 overflow-hidden hover:overflow-y-auto">
        {genreList.length ? <ShowData /> : <Dummy />}
      </div>
    </>
  );
}
