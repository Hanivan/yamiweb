import GenreList from "@sidebars/GenreList";
import ProducerAnime from "@feeds/ProducerAnime";
import Container from "@sections/Container";

export default function _AnimeProducer() {
  return <Container main={<ProducerAnime />} aside={<GenreList />} />;
}
