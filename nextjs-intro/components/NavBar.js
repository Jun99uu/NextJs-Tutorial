import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : "unactive"}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : "unactive"}>
          About
        </a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        .active {
          color: blue;
        }
        .unactive {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
