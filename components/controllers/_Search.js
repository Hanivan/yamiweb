import GenreList from "@sidebars/GenreList";
import SearchAnime from "@feeds/SearchAnime";
import Container from "@sections/Container";

export default function _Search() {
  return <Container main={<SearchAnime />} aside={<GenreList />} />;
}
