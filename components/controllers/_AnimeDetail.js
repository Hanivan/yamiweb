import OngoingList from "@sidebars/OngoingList";
import DetailAnime from "@feeds/DetailAnime";
import Container from "@sections/Container";

export default function _AnimeDetail() {
  return <Container main={<DetailAnime />} aside={<OngoingList />} />;
}
