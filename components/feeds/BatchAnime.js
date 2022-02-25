import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Title from "@utils/Title";
import SkPostPotrait from "@skeletons/SkPostPotrait";
import PostPotrait from "@cards/PostPotrait";
import { useRouter } from "next/router";
import Head from "next/head";

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

  const getData = useCallback(async () => {
    try {
      setAnimeList([]);
      await fetch(`
         https://samehadaku-api.herokuapp.com/api/batch/page/${debouncePage}
         `)
        .then((res) => res.json())
        .then((data) => {
          data.content_name == "Halaman tidak ditemukan" && router.push("404");
          setAnimeList(data.anime_list);
          setPageTitle(data.content_name);
          setCurrentPage(data.current_page);
          setPrevPage(data.prev_page);
          setNextPage(data.next_page);
        });
    } catch (e) {
      console.log(e.message);
    }
  }, [debouncePage, router]);

  const Dummy = () => {
    let items = [];
    for (let i = 0; i <= 22; i++) {
      items.push(<SkPostPotrait key={i} />);
    }
    return <>{items}</>;
  };

  const getPage = (e) => {
    if (isNaN(e.target.value) || e.target.value == "") return;
    setPage(e.target.value);
    setTimeout(() => (e.target.value = ""), 3000);
  };

  const PrevLink = () => {
    if (prevPage == "#" || prevPage == "" || prevPage == undefined)
      return <div></div>;
    return (
      <button
        title="Previous Page"
        className="p-2 mt-0.5 border border-murasakino text-murasakino rounded flex items-center justify-center hover:bg-murasakino hover:cursor-pointer transition hover:text-yami-900 active:bg-murasakino active:text-yami-900"
        onClick={() => setPage((dPageNum -= 1))}
      >
        <svg
          className="bi bi-chevron-left"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </button>
    );
  };

  const NextLink = () => {
    if (nextPage == "#" || nextPage == "" || nextPage == undefined)
      return <div></div>;
    return (
      <button
        title="Next Page"
        className="p-2 mt-0.5 border border-murasakino text-murasakino rounded flex items-center justify-center hover:bg-murasakino hover:cursor-pointer transition hover:text-yami-900 active:bg-murasakino active:text-yami-900"
        onClick={() => setPage((dPageNum += 1))}
      >
        <svg
          className="bi bi-chevron-right"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    );
  };

  useEffect(() => {
    getData();
  }, [getData]);

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
      <div className="space-x-1 flex items-center float-right">
        <PrevLink />
        <input
          className="border text-sm border-murasakino p-1.5 w-16 rounded bg-yami-900 text-center transition-all focus:outline-none focus:ring-1 focus:ring-murasakino"
          id="inputPage"
          placeholder={`${currentPage ? currentPage : "- of -"}`}
          onChange={(e) => getPage(e)}
        />
        <NextLink />
      </div>
    </>
  );
}
