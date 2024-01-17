import { Link } from "react-router-dom"
import { SearchService } from "../../services/searchList"
import { Result } from "../../interface/searchList"
import { useEffect, useState } from "react"
import { useWatch } from "react-hook-form"

type SearchFullPageProps = {
  control: any
}

const SearchFullPage = ({ control }: SearchFullPageProps) => {
  const [searchList, setSearchList] = useState([])

  const searchKey = useWatch({ control, name: "search" })

  async function getSearchList(input: string) {
    const data = await SearchService.getSearchPageList(input)
    if (data && data.data) {
      setSearchList(data.data.results)
    }
  }
  useEffect(() => {
    getSearchList(searchKey)
  }, [searchKey])

  useEffect(() => {}, [])

  return (
    <div className="flex flex-col w-full h-screen justify-start">
      <div className="text-3xl pt-4 pl-4">{searchKey}</div>
      <div className="grid grid-cols-8  gap-y-4 pt-4 pb-9 pl-4">
        {searchList.map((item: Result) => {
          return (
            <div key={item.id}>
              <Link
                to={`/detail/${item.title} `}
                state={{
                  id: item.id,
                  mediaType: item.media_type,
                  fromPage: "searchPage",
                }}
              >
                <img
                  className="rounded-lg border-2 border-transparent hover:border-white"
                  src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                  alt="movie_image"
                />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SearchFullPage
