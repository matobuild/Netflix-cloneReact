import React from "react"
import { User } from "../../components/User"
import { persons } from "../../assets/constant"
import Button from "../../components/Button"
import { Link } from "react-router-dom"

const ProfilePage = () => {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      <h1 className="text-gray-200 text-5xl">Who's watching</h1>
      <div className="flex flex-row gap-5 mt-8">
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

      <button className="border-2 border-gray-600 text-gray-600 px-4 py-1 mt-20 hover:border-gray-400 hover:text-gray-400">
        Manage Profiles
      </button>
    </div>
  )
}

export default ProfilePage
