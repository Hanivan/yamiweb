import _AnimeProducer from "@components/controllers/_AnimeProducer";
import Footer from "@components/sections/Footer";
import Navbar from "@components/sections/Navbar";

export default function AnimeProducer() {
  return (
    <>
      <Navbar />
      <_AnimeProducer />
      <Footer />
    </>
  );
}
