import Link from "next/link";

export default function PostSidebar({ title, id, thumb, release_on }) {
  return (
    <div className="flex items-start mb-3">
      <Link href={`/${id}`}>
        <a className="lg:w-5/6 w-2/6 mr-3">
          <img
            src={thumb}
            className="rounded aspect-video w-40 md:w-56 mb-2 shadow text-yami-600"
            title={title}
            alt={title}
          />
        </a>
      </Link>
      <div className="2xl:-ml-10">
        <Link href={`/${id}`}>
          <a className="block lg:inline-block lg:w-5/6 transition hover:text-murasakino">
            {title}
          </a>
        </Link>
        <span className="text-sm inline-block">Release On: {release_on}</span>
      </div>
    </div>
  );
}
