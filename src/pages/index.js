import Link from "next/link";
import { useRouter } from "next/router";
import HeaderTitle from "../../components/HeaderTitle";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <>
      <div className="container">
        <HeaderTitle title="Home" />
        {results?.map((res) => (
          <Link
            key={res.id}
            href={`/movies/${res.title}/${res.id}`}
            onClick={() => onClick(res.id, res.title)}
          >
            <div className="movie">
              <img src={`https://image.tmdb.org/t/p/w500${res.poster_path}`} />
              <h4>{res.title}</h4>
            </div>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          cursor: pointer;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
