import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorages'


export const AuthContext = createContext()
  

const AuthProvider = ({children}) => {

  const [useData , setUserData] = useState(null)

  useEffect(() => {
    const {employees, admin} = getLocalStorage()
      setUserData({employees, admin})
  },[])
  
  return (
    <div>
      <AuthContext.Provider value={useData}>
    {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
