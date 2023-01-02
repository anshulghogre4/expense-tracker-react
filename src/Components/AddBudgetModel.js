import React from 'react'
import {RiCloseLine} from "react-icons/ri"

const AddBudgetModel = ({show, onClose}) => {
    if (!show) {
        return null;
    }

    const handleClose =(e)=>{
        if(e.target.id === "closeAddModal")
         {onClose();}
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    }


  return (
    <div className='fixed inset-0 bg-black/[0.4] flex justify-center items-center' id="closeAddModal" onClick={handleClose}>
            <div className="w-[40rem] flex flex-col">
                <button className='scale-150 text-white place-self-end mb-[0.5rem]' onClick={()=>onClose()} ><RiCloseLine/></button>
            <div className="bg-white p-3 rounded ">
                    
<form onSubmit={handleSubmit} className="flex flex-col" >
  <div class="mb-6">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Budget Name</label>
    <input type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter budget name" required/>
  </div>
  <div class="mb-6">
    <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Maximum Spending Budget</label>
    <input type="number" id="number" step={0.01} min={0} placeholder ="Enter max amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  
  <button type="submit" class=" bg-[#bdc3c7] text-gray-900 font-semibold hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300  rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 place-self-end ">Add budget</button>
</form>

            </div>
            </div>
        
        </div>
  )
}

export default AddBudgetModel