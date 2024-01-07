import ReactPaginate from "react-paginate"
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"
import { IconContext } from "react-icons"
import { useEffect, useState } from "react"
import "./styles.css"

const data = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]

const ReactPaginationCustom = () => {
  const [page, setPage] = useState(1)
  const [filterData, setFilterData] = useState<string[]>()
  const n = 3

  useEffect(() => {
    setFilterData(
      data.filter((item, index) => {
        return index >= page * n && index < (page + 1) * n
      })
    )
  }, [page])

  return (
    <div className="App">
      <ul>
        {filterData && filterData.map((item, index) => <li>Item #{item}</li>)}
      </ul>
      <ReactPaginate
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        onPageChange={(event) => setPage(event.selected)}
        breakLabel="..."
        pageCount={Math.ceil(data.length / n)}
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
  )
}

export default ReactPaginationCustom
