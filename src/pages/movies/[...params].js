import { useRouter } from "next/router";
import HeaderTitle from "../../../components/HeaderTitle";

export default function MovieDetail() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <HeaderTitle title="Movie" />
      <h1>{router.query.title || "Loading..."}</h1>
    </div>
  );
}
