import { useEffect } from "react"
import Navbar from "../../components/Navbar"
import { MovieListServices } from "../../services/movieList"
import { useMovieListStore } from "../../store/movieList"
import MovieCategory from "../../components/MovieCard/MovieCard"
import { ListType } from "../../utils/constant"

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <MovieCategory list={ListType.Upcoming} />
      <hr />
      <MovieCategory list={ListType.now_playing} />
    </div>
  )
}

export default HomePage
