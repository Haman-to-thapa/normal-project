import React, { useState } from "react";


const Header = () => {

  // const [username , setUsername] = useState('')

  //   if(!data){
  //     username('Admin')
  //   } else {
  //     setUsername(data.firstName)
  //   }
  const logOut = () => {
  localStorage.setItem('loggedInUser','')
  window.location.reload()
  }

  return (
<div className="flex items-end justify-between">
  <h1 className="text-2xl font-medium">Hello <br/> <span className="3xl font-semibold"> username
    </span></h1>

    <button className="bg-red-600 text-base font-medium text-white px-5 rounded-lg" onClick={logOut}>Log Out</button>
</div>
  )
}

export default Header