import Link from "next/link";

export default function PostLandscape({ title, eps, id, thumb, release_on }) {
  return (
    <article className="md:w-6/12 mb-3 mx-auto md:mx-0">
      <div className="flex flex-col md:flex-row items-start">
        <Link href={`/${id}`}>
          <a>
            <img
              src={thumb}
              title={title}
              alt={title}
              className="rounded w-40 md:w-56 mb-2 md:mb-0 aspect-video shadow text-yami-600"
            />
          </a>
        </Link>
        <div className="md:ml-3  w-40 md:w-full md:mr-3">
          <Link href={`/${id}`}>
            <a className="transition hover:text-murasakino">{title}</a>
          </Link>
          <span className="inline-block text-sm w-full">Episode: {eps}</span>
          <span className="inline-block text-sm w-full">
            Released On: {release_on}
          </span>
        </div>
      </div>
    </article>
  );
}
