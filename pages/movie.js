import _Movie from "@controllers/_Movie";
import Footer from "@sections/Footer";
import Navbar from "@sections/Navbar";

export default function Movie() {
  return (
    <>
      <Navbar />
      <_Movie />
      <Footer />
    </>
  );
}
