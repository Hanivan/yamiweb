import Container from "@sections/Container";
import { NotFound, Dummy } from "@sections/NotFound";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function _NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2600);
  }, []);

  return <Container main={<NotFound />} aside={<Dummy />} />;
}
