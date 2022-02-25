import { NotFound, Dummy } from "@sections/NotFound";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PageNotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2600);
  }, [router]);
  return (
    <>
      <div className="container mt-5 flex flex-col lg:flex-row justify-between">
        <main className="lg:w-10/12 xl:w-9/12">
          <NotFound />
        </main>
        <aside className="lg:w-4/12 xl:w-3/12">
          <Dummy />
        </aside>
      </div>
    </>
  );
}
