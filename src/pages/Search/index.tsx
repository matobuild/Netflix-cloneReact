import Navbar from "../../components/Navbar"
import SearchFullPage from "../../components/SearchFullPage/SearchFullPage"

const SearchPage = () => {
  return (
    <div className=" bg-black text-white w-full">
      <Navbar />
      <SearchFullPage keyword={"chicken"} />
    </div>
  )
}

export default SearchPage
