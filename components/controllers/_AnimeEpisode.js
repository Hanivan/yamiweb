import Container from "@sections/Container";
import DetailEpisode from "@feeds/DetailEpisode";
import OngoingList from "@sidebars/OngoingList";

export default function _AnimeEpisode() {
  return <Container main={<DetailEpisode />} aside={<OngoingList />} />;
}
