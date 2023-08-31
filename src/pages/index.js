import { useEffect, useState } from "react";
import HeaderTitle from "../../components/HeaderTitle";

const API_KEY = "1b86acec5851a012fe6a11323ab396f0";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <HeaderTitle title="Home" />
      {!movies && <h1>Loading...</h1>}
      {movies?.map((res) => (
        <div key={res.id}>
          <h1>{res.title}</h1>
        </div>
      ))}
    </div>
  );
}
