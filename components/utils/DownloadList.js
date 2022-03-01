import TitleH3 from "./TitleH3";

export default function DownloadList({ downloadList }) {
  return (
    <div className="my-10 mx-auto">
      {downloadList.length ? (
        <>
          {downloadList.map(({ title, content }) => (
            <div key={title}>
              <TitleH3>{title}</TitleH3>
              <div className="mt-3">
                {content.map(({ quality, vendor }) => (
                  <div
                    key={quality}
                    className="flex my-2 items-center bg-yami-600 w-full md:w-10/12 rounded-tr rounded-br"
                  >
                    <span className="text-sm text-yami-900 font-semibold p-2 bg-murasakino rounded-tl rounded-bl">
                      {quality}
                    </span>
                    <ul className="flex mx-auto w-full items-center mx-3 md:ml-0 md:justify-center overflow-x-auto text-sm md:text-base gap-3">
                      {vendor.map(({ name, link }) => (
                        <li key={link}>
                          <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-murasakino transition"
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>Kosong</div>
      )}
    </div>
  );
}
