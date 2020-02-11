import { useRouter } from "next/router";
import Layout from "../components/MyLayout";

const Page = () => {
  // return router object
  // useRouter is a React hook
  const router = useRouter();

  return (
    <Layout>
      {/* use routers query object */}
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
};

export default Page;
