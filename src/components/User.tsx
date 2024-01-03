import React from "react"

type UserProps = {
  name: string
  imageSource: string
  locked: boolean
}

export const User = ({ name, imageSource, locked }: UserProps) => {
  return (
    <div className="flex flex-col items-center group gap-2">
      <img
        className="h-36 w-36 rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300 object-"
        src={imageSource}
        alt="userPhoto"
      />
      <div className="flex gap-2 text-gray-500 group-hover:text-gray-300">
        <p className="">{name}</p>
        <div className="flex justify-center ">
          {locked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  )
}
