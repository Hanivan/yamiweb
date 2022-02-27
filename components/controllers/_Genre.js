import Container from "@components/sections/Container";
import AllGenre from "@feeds/AllGenre";
import OngoingList from "@sidebars/OngoingList";

export default function _Genre() {
  return <Container main={<AllGenre />} aside={<OngoingList />} />;
}
