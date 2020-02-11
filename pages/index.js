import Link from "next/link";
import Layout from "../components/MyLayout";

const indexPageContent = <p>Hello Next.js</p>;

export default function Index() {
  return (
    <div>
      <Layout content={indexPageContent}>
        <p>This is the home page</p>
      </Layout>
    </div>
  );
}
