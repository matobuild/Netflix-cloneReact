import { useForm } from "react-hook-form"
import Navbar from "../../components/Navbar"
import SearchBar from "../../components/SearchBar"
import SearchFullPage from "../../components/SearchFullPage/SearchFullPage"

const SearchPage = () => {
  const { control, register, handleSubmit } = useForm()

  return (
    <div className=" w-full bg-black text-white">
      <Navbar />
      <SearchBar register={register} handleSubmit={handleSubmit} />
      <SearchFullPage control={control} />
    </div>
  )
}

export default SearchPage
