import MovieCardFullPage from "../../components/MovieCardFullPage/MovieCardFullPage"
import Navbar from "../../components/Navbar"
import { ListType } from "../../utils/constant"

const NewAndPopularPage = () => {
  return (
    <div className=" bg-black text-white w-full">
      <Navbar />
      <div>NewAndPopularPage</div>

      <MovieCardFullPage list={ListType.trending} />
    </div>
  )
}

export default NewAndPopularPage
