import Title from "@utils/Title";
import Head from "next/head";

function NotFound() {
  return (
    <>
      <Head>
        <title>Yami Web - Halaman Tidak Ditemukan</title>
      </Head>
      <div className="flex items-center justify-center w-full h-full">
        <div className="text-center">
          <h1 className="font-bold text-2xl mb-5 text-murasakino">(๑´╹‸╹`๑)</h1>
          <h1 className="text-2xl font-bold font-serif">Ooppss..</h1>
          <p>Konten Yang Kamu Cari Gaada</p>
        </div>
      </div>
    </>
  );
}

function Dummy() {
  let items = [];
  for (let i = 0; i <= 11; i++) {
    items.push(
      <li key={i}>
        <div className="w-[115px] h-4 bg-yami-600"></div>
      </li>
    );
  }
  return (
    <>
      <Title>Daftar Genre</Title>
      <ul className="mt-3 space-y-1 animate-pulse">{items}</ul>
    </>
  );
}

export { Dummy, NotFound };
