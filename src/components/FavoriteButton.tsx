import { useState } from "react"

const FavoriteButton = () => {
  const [fillColor, setFillColor] = useState("none")

  const handleClick = () => {
    // Change the fill color when the button is clicked
    setFillColor((prevColor) => (prevColor === "none" ? "red" : "none"))
  }
  return (
    <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
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
