import GenreList from "@sidebars/GenreList";
import GenreAnime from "@feeds/GenreAnime";
import Container from "@sections/Container";

export default function _AnimeGenre() {
  return <Container main={<GenreAnime />} aside={<GenreList />} />;
}
