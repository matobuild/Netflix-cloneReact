import { useForm } from "react-hook-form"
import Navbar from "../../components/Navbar"
import SearchBar from "../../components/SearchBar"
import SearchFullPage from "../../components/SearchFullPage/SearchFullPage"

const SearchPage = () => {
  const { control, register, handleSubmit } = useForm()

  return (
    <div className=" bg-black text-white w-full">
      <Navbar />
      <SearchBar register={register} handleSubmit={handleSubmit} />
      <SearchFullPage control={control} />
    </div>
  )
}

export default SearchPage
