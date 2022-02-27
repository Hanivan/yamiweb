import GenreList from "@sidebars/GenreList";
import AllAnime from "@feeds/AllAnime";
import Container from "@sections/Container";

export default function _Anime() {
  return <Container main={<AllAnime />} aside={<GenreList />} />;
}
