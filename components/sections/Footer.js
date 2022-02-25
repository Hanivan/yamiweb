export default function Footer() {
  return (
    <>
      <div className="container border-t border-yami-600 mt-8 flex items-center justify-between">
        <div className="mt-8 md:w-96 w-4/5">
          <h3 className="border-b-2 mb-3 border-murasakino text-yami-200 font-serif font-semibold inline-block whitespace-nowrap w-11/12 text-lg">
            About
          </h3>
          <p className="text-sm">
            Yami Web - Cuma website yang dibikin berdasarkan hobi pembuatnya.
            Dan karena si pembuat kurang suka iklan yang meresahkan, maka
            terciptalah website ini. Kamu Mau{" "}
            <a
              href="https://trakteer.id/hanivanrizky"
              target="_blank"
              rel="noreferrer"
              className="text-murasakino"
            >
              Traktirin
            </a>{" "}
            Kopi Buat Pembuat?
          </p>
        </div>
        <a href="#" className="p-2 bg-yami-600 rounded mx-auto md:mx-0">
          <svg
            className="bi bi-caret-up-fill text-murasakino"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
        </a>
      </div>
      <div className="w-full h-14 bg-yami-600 text-sm mt-6 flex items-center justify-center flex-col text-xs">
        <span className="font-bold">&copy; 2022 - Yami Web</span>
        <span>
          Created With{" "}
          <a
            href="https://hanivan.github.io"
            target="_blank"
            rel="noreferrer"
            className="text-murasakino"
          >
            ♥
          </a>{" "}
          By Hanivan Rizky
        </span>
      </div>
    </>
  );
}
