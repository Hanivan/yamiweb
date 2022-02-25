import { useState } from "react";
import NavbarBrand from "@utils/NavbarBrand";
import NavbarSearch from "@utils/NavbarSearch";
import Link from "next/link";

export default function Navbar() {
  const dropdownList = [
    { text: "Anime List", href: "/anime" },
    { text: "Anime Ongoing", href: "/ongoing" },
    { text: "Anime Batch", href: "/batch" },
    { text: "Anime Movie", href: "/movie" },
    { text: "Genre List", href: "/genre" },
  ];
  const [offcanvas, setOffcanvas] = useState(false);

  return (
    <nav className="container lg:relative flex items-center justify-between py-7 text-base font-semibold">
      <button
        className="lg:hidden transition hover:text-murasakino"
        onClick={() => setOffcanvas(!offcanvas)}
      >
        <svg
          className="css-i6dzq1"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <NavbarBrand />
      <ul
        className={`fixed transition bg-yami-600 w-full h-full p-8 lg:p-0 transition-all lg:bg-transparent lg:w-auto lg:h-auto lg:flex lg:static lg:space-x-11 space-y-3 lg:space-y-0 font-medium items-center ${
          offcanvas ? "top-0 left-0" : "top-0 -left-full"
        }`}
      >
        {dropdownList.map(({ text, href }) => (
          <li key={text}>
            <Link href={href}>
              <a className="transition hover:text-murasakino">{text}</a>
            </Link>
          </li>
        ))}
        <li>
          <div className="hidden lg:block">
            <NavbarSearch />
          </div>
        </li>
        <li className="lg:hidden">
          <button
            onClick={() => setOffcanvas(!offcanvas)}
            className="absolute top-0 right-0 m-9 hover:text-murasakino"
          >
            <svg
              className="css-i6dzq1"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="7" x2="7" y2="19"></line>
              <line x1="7" y1="7" x2="19" y2="19"></line>
            </svg>
          </button>
        </li>
      </ul>
      <div className="lg:hidden">
        <NavbarSearch />
      </div>
    </nav>
  );
}
