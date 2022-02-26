import _AnimeGenre from "@controllers/_AnimeGenre";
import Footer from "@sections/Footer";
import Navbar from "@sections/Navbar";

export default function AnimeGenre() {
  return (
    <>
      <Navbar />
      <_AnimeGenre />
      <Footer />
    </>
  );
}
