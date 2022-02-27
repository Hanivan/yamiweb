export default function MetaTitleDetail({ details }) {
  return (
    <div className="w-full flex mt-3 md:mt-0 text-center gap-2 justify-center items-start lg:items-center xl:text-left xl:justify-evenly">
      {details.map(({ title, content }) => (
        <div key={title}>
          <h4 className="font-semibold text-lg">{title}</h4>
          <p className="text-murasakino md:w-24 xl:w-full">{content}</p>
        </div>
      ))}
    </div>
  );
}
