import { useEffect, useState } from "react";
import HeaderTitle from "../../components/HeaderTitle";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);
  return (
    <>
      <div className="container">
        <HeaderTitle title="Home" />
        {!movies && <h1>Loading...</h1>}
        {movies?.map((res) => (
          <div className="movie" key={res.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${res.poster_path}`} />
            <h1>{res.title}</h1>
          </div>
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
