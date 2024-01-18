import React from "react"
import { User } from "../../components/User"
import { persons } from "../../assets/constant"
import Button from "../../components/Button"
import { Link } from "react-router-dom"

const ProfilePage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black">
      <h1 className="text-5xl text-gray-200">Who's watching</h1>
      <div className="mt-8 flex flex-row gap-5">
        {persons.map((item, index) => {
          return (
            <Link to={`/homepage`}>
              <User
                name={item.name}
                imageSource={item.picture}
                locked={item.lock}
                key={`${item.name}-key-${index}`}
              />
            </Link>
          )
        })}
      </div>

      <button className="mt-20 border-2 border-gray-600 px-4 py-1 text-gray-600 hover:border-gray-400 hover:text-gray-400">
        Manage Profiles
      </button>
    </div>
  )
}

export default ProfilePage
