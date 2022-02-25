import Link from "next/link";

export default function NavbarBrand() {
  return (
    <Link href="/">
      <a className="flex items-center">
        <img
          src="/yami-web.png"
          alt="yamiweb"
          className="w-10 h-10 rounded mr-3"
        />
        <h2 className="text-lg font-bold font-serif transition hover:text-murasakino">
          Yami Web
        </h2>
      </a>
    </Link>
  );
}
