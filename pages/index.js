import Link from "next/link";
import Layout from "../components/MyLayout";

// const indexPageContent = <p>Hello Next.js</p>;

// export default function Index() {
//   return (
//     <div>
//       <Layout content={indexPageContent}>
//         <p>This is the home page</p>
//       </Layout>
//     </div>
//   );
// }

const PostLink = props => (
  <li>
    {/* query string parameter (a query param) */}
    {/* use string interpolation */}
    {/* /post?title=$ is the query */}
    {/* parameter = props.title */}
    {/* title is set as a prop below in PostLink */}
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}
