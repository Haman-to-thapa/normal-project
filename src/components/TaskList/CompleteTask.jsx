import React from 'react'

const CompleteTask = ({data}) => {
  return (
    
    <div className="bg-yellow-400 w-[450px] p-5 h-full rounded-2xl">
    <div className="flex justify-between text-sm py-1 px-3 ">
    <h3 className="font-bold bg-yellow-600">{data.category}</h3>
    <h4>{data.taskDate}</h4>
    </div >
    <h2 className="text-2xl mt-4 font-semibold">
      {data.taskTitle}
    </h2>
    <p className="mt-2 text-sm">
      {data.taskDescription}
    </p>
    <div className=' mt-2'>
      <button className='w-full'>Completed</button>

    </div>
      </div>
  )
}

export default CompleteTask