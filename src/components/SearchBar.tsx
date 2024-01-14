import { useForm } from "react-hook-form"

const SearchBar = () => {
  const { register, handleSubmit } = useForm()

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log("Search query:", data.query)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Search Input */}
      <label>
        Search:
        <input {...register("query")} />
      </label>
      Search
      {/* Submit Button */}
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
