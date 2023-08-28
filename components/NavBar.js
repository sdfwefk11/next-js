import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link className={router.pathname === "/" ? "active" : ""} href="/">
        Home
      </Link>
      <Link
        className={router.pathname === "/about" ? "active" : ""}
        href="/about"
      >
        About
      </Link>
      <style jsx global>{`
        nav {
          background-color: black;
          border-radius: 5px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          :hover {
            background-color: white;
            color: black;
            border-radius: 5px;
          }
        }
        a {
          text-decoration: none;
          color: gray;
          margin: 10px 10px;
          font-size: 20px;
        }
        .active {
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 30px;
          background-color: blue;
          border-radius: 5px;
        }
      `}</style>
    </nav>
  );
}
