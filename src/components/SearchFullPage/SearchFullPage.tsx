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
  console.log("SEACHKEY", searchKey)

  async function getSearchList(input: string) {
    const data = await SearchService.getSearchPageList(input)
    if (data && data.data) {
      // filter only the media type that is movie or tv
      const filteredData = data.data.results.filter((item) => {
        return (
          (item.media_type == "movie" || item.media_type == "tv") &&
          item.poster_path != null
        )
      })
      console.log("FILTER DATA", filteredData)

      setSearchList(filteredData)
    }
  }
  useEffect(() => {
    if (searchKey == undefined) {
      return
    }
    getSearchList(searchKey)
  }, [searchKey])

  return (
    <div className="flex flex-col w-full pb-9 justify-start ">
      {searchKey !== undefined && searchKey !== "" && (
        <div className="text-3xl pt-4 pl-4">{'"' + searchKey + '"'}</div>
      )}

      {searchKey !== undefined && searchKey !== "" ? (
        <div className="grid grid-cols-8  gap-y-4 pt-4 pb-9 pl-4 ">
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
      ) : (
        <div className=" pt-4 pl-4 h-screen">
          Discover your next movie or TV show right here! 🎬✨ Simply search and
          let the entertainment journey begin. your choice awaits! 🍿🔍
          #SearchAndEnjoy
        </div>
      )}
    </div>
  )
}

export default SearchFullPage
