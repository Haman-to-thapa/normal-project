import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.";


const AllTask = () => {
  const authData = useContext(AuthContext)
  

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
       <div className="bg-red-400 py2 px-4 mb-2 flex justify-between rounded">
       <h2 className="w-1/5 bg-gray-700">Employee Name</h2>
       <h3 className="w-1/5 bg-red-499">New Task</h3>
       <h5 className="w-1/5 bg-red-500">Active Task</h5>
       <h5 className="w-1/5 bg-red-400">Completed</h5>
       <h5 className="w-1/5 bg-red-600">Failed</h5>
       </div>
       <div className="h-[80%]">
       {authData.employees.map((elem, idx) => {
        return <div className="bg-green-600 py2 px-4 mb-2 flex justify-between rounded" key={idx}>
       <h2 className="w-1/5 text-xl  font-medium text-black">{elem.firstName}</h2>
       <h3 className="w-1/5 text-xl font-medium text-white">{elem.taskNumbers.newTask}</h3>
       <h5 className="w-1/5 text-xl font-medium text-white">{elem.taskNumbers.active}</h5>
       <h5 className="w-1/5 text-xl font-medium text-gray-600">{elem.taskNumbers.completed}</h5>
       <h5 className="w-1/5 text-xl font-medium text-red-600">{elem.taskNumbers.failed}</h5>
        </div>
       })}
       </div>
     </div>
     
  )
}

export default AllTask;