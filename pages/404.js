import _NotFound from "@controllers/_NotFound";
import Footer from "@sections/Footer";
import Navbar from "@sections/Navbar";

export default function Custom404() {
  return (
    <>
      <Navbar />
      <_NotFound />
      <Footer />
    </>
  );
}
