import { useEffect } from "react"
import { DetailServices } from "../../services/movieDetails"
import { useDetailStore } from "../../store/movieDetail"
import FavoriteButton from "../FavoriteButton"
import BackButton from "../BackButton"

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
        className="h-screen bg-black bg-cover text-white flex justify-center items-center "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0 , 0, 0, 0.1), rgba(0, 0, 0, 1)),
          
          url(${
            "https://image.tmdb.org/t/p/original" + detail.data.backdrop_path
          })`,
        }}
      >
        <div className="flex items-center justify-center gap-12 h-screen w-2/4">
          <div className="flex flex-col gap-y-2">
            <div>
              <BackButton />
            </div>
            <img
              className="rounded-lg h-2/4"
              src={`https://image.tmdb.org/t/p/w500${detail.data.poster_path}`}
              alt="movie-poster"
            />
          </div>

          <div className="flex flex-col h-2/4 justify-between gap-y-4">
            <div className="text-7xl">{detail.data.original_title}</div>
            <div className="text-2xl italic">
              {detail.data.tagline ? `"${detail.data.tagline}"` : ""}
            </div>
            <div className="flex gap-4 text-xs">
              {detail.data.genres.map((item) => (
                <span
                  className=" border-white rounded-lg border px-4"
                  key={item.name}
                >
                  {item.name}
                </span>
              ))}
            </div>
            <div>{detail.data.overview}</div>
            <div className="flex gap-4">
              <div>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                  Release {detail.data.release_date}
                </span>
              </div>
              <div>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                  Vote average {detail.data.vote_average.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              {detail.data.homepage ? (
                <a
                  href={detail.data.homepage}
                  target="_blank"
                  className="group relative overflow-hidden bg-blue-600 focus:ring-4 focus:ring-blue-300 inline-flex items-center px-7 py-2.5 rounded-lg text-white justify-center"
                >
                  <span className="z-40">{detail.data.homepage}</span>
                  <svg
                    className="z-40 ml-2 -mr-1 w-3 h-3 transition-all duration-300 group-hover:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000"></div>
                </a>
              ) : (
                ""
              )}
              <FavoriteButton />
            </div>
          </div>
        </div>
      </section>

      <div>{id}</div>
    </>
  )
}

export default DetailCard
