import GenreList from "@sidebars/GenreList";
import SeasonAnime from "@feeds/SeasonAnime";
import Container from "@sections/Container";

export default function _AnimeSeason() {
  return <Container main={<SeasonAnime />} aside={<GenreList />} />;
}
