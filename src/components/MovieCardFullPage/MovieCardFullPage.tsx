import { useEffect } from "react"
import { ListServices } from "../../services/movieList"
import { useMovieListStore } from "../../store/movieList"
import { ListType } from "../../utils/constant"
import { MovieDetail } from "../../interface/movieList"
import { Link } from "react-router-dom"

type MovieCardProps = {
  list: ListType
}

const MovieCardFullPage = ({ list }: MovieCardProps) => {
  const { movie, setMovieList } = useMovieListStore()

  const getMovieDiscoveryData = async () => {
    const data = await ListServices.getList(list)
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
  console.log("movieCard", list, movie)

  return (
    <div>
      <h1>{list}</h1>
      <div className="flex flex-wrap gap-4">
        {movie[list].data.map((res: MovieDetail) => (
          <div key={`${list} movie ${res.title}`}>
            <Link to={`/detail/${res.title} `} state={{ id: res.id }}>
              <img
                className="rounded-lg"
                src={`https://image.tmdb.org/t/p/w185${res.poster_path}`}
                alt="movie_image"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieCardFullPage
