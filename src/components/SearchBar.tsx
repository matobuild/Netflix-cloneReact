import { useForm } from "react-hook-form"

const SearchBar = (props: any) => {
  const { register, handleSubmit } = props

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log("Search query:", data.search)
  }

  return (
    <div className=" pl-4 pt-4 ">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Search Input */}
          <label>
            <input
              type="search"
              className=" focus:border-primary dark:focus:border-primary rounded border border-solid  border-neutral-300 bg-transparent px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              {...register("search")}
            />
          </label>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
