import MovieCardFullPage from "../../components/MovieCardFullPage/MovieCardFullPage"
import Navbar from "../../components/Navbar"
import { ListType } from "../../utils/constant"

const MovieShowPage = () => {
  return (
    <div className=" w-full bg-black text-white">
      <Navbar />

      <MovieCardFullPage list={ListType.movieDiscover} name={"Movies"} />
    </div>
  )
}

export default MovieShowPage
