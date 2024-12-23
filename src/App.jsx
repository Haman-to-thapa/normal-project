import React, { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { AuthContext } from "./context/AuthProvider."

function App() {
const [user, setUser] = useState(null)
const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      setUser(loggedInUser.role)
    }

  }, [authData])


const handleLogin = (email, password) => {
  if (email == "admin@me.com" && password == "123") {
   setUser("admin")
   localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
 
  } else if(authData && authData.employees.find((e) => email == e.email && e.password == password)) {
   setUser("employees")
   localStorage.setItem("loggedInUser",JSON.stringify({role:"employees"}))

  } 
else{
    alert("Invalid Credentials")
  }
}

  

 
  return (
    <>
     {!user ? <Login handleLogin={handleLogin}/> : ""}
     {user == "admin" ? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  )
}

export default App
