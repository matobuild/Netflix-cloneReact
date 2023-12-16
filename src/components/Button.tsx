import React from "react"

const Button = ({ text }) => {
  return (
    <a
      href="#_"
      className="inline-block py-4 text-xl text-white bg-gray-800 px-7 hover:bg-gray-700 rounded-xl"
    >
      {text}
    </a>
  )
}

export default Button
