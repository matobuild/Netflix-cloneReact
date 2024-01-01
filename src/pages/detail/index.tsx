import { useLocation, useParams } from "react-router-dom"

const DetailPage = () => {
  const { name } = useParams()
  const location = useLocation()
  const id = location.state.id

  return (
    <>
      <div>{id}</div>
      <div>DetailPage `{name}`</div>
    </>
  )
}

// take in the id and check if its from movie or tv

export default DetailPage
