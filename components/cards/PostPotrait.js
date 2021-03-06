import Link from "next/link";

export default function PostPotrait({
  href = "/anime",
  title,
  id,
  thumb,
  status,
  type,
  score,
}) {
  return (
    <article className="inline-block lg:w-28 w-24 mx-auto lg:mx-0 active:translate-y-1 hover:translate-y-1 transition">
      <Link href={`${href}/${id}`}>
        <a>
          <img
            src={thumb}
            title={title}
            alt={title}
            className="rounded w-40 h-32 lg:h-40 overflow-hidden shadow text-yami-600"
          />
          <div className="flex justify-between -mt-8 mb-2.5">
            <div className="bg-murasakino p-1 text-xs rounded-tr rounded-br">
              {type}
            </div>
            <div className="bg-yami-600 flex p-1 items-center text-xs rounded-tl rounded-bl">
              <span className="text-murasakino mr-1">&#9733;</span>
              {score}
            </div>
          </div>
        </a>
      </Link>
      <Link href={`${href}/${id}`}>
        <a
          className="inline-block truncate transition hover:text-murasakino w-full"
          title={title}
        >
          {title}
        </a>
      </Link>
      <span className="text-xs md:text-sm block -mt-1">{status}</span>
    </article>
  );
}
