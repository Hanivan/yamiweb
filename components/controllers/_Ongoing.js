import GenreList from "@sidebars/GenreList";
import OngoingAnime from "@feeds/OngoingAnime";
import Container from "@sections/Container";

export default function _Ongoing() {
  return <Container main={<OngoingAnime />} aside={<GenreList />} />;
}
