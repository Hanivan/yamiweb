import Link from "next/link";

export default function Pagination({ prevPage, nextPage }) {
  return (
    <div className="flex space-x-1 items-center float-right lg:mr-8">
      <Link href={prevPage}>
        <a
          href="#"
          className="inline-block border border-murasakino rounded transition float-right p-2 text-murasakino hover:bg-murasakino hover:text-yami-900"
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
        </a>
      </Link>
      <div className="border py-1.5 px-8 rounded border-murasakino text-sm">
        4 Of 17
      </div>
      <Link href={nextPage}>
        <a
          href="#"
          className="inline-block border border-murasakino rounded transition float-right p-2 text-murasakino hover:bg-murasakino hover:text-yami-900"
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
        </a>
      </Link>
    </div>
  );
}
