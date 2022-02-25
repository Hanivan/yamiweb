import Link from "next/link";

export default function Button({ href, text }) {
  return (
    <Link href={href}>
      <a className="inline-block lg:mr-8 mt-2 border border-murasakino rounded transition float-right p-1 text-murasakino hover:bg-murasakino hover:text-yami-900">
        {text}
      </a>
    </Link>
  );
}
