import { useEffect, useState } from "react"
import { MovieDetailServices } from "../../services/movieDetails"
import { useMovieDetailStore } from "../../store/movieDetail"
import FavoriteButton from "../FavoriteButton"
import BackButton from "../BackButton"
import { TvDetailServices } from "../../services/tvDetails"
import { useTvDetailStore } from "../../store/tvDetail"
import LinkButton from "../LinkButton"
import { Genre } from "../../interface/movieDetail"

type DetailCardProps = {
  id: number
  mediaType: string
  fromPage: string
}

export enum detailType {
  movie = "movie",
  tv = "tv",
}

// const handleGetDetailData = {
//   movie: async (id: number) => {
//     const data = await MovieDetailServices.getMovieDetail(id)
//     if (!data.data) {
//       return null
//     }
//     return {
//       poster: data.data.poster_path,
//       title: data.data.title,
//       tagline: data.data.tagline,
//       genres: data.data.genres,
//       overview: data.data.overview,
//       releaseDate: data.data.release_date,
//       voteAverage: data.data.vote_average,
//       vote: data.data.vote_average,
//       homepage: data.data.homepage,
//     }
//   },
//   tv: async (id: number) => {
//     const data = await TvDetailServices.getTvDetail(id)
//     if (!data.data) {
//       return null
//     }
//     return {
//       poster: data.data.poster_path,
//       title: data.data.name,
//       tagline: data.data.tagline,
//       genres: data.data.genres,
//       overview: data.data.overview,
//       releaseDate: data.data.first_air_date,
//       voteAverage: data.data.vote_average,
//       homepage: data.data.homepage,
//     }
//   },
// }

// interface MovieDisplay {
//   poster: string
//   title: string
//   tagline: string
//   genres: Genre[]
//   overview: string
//   releaseDate: string
//   voteAverage: number
//   homepage: string
// }

const DetailCard = ({ id, mediaType, fromPage }: DetailCardProps) => {
  const { movieDetail, setMovieDetailStore } = useMovieDetailStore()
  const { tvDetail, setTvDetailStore } = useTvDetailStore()

  // const [movieDisplay, setMovieDisplay] = useState<MovieDisplay | null>(null)

  const [detailTypeShown, setDetailTypeShown] = useState<detailType>(
    detailType.movie
  )

  const getDetailData = async () => {
    let data
    console.log("MEDIA TYPE IS ", mediaType)
    console.log("NAME IS ", fromPage)

    // const data = await handleGetDetailData[mediaType as "movie" | "tv"](id)
    // setMovieDisplay(data)

    switch (fromPage) {
      case "searchPage":
        //check if it is movie or not(for new &popular)
        if (mediaType == "movie") {
          console.log("it is a movie")
          data = await MovieDetailServices.getMovieDetail(id)
          console.log("Movie data details", data.data)
          if (data && data.data) {
            setMovieDetailStore({
              data: data.data,
              loading: false,
              error: null,
            })
            setDetailTypeShown(detailType.movie)
          }
        } else if (mediaType == "tv") {
          data = await TvDetailServices.getTvDetail(id)
          console.log("TV data details", data.data)
          if (data && data.data) {
            setTvDetailStore({
              data: data.data,
              loading: false,
              error: null,
            })
          }
          setDetailTypeShown(detailType.tv)
        }
        break

      case "My Favorites":
        //check if it is movie or not(for new &popular)
        if (mediaType == "movie") {
          console.log("it is a movie")
          data = await MovieDetailServices.getMovieDetail(id)
          console.log("Movie data details", data.data)
          if (data && data.data) {
            setMovieDetailStore({
              data: data.data,
              loading: false,
              error: null,
            })
            setDetailTypeShown(detailType.movie)
          }
        } else if (mediaType == "tv") {
          data = await TvDetailServices.getTvDetail(id)
          console.log("TV data details", data.data)
          if (data && data.data) {
            setTvDetailStore({
              data: data.data,
              loading: false,
              error: null,
            })
          }
          setDetailTypeShown(detailType.tv)
        }
        break

      case "New & Popular":
        //check if it is movie or not(for new &popular)
        if (mediaType == "movie") {
          console.log("it is a movie")
          data = await MovieDetailServices.getMovieDetail(id)
          console.log("Movie data details", data.data)
          if (data && data.data) {
            setMovieDetailStore({
              data: data.data,
              loading: false,
              error: null,
            })
            setDetailTypeShown(detailType.movie)
          }
        } else if (mediaType == "tv") {
          data = await TvDetailServices.getTvDetail(id)
          console.log("TV data details", data.data)
          if (data && data.data) {
            setTvDetailStore({
              data: data.data,
              loading: false,
              error: null,
            })
          }
          setDetailTypeShown(detailType.tv)
        }
        break

      case "Movies":
        data = await MovieDetailServices.getMovieDetail(id)
        console.log("Movie details", data.data)
        if (data && data.data) {
          setMovieDetailStore({
            data: data.data,
            loading: false,
            error: null,
          })
        }
        setDetailTypeShown(detailType.movie)
        break
      case "TV Shows":
        data = await TvDetailServices.getTvDetail(id)
        console.log("TV data details", data.data)
        if (data && data.data) {
          setTvDetailStore({
            data: data.data,
            loading: false,
            error: null,
          })
        }
        setDetailTypeShown(detailType.tv)
        break
    }
  }

  useEffect(() => {
    getDetailData()
  }, [])

  console.log("detail of the selected image", movieDetail)
  console.log("detailTYPE SHOWN", detailTypeShown)
  return (
    <>
      <section
        className="h-screen bg-black bg-cover text-white flex justify-center items-center "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0 , 0, 0, 0.1), rgba(0, 0, 0, 1)),
          
          url(${
            "https://image.tmdb.org/t/p/original" +
            `${
              detailTypeShown == detailType.movie
                ? movieDetail.data.backdrop_path
                : tvDetail.data.backdrop_path
            }`
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
              src={`https://image.tmdb.org/t/p/w500${
                detailTypeShown == detailType.movie
                  ? movieDetail.data.poster_path
                  : tvDetail.data.poster_path
              }`}
              alt="movie-poster"
            />
          </div>

          <div className="flex flex-col h-2/4 justify-between gap-y-4">
            <div className="text-7xl">
              {detailTypeShown == detailType.movie
                ? movieDetail.data.original_title
                : tvDetail.data.name}
            </div>
            <div className="text-2xl italic">
              {detailTypeShown == detailType.movie
                ? movieDetail.data.tagline
                  ? `"${movieDetail.data.tagline}"`
                  : ""
                : tvDetail.data.tagline
                ? `"${tvDetail.data.tagline}"`
                : ""}
            </div>
            <div className="flex gap-4 text-xs">
              {detailTypeShown == detailType.movie
                ? movieDetail.data.genres.map((item) => (
                    <span
                      className=" border-white rounded-lg border px-4"
                      key={item.name}
                    >
                      {item.name}
                    </span>
                  ))
                : tvDetail.data.genres.map((item) => (
                    <span
                      className=" border-white rounded-lg border px-4"
                      key={item.name}
                    >
                      {item.name}
                    </span>
                  ))}
            </div>
            <div>
              {detailTypeShown == detailType.movie
                ? movieDetail.data.overview
                : tvDetail.data.overview}
            </div>
            <div className="flex gap-4">
              <div>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                  Release{" "}
                  {detailTypeShown == detailType.movie
                    ? movieDetail.data.release_date
                    : tvDetail.data.first_air_date}
                </span>
              </div>
              <div>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                  Vote average{" "}
                  {detailTypeShown == detailType.movie
                    ? movieDetail.data.vote_average.toFixed(1)
                    : tvDetail.data.vote_average.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              {detailTypeShown == detailType.movie ? (
                <LinkButton linkUrl={movieDetail.data.homepage} />
              ) : (
                <LinkButton linkUrl={tvDetail.data.homepage} />
              )}

              <FavoriteButton id={id} detailTypeShown={detailTypeShown} />
            </div>
          </div>
        </div>
      </section>

      <div>{id}</div>
    </>
  )
}

export default DetailCard
