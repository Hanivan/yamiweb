import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NavbarSearch() {
  const [search, setSearch] = useState(false);
  const router = useRouter();

  const submitSearch = (e) => {
    e.preventDefault();
    let val = e.target.q.value;
    router.push(`/search?q=${val}`);
  };

  useEffect(() => {
    const input = document.getElementById("search");
    search && input.focus();
  }, [search]);

  return (
    <>
      <button
        onClick={() => setSearch(!search)}
        className="transition hover:text-murasakino"
      >
        <svg
          className="css-i6dzq1 inline-block mr-auto"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="8"></circle>
          <line x1="22" y1="22" x2="18.65" y2="18.65"></line>
        </svg>
      </button>
      <form onSubmit={submitSearch}>
        <input
          type="text"
          name="q"
          id="search"
          className={`absolute transition-all w-full lg:w-auto bg-search bg-yami-600 rounded-lg py-2 px-14 focus:outline-none focus:ring-2 focus:ring-murasakino ${
            search ? "top-7 right-0 lg:right-8" : "-top-14 right-0 lg:right-8"
          }`}
          placeholder="Search Anime..."
          autoComplete="off"
        />
      </form>
      <button
        className={`absolute transition-all hover:text-yami-300 ${
          search ? "top-9 right-5 lg:right-12" : "-top-10 right-5 lg:right-12"
        }`}
        onClick={() => setSearch(!search)}
      >
        <svg
          className="css-i6dzq1"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="7" x2="7" y2="19"></line>
          <line x1="7" y1="7" x2="19" y2="19"></line>
        </svg>
      </button>
    </>
  );
}
