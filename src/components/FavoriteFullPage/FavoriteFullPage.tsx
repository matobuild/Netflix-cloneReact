import { useEffect, useState } from "react"
import { Favorite } from "../FavoriteButton"
import { MovieDetailServices } from "../../services/movieDetails"
import { TvDetailServices } from "../../services/tvDetails"
import { Link } from "react-router-dom"

type FavoriteFullPageProps = {
  name: string
}

interface MovieDetail {
  id: number
  mediaType: string
  posterPath: string
  title: string
}

const FavoriteFullPage = ({ name }: FavoriteFullPageProps) => {
  const [favoriteList, SetFavoriteList] = useState<MovieDetail[]>([])

  function getFavoriteList() {
    const favoriteMovieList = localStorage.getItem("favorite")

    if (favoriteMovieList) {
      const parsedData = JSON.parse(favoriteMovieList) as Favorite[]
      console.log(parsedData)

      parsedData.forEach((item) => {
        async function getTheMovie() {
          const movieData = await MovieDetailServices.getMovieDetail(item.id)
          console.log("Movie data details", movieData.data)

          if (!movieData.data) {
            return null
          }
          return {
            id: movieData.data.id,
            mediaType: "movie",
            posterPath: movieData.data.poster_path,
            title: movieData.data.title,
          }
        }

        async function getTheTv() {
          const tvData = await TvDetailServices.getTvDetail(item.id)
          console.log("TV data details", tvData.data)

          if (!tvData.data) {
            return null
          }
          return {
            id: tvData.data.id,
            mediaType: "tv",
            posterPath: tvData.data.poster_path,
            title: tvData.data.name,
          }
        }

        if (item.detailTypeShown === "movie") {
          getTheMovie().then((data) => {
            if (data) {
              SetFavoriteList((prev) => [...prev, data])
            }
          })
        } else {
          getTheTv().then((data) => {
            if (data) {
              SetFavoriteList((prev) => [...prev, data])
            }
          })
        }
      })
    }
  }

  useEffect(() => {
    getFavoriteList()
  }, [])

  console.log("favDATA", favoriteList)

  return (
    <div className="flex flex-col w-full h-screen justify-start">
      <div className="text-3xl pt-4 pl-4">{name}</div>
      <div className="grid grid-cols-8  gap-y-4 pt-4 pb-9 pl-4">
        {favoriteList.map((favorite) => (
          <div key={`---${name} ${favorite.id}`}>
            <Link
              to={`/detail/${favorite.title} `}
              state={{
                id: favorite.id,
                mediaType: favorite.mediaType,
                fromPage: name,
              }}
            >
              <img
                className="rounded-lg border-2 border-transparent hover:border-white"
                src={`https://image.tmdb.org/t/p/w185${favorite.posterPath}`}
                alt="movie_image"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoriteFullPage
