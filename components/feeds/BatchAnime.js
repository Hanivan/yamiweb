import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Title from "@utils/Title";
import SkPostPotrait from "@skeletons/SkPostPotrait";
import PostPotrait from "@cards/PostPotrait";
import { useRouter } from "next/router";
import Head from "next/head";
import InputPage from "@utils/InputPage";
import PrevLink from "@utils/PrevLink";
import NextLink from "@utils/NextLink";

export default function BatchAnime() {
  const [animeList, setAnimeList] = useState([]);
  const [pageTitle, setPageTitle] = useState("");
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
         https://samehadaku-api.herokuapp.com/api/batch/page/${debouncePage}
         `)
        .then((res) => res.json())
        .then((data) => {
          Array(data.anime_list)[0].length < 1 && router.push("/404");
          setAnimeList(data.anime_list);
          setPageTitle(data.content_name);
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
    for (let i = 0; i <= 22; i++) {
      items.push(<SkPostPotrait key={i} />);
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
      <Title>{pageTitle}</Title>
      <div className="mt-5 flex flex-wrap gap-3">
        {animeList.length ? (
          animeList.map(({ id, title, thumb, status, type, score }) => (
            <PostPotrait
              href="/batch"
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
      <div className="space-x-1 flex items-center float-right mt-2 xl:mr-3">
        <PrevLink page={prevPage} pageNum={dPageNum} setter={setPage} />
        <InputPage currentPage={currentPage} setter={setPage} />
        <NextLink page={nextPage} pageNum={dPageNum} setter={setPage} />
      </div>
    </>
  );
}
