import Link from "next/link";

export default function PostGenre({ name, title, id, total }) {
  return (
    <Link href={`/anime/genre/${id}`}>
      <a className="w-full md:w-80 lg:w-64 h-16 bg-yami-600 rounded p-3 flex items-center justify-between hover:bg-yami-900 hover:shadow transition">
        <div>
          <div className="inline-block text-lg font-semibold hover:text-murasakino transition">
            {name}
          </div>
          <p className="text-sm w-72 md:w-64 lg:w-52 truncate" title={title}>
            {title}
          </p>
        </div>
        <span className="text-lg text-murasakino font-semibold">{total}</span>
      </a>
    </Link>
  );
}
