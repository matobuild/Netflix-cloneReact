import FavoriteFullPage from "../../components/FavoriteFullPage/FavoriteFullPage"
import Navbar from "../../components/Navbar"

const MyList = () => {
  return (
    <div className=" w-full bg-black text-white">
      <Navbar />
      <FavoriteFullPage name={"My Favorites"} />
    </div>
  )
}

export default MyList
