import React from "react";


const TaskListNumbers = () => {

  return (
    <div className="flex screen justify-between gap-5 mt-10 ">

      <div className="py-4 px-9 w-[45%] bg-blue-400 rounded-xl">
    <h2 className="text-3xl font-semibold">0</h2>
    <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="py-4 px-9 w-[45%] bg-green-400 rounded-xl">
    <h2 className="text-3xl font-semibold">0</h2>
    <h3 className="text-xl font-medium">New Task</h3>
      </div>
      
      <div className="py-4 px-9 w-[45%] bg-yellow-400 rounded-xl">
    <h2 className="text-3xl font-semibold">0</h2>
    <h3 className="text-xl font-medium">New Task</h3>
      </div>
      
      <div className="py-4 px-9 w-[45%] bg-gray-400 rounded-xl">
    <h2 className="text-3xl font-semibold">0</h2>
    <h3 className="text-xl font-medium">New Task</h3>
      </div>
      

    </div>
  )
}

export default TaskListNumbers;