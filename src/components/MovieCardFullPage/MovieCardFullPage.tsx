import { useEffect, useState } from "react"
import { ListServices } from "../../services/movieList"

import { ListType } from "../../utils/constant"
import { MovieDetail } from "../../interface/movieList"
import { Link } from "react-router-dom"

import ReactPaginate from "react-paginate"
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"
import { IconContext } from "react-icons"
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

  return (
    <div className="flex flex-col w-full justify-center ">
      <div className="text-3xl pt-4 pl-4">{name}</div>
      <div className="grid grid-cols-8  gap-y-4 pt-4 pb-9 pl-4">
        {mvList.map((res: MovieDetail) => (
          <div key={`${list} ---${name} ${res.id}`}>
            <Link to={`/detail/${res.title} `} state={{ id: res.id }}>
              <img
                className="rounded-lg border-2 border-transparent hover:border-white"
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
