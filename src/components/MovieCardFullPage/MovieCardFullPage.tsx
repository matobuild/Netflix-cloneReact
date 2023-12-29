import { useEffect } from "react"
import { MovieListServices } from "../../services/movieList"
import { useMovieListStore } from "../../store/movieList"
import { ListType } from "../../utils/constant"
import { MovieDetail } from "../../interface/movieList"

type MovieCardProps = {
  list: ListType
}

const MovieCardFullPage = ({ list }: MovieCardProps) => {
  const { movie, setMovieList } = useMovieListStore()

  const getMovieDiscoveryData = async () => {
    const data = await MovieListServices.getMovieDiscoverList(list)
    console.log("data", data.data)

    if (data && data.data) {
      setMovieList(list, {
        data: data.data.results,
        loading: false,
        error: null,
      })
    }
  }

  useEffect(() => {
    getMovieDiscoveryData()
  }, [])
  console.log("movie", list, movie)

  return (
    <div>
      <h1>{list}</h1>
      <div className="flex flex-wrap gap-4">
        {movie[list].data.map((res: MovieDetail) => (
          <div key={`${list} movie ${res.title}`}>
            <img
              className="rounded-lg"
              src={`https://image.tmdb.org/t/p/w185${res.poster_path}`}
              alt="movie_image"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieCardFullPage
