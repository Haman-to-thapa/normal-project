import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/Alltask";


const AdminDashboard = () => {
  
  return (
    <div className="h-screen p-7 w-full">
      <Header/>
      <CreateTask/>
      <AllTask/>
   
    </div>
  )
}

export default AdminDashboard;