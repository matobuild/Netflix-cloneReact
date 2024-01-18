import { useEffect, useState } from "react"
import { detailType } from "./DetailCard/DetailCard"

type FavoriteButtonProps = {
  id: number
  detailTypeShown: detailType
}

export type Favorite = {
  id: number
  detailTypeShown: detailType
}

const FavoriteButton = ({ id, detailTypeShown }: FavoriteButtonProps) => {
  const [fillColor, setFillColor] = useState("none")

  const handleClick = () => {
    setFillColor((prevColor) => {
      if (prevColor === "none") {
        const favoriteListString = localStorage.getItem("favorite")
        if (favoriteListString) {
          const favoriteList = JSON.parse(favoriteListString) as Favorite[]
          favoriteList.push({ id, detailTypeShown })
          localStorage.setItem("favorite", JSON.stringify(favoriteList))
        } else {
          localStorage.setItem(
            "favorite",
            JSON.stringify([{ id, detailTypeShown }]),
          )
        }
      } else {
        const favoriteListString = localStorage.getItem("favorite")

        if (favoriteListString) {
          const favoriteList = JSON.parse(favoriteListString) as Favorite[]
          const newFavoriteList = favoriteList.filter((item) => item.id !== id)
          localStorage.setItem("favorite", JSON.stringify(newFavoriteList))
        }
      }

      return prevColor === "none" ? "red" : "none"
    })

    console.log("handleclick")
  }

  useEffect(() => {
    const favoriteListString = localStorage.getItem("favorite")
    if (!favoriteListString) {
      return
    }
    const favoriteList = JSON.parse(favoriteListString) as Favorite[]
    const favorite = favoriteList.find((item) => item.id === id)
    if (favorite) {
      setFillColor("red")
    }
  }, [])

  return (
    <button className="... transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill={fillColor}
        viewBox="0 0 24 24"
        stroke="red"
        onClick={handleClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  )
}

export default FavoriteButton
