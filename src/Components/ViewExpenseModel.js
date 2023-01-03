import React from 'react'
import {RiCloseLine} from "react-icons/ri"
import { useExpenseTracker } from '../Contexts/ExpenseTrackerContext';
import { currFormatter } from '../utils';


const ViewExpenseModel = ({budgetId, onClose,}) => {
  
    const {allExpensesForABudget, budgets, deleteBudget, deleteExpense} = useExpenseTracker();

    if ( !budgetId) {
        return null;
    }

    const budget = budgets.find(b=>b.id === budgetId);
    const expenses = allExpensesForABudget(budgetId);

    const handleClose =(e)=>{
        if(e.target.id ==="closeAddModal")
         {onClose();}
    }

    


  return (
    <div className='fixed inset-0 bg-black/[0.4] flex justify-center items-center' id="closeAddModal" onClose={handleClose} >
            <div className="w-[40rem] flex flex-col">
                <button className='scale-150 text-white place-self-end mb-[0.5rem]' onClick={()=>onClose()} ><RiCloseLine/></button>
            <div className="bg-white p-3 rounded ">

                <div className='flex flex-row justify-between items-center mb-4'>
             <h2 className='text-[2rem] font-medium  '>Expenses for {budget?.budgetName?.budgetName}</h2> 
            <button onClick={()=>(deleteBudget(budget),onClose())} className='bg-white border border-2 border-red-300  text-gray-900 font-semibold hover:bg-red-200  rounded py-[0.3rem] px-[1rem] ' >Delete</button>  
            </div>  

            <div className='flex flex-col space-y-3'>
                {expenses.map(expense=>(
                    <div key={expense.id} className='flex flex-row justify-between mx-[3rem] items-center space-x-4'>

                           <h4>{expense.description}</h4>
                            <div className='flex flex-row justify-center items-center space-x-4'>
                               <h3>{currFormatter.format(expense.amount)}</h3> 
                               <button onClick={()=>deleteExpense(expense)} className='bg-white border border-2 border-red-300 text-gray-500  text-gray-900 font-semibold hover:bg-red-200  rounded py-[0.3rem] px-[0.5rem]'><RiCloseLine /></button>
                            </div>
                    </div>
                ))}
            </div>


            </div>
            </div>
        
        </div>
  )
}

export default ViewExpenseModel