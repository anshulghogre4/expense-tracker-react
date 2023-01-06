
import React from 'react'
import { currFormatter } from "../utils";
import { toast } from 'react-hot-toast';




const Cards = ({title,amount,maxAmount,onAddExpenseClick,onViewExpenseClick }) => {

  //chnaging color progress bar logic and passing the return values to the classname
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

      // if amount is greater than the max amount decided for the budget, card color will be changed  to the red
      const overSpendWarningColor = ()=>{
        if (amount>=maxAmount) {
        
          return `bg-red-100`;

        } else {
          return `bg-white`;  
        }
      }
      


  return (
    <div className='flex justify-center items-center '>
      
      {/* Whole card length and changing color of whole card on over expend over a budget */}
    <div className={` w-[21.5rem] md:w-[40rem]  p-6 ${overSpendWarningColor()} border border-gray-200 rounded-lg shadow-md  my-[1rem]`}>
     
    <div className='flex flex-row justify-between'>
        {/* Cause of Expense or budget name */}
        <div className=' text-xl md:text-2xl font-semibold'>{title}</div>
         {/* importing currency formatter and utilizing here to display amount in INR */}
        <div> <span className='md:text-xl'>{ currFormatter.format(amount)} / {currFormatter.format(maxAmount)}</span></div>
    </div>

    {/* progress bar with chnanging color at 50%,75%*/}
    <div className="relative pt-1">
  <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded bg-slate-200`}>
    <div style={{ width: `${(amount/maxAmount)*100}%` }}  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${progressBarChanger(amount,maxAmount)}`}></div>
  </div>
    </div>

      {/* Buttons for Add Expense & View Expense of a perticular budget card */}
    <div className='flex justify-end'>
    <div className=' flex flex-row items-center space-x-[1rem]  '>
        {/*  props passed for adding expense for the respective budgetID  */}
        <button onClick={onAddExpenseClick} className='bg-[#c0392b] text-slate-100 md:font-semibold font-bold text-[0.7rem] md:text-[1rem] rounded px-[0.5rem] py-[0.3rem]'>Add Expense</button>
        {/*  props passed for to view expenses for the respective budgetID  */}
        <button onClick={onViewExpenseClick} className='bg-gray-900 text-slate-100 md:font-semibold font-bold text-[0.7rem] md:text-[1rem] rounded px-[0.5rem] py-[0.3rem]'>View/Delete Expenses</button>
    </div>
    </div>
</div>


 
    </div>
  )
}

export default Cards