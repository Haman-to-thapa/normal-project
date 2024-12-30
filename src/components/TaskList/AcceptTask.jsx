import React from 'react'

const AcceptTask = ({data}) => {

  
  return (
   
<div className="h-full w-[450px] bg-blue-400 rounded-2xl flex-shrink-0 p-5 items-center">
     <div className="flex justify-between py-1 px-3 rounded text-sm">
      <h3 className="bg-blue-500 font-bold">{data.category}</h3>
      <h4 className="text-sm">{data.taskDate}</h4>
     </div>
     <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
     <p className="text-sm mt-2">{data.taskDescription}</p>
   
    <div className='flex justify-between mt-4'>
      <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
      <button className='bg-red-500 py-1 px-2 text-sm'>Mask as Failed</button>
    </div>
      
    </div>
  )
}

export default AcceptTask
