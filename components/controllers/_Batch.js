import GenreList from "@sidebars/GenreList";
import BatchAnime from "@feeds/BatchAnime";
import Container from "@sections/Container";

export default function _Batch() {
  return <Container main={<BatchAnime />} aside={<GenreList />} />;
}
