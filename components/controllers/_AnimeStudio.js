import GenreList from "@sidebars/GenreList";
import StudioAnime from "@feeds/StudioAnime";
import Container from "@sections/Container";

export default function _AnimeStudio() {
  return <Container main={<StudioAnime />} aside={<GenreList />} />;
}
