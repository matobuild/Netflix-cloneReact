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
    <div>
      <h1>{list}</h1>
      {movie.data.map((res: MovieDetail) => (
        <div>{res.original_title}</div>
      ))}
    </div>
  )
}

export default MovieCategory
