import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ content }) {
  return (
    <>
      <div className="bg-yami-900 min-h-screen text-yami-200">
        <Navbar />
        {content}
        <Footer />
      </div>
    </>
  );
}
