import Link from "next/link";

export default function PaginationEps({ prev, detail, next }) {
  return (
    <div className="mx-auto text-center md:w-9/12 lg:w-11/12 xl:w-4/6 flex text-sm mt-2">
      {prev != "#" ? (
        <Link href={`/${prev}`}>
          <a className="border border-murasakino inline-block w-full rounded-tl rounded-bl hover:bg-yami-600 mr-2 transition">
            <svg
              className="inline-block css-i6dzq1"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="#A093C7"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </a>
        </Link>
      ) : (
        <div></div>
      )}
      {detail != "#" ? (
        <Link href={`/anime/${detail}`}>
          <a className="border border-murasakino text-murasakino inline-block w-full hover:bg-yami-600 transition">
            Semua Episode
          </a>
        </Link>
      ) : (
        <div></div>
      )}
      {next != "#" ? (
        <Link href={`/${next}`}>
          <a className="border border-murasakino inline-block w-full rounded-tr rounded-br hover:bg-yami-600 ml-2 transition">
            <svg
              className="inline-block css-i6dzq1"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="#A093C7"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
}
