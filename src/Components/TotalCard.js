
import React from 'react'
import { currFormatter } from "../utils";




const TotalCard = ({title,amount}) => {

  return (
    <div className='flex justify-center items-center '>
      
      
<div className={`w-[21.5rem] md:w-[40rem]  p-6 bg-gray-200 border border-gray-200 rounded-lg shadow-md  my-[1rem]`}>

    <div className='flex flex-row justify-between items-center'>
        <div className='text-2xl font-semibold'>{title}</div>
        <div  > <span className='md:text-xl text-lg font-bold'> { currFormatter.format(amount)} </span> </div>
    </div>

</div>


 
    </div>
  )
}

export default TotalCard