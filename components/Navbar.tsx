import Link from "next/link";

function Navbar() {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex justify-evenly gap-x-4 border-b-2">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/counter" className="hover:underline">
        Counter
      </Link>
      <Link href="/tours" className="hover:underline">
        Tours
      </Link>
      <Link href="/actions" className="hover:underline">
        Actions
      </Link>
    </nav>
  );
}
export default Navbar;
