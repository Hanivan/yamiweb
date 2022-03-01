export default function InputPage({ currentPage, setter }) {
  const getPage = (e) => {
    if (isNaN(e.target.value) || e.target.value == "") return;
    setter(e.target.value);
    setTimeout(() => (e.target.value = ""), 3000);
  };

  return (
    <input
      className="border text-sm border-murasakino p-1.5 w-16 rounded bg-yami-900 text-center transition-all focus:outline-none focus:ring-1 focus:ring-murasakino"
      id="inputPage"
      placeholder={`${currentPage ? currentPage : "1 of 1"}`}
      onChange={(e) => getPage(e)}
    />
  );
}
