import { useRouter } from "next/router";
import HeaderTitle from "../../../components/HeaderTitle";

export default function MovieDetail({ params }) {
  const [title, id] = params || [];
  return (
    <div>
      <HeaderTitle title={title} />
      <h1>{title}</h1>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
