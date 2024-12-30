import React, { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { AuthContext } from "./context/AuthProvider."

function App() {
const [user, setUser] = useState(null)
const [loggedInUserData, setLoggednUserData] = useState(null)
const authData = useContext(AuthContext)

  // useEffect(() => {
  //   if(authData) {
  //   const loggedInUser = localStorage.getItem("loggedInUser")
  //   if(loggedInUser){
  //     setUser(loggedInUser.role)
  //   }
  // }
  // }, [authData])

   useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    
    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggednUserData(userData.data)
    }
   },[])


const handleLogin = (email, password) => {
  if (email == "admin@me.com" && password == "123") {
   setUser("admin")
   localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
 
  } else if(authData ) {
    const employee = authData.employees.find((e) => email == e.email && e.password == password)
   if(employee){
    setUser('employee')
    setLoggednUserData(employee)
    localStorage.setItem("loggedInUser", JSON.stringif({role:"employees",data:employee}))
   }


  } 
else{
    alert("Invalid Credentials")
  }
}

  

 
  return (
    <>
     {!user ? <Login handleLogin={handleLogin}/> : ""}
   {user == 'admin' ? <AdminDashboard/> : (user == "employee" ? <EmployeeDashboard data={loggedInUserData}/> : null)}
    </>
  )
}

export default App
