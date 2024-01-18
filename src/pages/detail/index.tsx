import { useLocation, useParams } from "react-router-dom"
import DetailCard from "../../components/DetailCard/DetailCard"
import Navbar from "../../components/Navbar"

const DetailPage = () => {
  const { name } = useParams()
  const location = useLocation()
  const id: number = location.state.id
  const mediaType = location.state.mediaType
  const fromPage = location.state.fromPage

  return (
    <div className="bg-black text-white w-full">
      <Navbar />
      <div>DetailPage `{name}`</div>
      <div>`{mediaType}`</div>
      <DetailCard id={id} mediaType={mediaType} fromPage={fromPage} />
    </div>
  )
}

export default DetailPage
