
import React from 'react'
import { currFormatter } from "../utils";




const Cards = ({title,amount,maxAmount}) => {


    const progressBarChanger = (amount,maxAmount)=>{

        const ratio = amount/maxAmount;
        if (ratio < 0.5)
        {
        return `bg-lime-500`;
        } else  if (ratio < 0.75)
         {
            return 'bg-amber-500';
        } else{
            return 'bg-red-500	'
        }
       
        
    }



  return (
    <div className='flex justify-center items-center '>
      
      
<div className="w-[40rem]  p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 my-[1rem]">

    <div className='flex flex-row justify-between'>
        <div className='text-2xl font-semibold'>{title}</div>
        <div  > { currFormatter.format(amount)} / {currFormatter.format(maxAmount)}</div>
    </div>


    <div className="relative pt-1">
  <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded bg-slate-200`}>
    <div style={{ width: `${(amount/maxAmount)*100}%` }}  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${progressBarChanger(amount,maxAmount)}`}></div>
  </div>
    </div>


    <div className='flex justify-end'>
    <div className=' flex flex-row items-center space-x-[1rem]  '>
        <button className='bg-[#c0392b] text-slate-100 font-semibold rounded px-[0.5rem] py-[0.3rem]'>Add Expense</button>
        <button className='bg-gray-900 text-slate-100 font-semibold rounded px-[0.5rem] py-[0.3rem]'>View Expenses</button>
    </div>
    </div>
</div>


 
    </div>
  )
}

export default Cards