import React from "react"


const TaskList = () => {

  return (
    <div id="tasklist"  className="h-[55%]  mt-10 py-5 flex justify-start items-center gap-5 flex-nowrap overflow-x-auto">
      <div className="h-full w-[450px] bg-blue-400 rounded-2xl flex-shrink-0 p-5 items-center">
     <div className="flex justify-between py-1 px-3 rounded text-sm">
      <h3 className="bg-blue-500 font-bold">High</h3>
      <h4 className="text-sm">20 feb 2024</h4>
     </div>
     <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
     <p className="text-sm mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam alias sunt sit natus atque laborum.</p>
      </div>

      <div className="bg-green-400 h-full  rounded-2xl w-[450px]
      p-5 flex-shrink-0 items-center
      ">
        <div className="flex justify-between py-1 px-3 text-sm">
          <h3 className="bg-green-600 font-bold">High</h3>
          <h4>20 feb 2024</h4>
        </div>
        <div>
          <h1 className="text-2xl mt-4 font-semibold">Make a youtube video</h1>
          <h3 className="pt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat mollitia iste sapiente labore!</h3>
        </div>
      </div>

      <div className="bg-yellow-400 w-[450px] p-5 h-full rounded-2xl">
    <div className="flex justify-between text-sm py-1 px-3 ">
    <h3 className="font-bold bg-yellow-600">High</h3>
    <h4>20 feb 2024</h4>
    </div >
    <h2 className="text-2xl mt-4 font-semibold">
      Make a youtube video
    </h2>
    <p className="mt-2 text-sm">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum deleniti quam ex doloremque.
    </p>
      </div>
      
      <div className="bg-gray-400 w-[450px] p-5 h-full rounded-2xl">
    <div className="flex justify-between text-sm py-1 px-3 ">
    <h3 className="font-bold bg-gray-600">High</h3>
    <h4>20 feb 2024</h4>
    </div >
    <h2 className="text-2xl mt-4 font-semibold">
      Make a youtube video
    </h2>
    <p className="mt-2 text-sm">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum deleniti quam ex doloremque.
    </p>
      </div>


    </div>
  )
}

export default TaskList;