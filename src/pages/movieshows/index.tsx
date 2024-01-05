import MovieCardFullPage from "../../components/MovieCardFullPage/MovieCardFullPage"
import Navbar from "../../components/Navbar"
import { ListType } from "../../utils/constant"

const MovieShowPage = () => {
  return (
    <div className=" bg-black text-white w-full">
      <Navbar />
      <div className="text-3xl">Movies</div>
      <MovieCardFullPage list={ListType.movieDiscover} />
    </div>
  )
}

export default MovieShowPage
