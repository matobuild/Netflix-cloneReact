import { useLocation, useParams } from "react-router-dom"
import DetailCard from "../../components/DetailCard/DetailCard"

const DetailPage = () => {
  const { name } = useParams()
  const location = useLocation()
  const id: number = location.state.id

  return (
    <div className="bg-black text-white">
      <div>DetailPage `{name}`</div>
      <DetailCard id={id} />
    </div>
  )
}

// take in the id and check if its from movie or tv

export default DetailPage
