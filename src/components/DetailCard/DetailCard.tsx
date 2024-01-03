import { useEffect } from "react"
import { DetailServices } from "../../services/movieDetails"
import { useDetailStore } from "../../store/movieDetail"

type DetailCardProps = {
  id: number
}

const DetailCard = ({ id }: DetailCardProps) => {
  const { detail, setDetailStore } = useDetailStore()

  const getDetailData = async () => {
    const data = await DetailServices.getMovieDetail(id)
    console.log("data details", data.data)
    console.log(detail)

    if (data && data.data) {
      setDetailStore({
        data: data.data,
        loading: false,
        error: null,
      })
    }
  }

  useEffect(() => {
    getDetailData()
  }, [])

  console.log("detail of the selected image", detail)
  return (
    <>
      <section
        className="h-screen bg-black bg-cover "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0 , 0, 0, 0.1), rgba(0, 0, 0, 1)),
          
          url(${
            "https://image.tmdb.org/t/p/original" + detail.data.backdrop_path
          })`,
        }}
      ></section>

      <div>{id}</div>
      <div>"{detail.data.original_title}"</div>

      <div>{detail.data.backdrop_path}"</div>
      {/* <div>"{detail.data.belongs_to_collection.name}"</div> */}
      <div>"{detail.data.budget}"</div>
      {/* <div>"{detail.data.genres}"</div> */}
      <div>"{detail.data.homepage}"</div>
      <div>"{detail.data.original_language}"</div>
      <div>"{detail.data.overview}"</div>
      <div>"{detail.data.popularity}"</div>
      {/* <div>"{detail.data.production_companies}"</div> */}
      {/* <div>"{detail.data.production_countries}"</div> */}
      <div>"{detail.data.release_date}"</div>
      <div>"{detail.data.revenue}"</div>
      <div>"{detail.data.runtime}"</div>
      {/* <div>"{detail.data.spoken_languages}"</div> */}
      <div>"{detail.data.status}"</div>
      <div>"{detail.data.tagline}"</div>
      <div>"{detail.data.title}"</div>
      <div>"{detail.data.video}"</div>
      <div>"{detail.data.vote_average}"</div>
      <div>"{detail.data.vote_count}"</div>
    </>
  )
}

export default DetailCard
