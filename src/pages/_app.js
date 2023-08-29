import NavBar from "../../components/NavBar";
import "../styles/globals.css";

export default function MainStyle({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>sfsdfdf</span>
    </>
  );
}
