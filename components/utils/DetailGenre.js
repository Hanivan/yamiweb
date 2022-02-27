import Link from "next/link";

export default function DetailGenre({ mobile, genres }) {
  return (
    <div
      className={`${
        mobile ? "flex md:hidden" : "hidden md:flex"
      } flex-row flex-wrap mt-2 gap-1.5 lg:-mt-2 xl:mt-2 text-left md:w-40`}
    >
      {genres.map(({ genre_name, genre_id }) => (
        <Link key={genre_id} href={`/anime/genre/${genre_id}`}>
          <a className="border border-yami-300 text-sm text-yami-300 p-1 rounded hover:bg-yami-300 transition hover:text-yami-200">
            {genre_name}
          </a>
        </Link>
      ))}
    </div>
  );
}
