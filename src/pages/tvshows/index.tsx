import MovieCardFullPage from "../../components/MovieCardFullPage/MovieCardFullPage"
import Navbar from "../../components/Navbar"
import { ListType } from "../../utils/constant"

const TVShowPage = () => {
  return (
    <div className=" bg-black text-white w-full">
      <Navbar />
      <MovieCardFullPage list={ListType.tvDiscover} name={"TV Shows"} />
    </div>
  )
}

export default TVShowPage
