import _AnimeEpisode from "@controllers/_AnimeEpisode";
import Footer from "@sections/Footer";
import Navbar from "@sections/Navbar";

export default function Episode() {
  return (
    <>
      <Navbar />
      <_AnimeEpisode />
      <Footer />
    </>
  );
}
