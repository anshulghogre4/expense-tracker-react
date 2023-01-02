import React from 'react'

const Cards = ({title,amount,maxAmount}) => {
  return (
    <div className='flex justify-center items-center '>
      
      
<div class="w-[40rem]  p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 my-[0.5rem]">

    <div className='flex flex-row justify-between'>

        <div className='text-2xl font-semibold'>{title}asd</div>
        <div  >{amount} adsd/{maxAmount}asdasd</div>

    </div>
        
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
       
    </a>
</div>


 
    </div>
  )
}

export default Cards