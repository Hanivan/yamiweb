export default function Container({ main, main2, main3, aside }) {
  return (
    <>
      <div className="container mt-5 flex flex-col lg:flex-row justify-between overflow-x-hidden">
        <main className="lg:w-10/12 xl:w-9/12">
          {main ?? main}
          {main2 ?? main2}
          {main3 ?? main3}
        </main>
        <aside className="lg:w-4/12 xl:w-3/12">{aside}</aside>
      </div>
    </>
  );
}
