import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorages'


export const AuthContext = createContext()


const data = getLocalStorage()
console.log(data)

const AuthProvider = ({children}) => {
  return (
    <div>
      <AuthContext.Provider value={"Sarthak"}>
    {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
