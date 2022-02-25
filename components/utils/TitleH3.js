export default function TitleH3({ children }) {
  const Real = () => (
    <>
      <h3 className="w-96 text-yami-200 font-serif font-semibold w-full text-md">
        {children}
      </h3>
      <span className="block w-[125px] h-2 mt-1 border-t-2 border-murasakino"></span>
    </>
  );

  const Dummy = () => (
    <>
      <div className="w-60 h-6 bg-yami-600 animate-pulse"></div>
      <div className="border-t-2 w-[125px] border-murasakino"></div>
    </>
  );

  return <>{children ? <Real /> : <Dummy />}</>;
}
