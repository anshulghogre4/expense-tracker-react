
import React from 'react'
import { currFormatter } from "../utils";




const Cards = ({title,amount,maxAmount,onAddExpenseClick,onViewExpenseClick }) => {


    const progressBarChanger = (amount,maxAmount)=>{

        const ratio = amount/maxAmount;
        if (ratio <= 0.5 && ratio > 0.0)
        {
        return `bg-lime-500`;
        } else  if (ratio <= 0.75 && ratio > 0.50)
         {
            return 'bg-amber-500';
        } else if(ratio > 0.75){
            return 'bg-red-500'
        }
       
    }
      const overSpendWarningColor = ()=>{
        if (amount>=maxAmount) {
           return `bg-red-100`;
        } else {
          return `bg-white`;  
        }
      }
      


  return (
    <div className='flex justify-center items-center '>
      
      
<div className={` w-[21.5rem] md:w-[40rem]  p-6 ${overSpendWarningColor()} border border-gray-200 rounded-lg shadow-md  my-[1rem]`}>

    <div className='flex flex-row justify-between'>
        <div className=' text-xl md:text-2xl font-semibold'>{title}</div>
        <div> <span className='md:text-xl'>{ currFormatter.format(amount)} / {currFormatter.format(maxAmount)}</span></div>
    </div>


    <div className="relative pt-1">
  <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded bg-slate-200`}>
    <div style={{ width: `${(amount/maxAmount)*100}%` }}  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${progressBarChanger(amount,maxAmount)}`}></div>
  </div>
    </div>


    <div className='flex justify-end'>
    <div className=' flex flex-row items-center space-x-[1rem]  '>
        <button onClick={onAddExpenseClick} className='bg-[#c0392b] text-slate-100 md:font-semibold font-bold text-[0.7rem] md:text-[1rem] rounded px-[0.5rem] py-[0.3rem]'>Add Expense</button>
        <button onClick={onViewExpenseClick} className='bg-gray-900 text-slate-100 md:font-semibold font-bold text-[0.7rem] md:text-[1rem] rounded px-[0.5rem] py-[0.3rem]'>View Expenses</button>
    </div>
    </div>
</div>


 
    </div>
  )
}

export default Cards