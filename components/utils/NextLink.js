export default function NextLink({ page, pageNum, setter }) {
  if (page == "#" || page == "" || page == undefined) return <div></div>;
  return (
    <button
      title="Next Page"
      className="p-2 mt-0.5 border border-murasakino text-murasakino rounded flex items-center justify-center hover:bg-murasakino hover:cursor-pointer transition hover:text-yami-900 active:bg-murasakino active:text-yami-900"
      onClick={() => setter((pageNum += 1))}
    >
      <svg
        className="bi bi-chevron-right"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </button>
  );
}
