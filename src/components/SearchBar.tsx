import { useForm } from "react-hook-form"

const SearchBar = (props: any) => {
  const { register, handleSubmit } = props

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log("Search query:", data.search)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Search Input */}
      <label>
        <input {...register("search")} />
      </label>

      {/* Submit Button */}
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
