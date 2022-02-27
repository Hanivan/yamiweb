import GenreList from "@sidebars/GenreList";
import MovieAnime from "@feeds/MovieAnime";
import Container from "@sections/Container";

export default function _Movie() {
  return <Container main={<MovieAnime />} aside={<GenreList />} />;
}
