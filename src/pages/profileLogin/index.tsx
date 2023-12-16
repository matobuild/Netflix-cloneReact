import React from "react"
import { User } from "../../components/User"
import { persons } from "../../assets/constant"
import Button from "../../components/Button"

const ProfilePage = () => {
  return (
    <div className="h-screen bg-black text-white flex justify-center items-center">
      <div>
        <h1 className="flex justify-center">Who's watching</h1>
        <div className="flex gap-4 ">
          {persons.map((item, index) => {
            return (
              <User
                name={item.name}
                imageSource={item.picture}
                locked={item.lock}
                key={`item.name-key-${index}`}
              />
            )
          })}
        </div>
        <div className="flex justify-center">
          <Button text={"Manage Profiles"} />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage