import React from "react"

type UserProps = {
  name: string
  imageSource: string
  locked: boolean
}

export const User = ({ name, imageSource, locked }: UserProps) => {
  return (
    <div className="flex-col">
      <img className="h-36 w-36 rounded-md" src={imageSource} alt="userPhoto" />
      <h5 className="flex justify-center">{name}</h5>
      <div className="flex justify-center">
        {locked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
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
  )
}
