import Layout from "@sections/Layout";
import _NotFound from "@controllers/_NotFound";

export default function Custom404() {
  return <Layout content={<_NotFound />} />;
}
