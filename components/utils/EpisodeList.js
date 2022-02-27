import Link from "next/link";
import Title from "./Title";

export default function EpisodeList({ episodes, batch }) {
  return (
    <div className="mt-10">
      <Title>Daftar Episode</Title>
      {episodes.length ? (
        <ul className="w-full md:w-4/6 h-44 scrollbar-thin scrollbar-thumb-murasakino scrollbar-track-yami-600 overflow-y-auto">
          {episodes.map(({ title, id, uploaded_on }) => (
            <li
              key={id}
              className="hover:bg-yami-600 hover:cursor-pointer transition text-murasakino rounded py-2 px-1 border-b border-yami-600"
            >
              <Link href={`/${id}`}>
                <a className="inline-block xl:inline text-yami-200 hover:text-murasakino transition w-48 md:w-72 lg:w-64 xl:w-full">
                  {title}
                </a>
              </Link>
              <span className="float-right">{uploaded_on}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Kosong</p>
      )}
      {batch.id != "Masih Kosong" ? (
        <Link href={`/batch/${batch.id}`}>
          <a className="inline-block text-center p-1 mt-3 rounded w-full md:w-4/6 text-murasakino hover:shadow bg-yami-600 hover:bg-yami-900 transition">
            Download Batch
          </a>
        </Link>
      ) : (
        <span className="hover:cursor-pointer line-through inline-block text-center p-1 mt-3 rounded w-full md:w-4/6 text-murasakino hover:shadow bg-yami-600 hover:bg-yami-900 transition">
          Download Batch
        </span>
      )}
    </div>
  );
}
