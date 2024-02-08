import { useEffect, useState } from "react"
import { ListServices } from "../../services/movieList"

import { ListType } from "../../utils/constant"
import { MovieDetail } from "../../interface/movieList"
import { Link } from "react-router-dom"

import ReactPaginate from "react-paginate"
import "./MovieCardFullPage.css"

type MovieCardProps = {
  list: ListType
  name: string
}

const MovieCardFullPage = ({ list, name }: MovieCardProps) => {
  const [mvList, setMvList] = useState<MovieDetail[]>([])
  const [totalPage, setTotalPage] = useState(0)

  async function getMovieList(list: ListType, page: number) {
    const data = await ListServices.getListForTHatPage(list, page)
    const data1 = await ListServices.getListForTHatPage(list, page + 1)
    if (data && data.data && data1 && data1.data) {
      const twoPageData = [...data.data.results, ...data1.data.results]
      setMvList(twoPageData)
      setTotalPage(data.data.total_pages)
    } else {
      console.error
    }
  }
  useEffect(() => {
    getMovieList(list, 1)
  }, [])
  console.log("mvlist", mvList)
  console.log("total page", totalPage)

  return (
    <div className="flex w-full flex-col justify-center ">
      <div className="pl-4 pt-4 text-xl sm:text-3xl">{name}</div>
      <div className="grid grid-cols-4 gap-1 pb-9 pl-4 pr-4 pt-4 sm:grid-cols-8 sm:gap-2">
        {mvList.map((res: MovieDetail) => (
          <div key={`${list} ---${name} ${res.id}`}>
            {/* {console.log("name", name)} */}
            <Link
              to={`/detail/${res.title} `}
              state={{ id: res.id, mediaType: res.media_type, fromPage: name }}
            >
              <img
                className="w-full rounded-lg border-2 border-transparent hover:border-white"
                src={`https://image.tmdb.org/t/p/w185${res.poster_path}`}
                alt="movie_image"
              />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center pb-9">
        <ReactPaginate
          breakLabel={"..."}
          nextLabel={"Next"}
          onPageChange={async (event) => {
            console.log("page", event.selected)
            getMovieList(list, event.selected + 1)
          }}
          pageRangeDisplayed={3}
          pageCount={99}
          // pageCount={totalPage}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          containerClassName={"pagination"}
          pageLinkClassName={"page-num"}
          previousLinkClassName={"page-num"}
          nextLinkClassName={"page-num"}
          activeClassName={"active"}
        />
      </div>
    </div>
  )
}

export default MovieCardFullPage
