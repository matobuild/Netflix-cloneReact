import MovieCardFullPage from "../../components/MovieCardFullPage/MovieCardFullPage"
import Navbar from "../../components/Navbar"
import { ListType } from "../../utils/constant"

const NewAndPopularPage = () => {
  return (
    <div className=" bg-black text-white w-full">
      <Navbar />
      <MovieCardFullPage list={ListType.trending} name={"New & Popular"} />
    </div>
  )
}

export default NewAndPopularPage
