import Link from "next/link";

export default function Index() {
  return (
    <div>
      <p>This is the home page</p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
