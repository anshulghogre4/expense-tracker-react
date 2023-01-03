
import React from 'react'
import { currFormatter } from "../utils";




const TotalCard = ({title,amount}) => {

  return (
    <div className='flex justify-center items-center '>
      
      
<div className={`w-[40rem]  p-6 bg-gray-200 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 my-[1rem]`}>

    <div className='flex flex-row justify-between'>
        <div className='text-2xl font-semibold'>{title}</div>
        <div  > { currFormatter.format(amount)} </div>
    </div>

</div>


 
    </div>
  )
}

export default TotalCard