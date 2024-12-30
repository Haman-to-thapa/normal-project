import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="bg-green-400 h-full  rounded-2xl w-[450px]
    p-5 flex-shrink-0 items-center
    ">
      <div className="flex justify-between py-1 px-3 text-sm">
        <h3 className="bg-green-600 font-bold">{data.category}</h3>
        <h4>{data.taskDate}</h4>
      </div>
        <h2 className="text-2xl mt-4 font-semibold">{data.taskTitle}</h2>
        <p className="pt-2 text-sm">{data.taskDescription}</p>
        <div className='mt-4'>
          <button className='w-full'>Accept Task</button>
        </div>
      </div>
 
  )
}

export default NewTask
