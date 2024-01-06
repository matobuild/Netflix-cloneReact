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

      <div
        className=" w-full h-px max-w-6xl mx-auto my-20"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
        }}
      ></div>
    </div>
  )
}

export default HomePage
