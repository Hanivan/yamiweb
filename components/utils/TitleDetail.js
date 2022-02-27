import Link from "next/link";
import Title from "./Title";

export default function TitleDetail({
  title,
  japanese,
  type,
  seasons,
  duration,
}) {
  return (
    <div className="w-full">
      <Title>{title}</Title>
      <span className="text-sm">
        {japanese} • {type} •{" "}
        {seasons.length ? (
          <Link href={`/anime/season/${seasons[0].season_id}`}>
            <a className="hover:text-murasakino active:text-murasakino transition">
              {seasons[0].season_name}
            </a>
          </Link>
        ) : (
          "-"
        )}{" "}
        • {duration}
      </span>
    </div>
  );
}
