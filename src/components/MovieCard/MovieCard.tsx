import { useEffect } from "react"
import { MovieListServices } from "../../services/movieList"
import { useMovieListStore } from "../../store/movieList"
import { ListType } from "../../utils/constant"
import { MovieDetail } from "../../interface/movieList"

type MovieCardProps = {
  list: ListType
}

const MovieCategory = ({ list }: MovieCardProps) => {
  const { movie, setMovieList } = useMovieListStore()

  const getMovieData = async () => {
    const data = await MovieListServices.getMovieList(list)
    console.log("data", data.data)

    if (data && data.data) {
      setMovieList({ data: data.data.results, loading: false, error: null })
    }
  }

  useEffect(() => {
    getMovieData()
  }, [])
  console.log("movie", list, movie)

  return (
    <div className="">
      <h1>{list}</h1>
      <div className="flex flex-wrap gap-5 h-72 w-screen overflow-x-auto">
        {movie.data.map((res: MovieDetail) => (
          <div className=" " key={`${list} movie ${res.title}`}>
            {/* <div>{res.title}</div> */}
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

export default MovieCategory
