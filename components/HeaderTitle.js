import Head from "next/head";

export default function HeaderTitle({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
