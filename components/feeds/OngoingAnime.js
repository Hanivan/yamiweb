import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Title from "@utils/Title";
import { useRouter } from "next/router";
import Head from "next/head";
import PostLandscape from "@cards/PostLandscape";
import SkPostLandscape from "@skeletons/SkPostLandscape";
import PrevLink from "@utils/PrevLink";
import InputPage from "@utils/InputPage";
import NextLink from "@utils/NextLink";

export default function OngoingAnime() {
  const [animeList, setAnimeList] = useState([]);
  const [page, setPage] = useState(1);
  const [debouncePage] = useDebounce(page, 600);
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [currentPage, setCurrentPage] = useState("");

  const dPageNum = parseInt(debouncePage);
  const router = useRouter();

  const getData = async () => {
    try {
      setAnimeList([]);
      await fetch(`
         https://samehadaku-api.herokuapp.com/api/ongoing/page/${debouncePage}
         `)
        .then((res) => res.json())
        .then((data) => {
          data.content_name == "Halaman tidak ditemukan" && router.push("/404");
          setAnimeList(data.anime_list);
          setCurrentPage(data.current_page);
          setPrevPage(data.prev_page);
          setNextPage(data.next_page);
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  const Dummy = () => {
    let items = [];
    for (let i = 0; i <= 9; i++) {
      items.push(<SkPostLandscape key={i} />);
    }
    return <>{items}</>;
  };

  useEffect(() => {
    getData();
  }, [debouncePage]);

  return (
    <>
      <Head>
        <title>Yami Web - Daftar Semua Anime</title>
      </Head>
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
      <div className="space-x-1 flex items-center float-right mt-2 xl:mr-5">
        <PrevLink page={prevPage} pageNum={dPageNum} setter={setPage} />
        <InputPage currentPage={currentPage} setter={setPage} />
        <NextLink page={nextPage} pageNum={dPageNum} setter={setPage} />
      </div>
    </>
  );
}
