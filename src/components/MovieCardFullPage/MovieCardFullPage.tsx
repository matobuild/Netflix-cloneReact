import { useEffect, useState } from "react"
import { ListServices } from "../../services/movieList"
import { useMovieListStore } from "../../store/movieList"
import { ListType } from "../../utils/constant"
import { MovieDetail } from "../../interface/movieList"
import { Link } from "react-router-dom"
import Pagination from "../Pagination"
import { useMoviePageListStore } from "../../store/moviePageList"
import ReactPaginate from "react-paginate"
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"
import { IconContext } from "react-icons"
import "./MovieCardFullPage.css"

type MovieCardProps = {
  list: ListType
  name: string
}

const MovieCardFullPage = ({ list, name }: MovieCardProps) => {
  const { movie, setMovieList } = useMovieListStore()
  const { movie2, setMovieList2 } = useMoviePageListStore()
  const [mvList, setMvList] = useState([])
  const [totalPage, setTotalPage] = useState(0)

  async function getFirstMovieList() {
    const data2 = await ListServices.getListForTHatPage(list, 1)
    setMvList(data2.data.results)
    setTotalPage(data2.data.total_pages)
  }

  useEffect(() => {
    getFirstMovieList()
  }, [])

  console.log("movieCard2", list, movie2)

  return (
    <div className="flex flex-col w-full justify-center ">
      <div className="text-3xl pt-4 pl-4">{name}</div>
      <div className="grid grid-cols-8  gap-y-4 pt-4 pb-9 pl-4">
        {mvList.map((res: MovieDetail) => (
          <div key={`${list} movie ${res.title}`}>
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
        <Pagination />
      </div>
      <div className="App">
        <ReactPaginate
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          onPageChange={async (event) => {
            console.log("page", event.selected)
            const data2 = await ListServices.getListForTHatPage(
              list,
              event.selected + 1
            )
            setMvList(data2.data.results)
          }}
          breakLabel="..."
          pageCount={20}
          previousLabel={
            <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
              <AiFillLeftCircle />
            </IconContext.Provider>
          }
          nextLabel={
            <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
              <AiFillRightCircle />
            </IconContext.Provider>
          }
        />
      </div>
    </div>
  )
}

export default MovieCardFullPage
