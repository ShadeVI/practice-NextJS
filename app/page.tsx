import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Link
        href="/about"
        className="text-xl text-blue-500 inline-block mt-8 mx-8"
      >
        About page
      </Link>
      <Link
        href="/info"
        className="text-xl text-blue-500 inline-block mt-8 mx-8"
      >
        Info page
      </Link>
    </div>
  );
}
