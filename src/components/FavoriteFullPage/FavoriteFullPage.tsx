// need to take in the ID
// need to know if it is movie or TV show
//save the favorite in localstorage
//display it
// need to fix the LINK button on the detail page make sure it is able to disapeer

import { useEffect, useState } from "react"
import { Favorite } from "../FavoriteButton"

const FavoriteFullPage = () => {
  const [favoriteList, setFavoriteList] = useState<Favorite[]>([])

  useEffect(() => {
    const favoriteMovieList = localStorage.getItem("favorite")
    if (favoriteMovieList) {
      favoriteList.forEach((item) => {
        item.id
        item.detailTypeShown
      })
      // Promise.all()
    }
  }, [])

  return
  ;<>
    <div>FavoriteFullPage</div>
  </>
}

export default FavoriteFullPage
