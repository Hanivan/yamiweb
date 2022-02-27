import { useEffect, useState } from "react";
import Title from "@utils/Title";
import PostPotrait from "@cards/PostPotrait";
import SkPostPotrait from "@skeletons/SkPostPotrait";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDebounce } from "use-debounce";
import PrevLink from "@utils/PrevLink";
import InputPage from "@utils/InputPage";
import NextLink from "@utils/NextLink";

export default function GenreAnime() {
  const [animeList, setAnimeList] = useState([]);
  const [pageTitle, setPageTitle] = useState("");
  const [page, setPage] = useState(1);
  const [debouncePage] = useDebounce(page, 600);
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const dPageNum = parseInt(debouncePage);
  const abortCtrl = new AbortController();
  const signal = abortCtrl.signal;
  const router = useRouter();
  const { id } = router.query;

  const getData = async () => {
    try {
      setAnimeList([]);
      await fetch(
        `https://samehadaku-api.herokuapp.com/api/genres/${id}/page/${debouncePage}`,
        {
          signal,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          data.content_name == "Halaman tidak ditemukan" && router.push("/404");
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
  }, [id, debouncePage]);

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
      <div className="space-x-1 flex items-center float-right mr-3">
        <PrevLink page={prevPage} pageNum={dPageNum} setter={setPage} />
        <InputPage currentPage={currentPage} setter={setPage} />
        <NextLink page={nextPage} pageNum={dPageNum} setter={setPage} />
      </div>
    </>
  );
}
