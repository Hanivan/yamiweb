import OngoingList from "@sidebars/OngoingList";
import DetailBatch from "@feeds/DetailBatch";
import Container from "@sections/Container";

export default function _BatchDetail() {
  return <Container main={<DetailBatch />} aside={<OngoingList />} />;
}
