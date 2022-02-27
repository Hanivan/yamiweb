import Link from "next/link";

export default function MetaInfoDetail({
  english,
  release,
  synonim,
  producers,
  studios,
}) {
  return (
    <ul>
      <li>
        <p className="text-murasakino">
          <span className="font-semibold text-yami-200">English</span> {english}
        </p>
      </li>
      <li>
        <p className="text-murasakino">
          <span className="font-semibold text-yami-200">Release Date</span>{" "}
          {release}
        </p>
      </li>
      <li>
        <p className="text-murasakino">
          <span className="font-semibold text-yami-200">Synonim</span> {synonim}
        </p>
      </li>
      {producers != undefined && (
        <li>
          <p className="text-murasakino">
            <span className="font-semibold text-yami-200">Producer</span>{" "}
            {producers.map(({ producer_name, producer_id }) => (
              <Link key={producer_id} href={`/anime/producer/${producer_id}`}>
                <a>
                  {producer_name}
                  {", "}
                </a>
              </Link>
            ))}
          </p>
        </li>
      )}
      {studios != undefined && (
        <li>
          <p className="text-murasakino">
            <span className="font-semibold text-yami-200">Studio</span>{" "}
            {studios.map(({ studio_name, studio_id }) => (
              <Link key={studio_id} href={`/anime/studio/${studio_id}`}>
                <a>
                  {studio_name}
                  {", "}
                </a>
              </Link>
            ))}
          </p>
        </li>
      )}
    </ul>
  );
}
