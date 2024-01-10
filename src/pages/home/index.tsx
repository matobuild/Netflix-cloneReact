import Navbar from "../../components/Navbar"

import MovieCategory from "../../components/MovieCard/MovieCard"
import { ListType } from "../../utils/constant"

const HomePage = () => {
  return (
    <div className=" bg-black text-white w-full">
      <Navbar />

      <MovieCategory list={ListType.Upcoming} autoPlay={true} />

      <MovieCategory list={ListType.now_playing} />

      <MovieCategory list={ListType.popular} />
      <MovieCategory list={ListType.topRated} />
    </div>
  )
}

export default HomePage
