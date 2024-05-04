import Results from "./component/Results";

const API_KEY = process.env.API_KEY; // API_KEY is used here to access the environment variable in the code and it is not exposed to the client side.


export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US$page=1`,
    { next: {revalidate: 20000}}
  );

  const data = await res.json();

  if (!data) {
    throw new Error("Failed to load data");
  };

  const results = data.results;

  // console.log("results", results);

  return (
    <div>
      <Results results={results}/>
    </div>
  )
}
