import React,{useRef} from 'react'
import {RiCloseLine} from "react-icons/ri"
import { useExpenseTracker } from '../Contexts/ExpenseTrackerContext';


const AddExpenseModel = ({show, onClose,defaultBudgetId}) => {
    const descriptionRef = useRef();
    const amountRef = useRef();
    const budgetIdRef = useRef();

    const {addExpense,budgets} = useExpenseTracker();

    if (!show ) {
        return null;
    }

    const handleClose =(e)=>{
        if(e.target.id ==="closeAddModal")
         {onClose()}
    }

    const handleSubmit=(e)=>{ 
            e.preventDefault();
       
            addExpense({
                description: descriptionRef.current.value,
                amount: parseFloat(amountRef.current.value),
                budgetId: budgetIdRef.current.value,

        })
        console.log(descriptionRef.current.value)
        console.log(parseFloat(amountRef.current.value))
        onClose();
    }


  return (
    <div className='fixed inset-0 bg-black/[0.4] flex justify-center items-center' id="closeAddModal" onClose={handleClose} >
            <div className=" w-[21.5rem] md:w-[40rem] flex flex-col">
                <button className='scale-150 text-white place-self-end mb-[0.5rem]' onClick={()=>onClose()} ><RiCloseLine/></button>
            <div className="bg-white p-3 rounded ">
            <h2 className=' text-xl md:text-[1.5rem] font-semibold mb-4'>New Expense</h2>
    <form  className="flex flex-col" onSubmit={handleSubmit} >
    <div className="mb-6">
    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <input type="text" id="description" ref={descriptionRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter description" required/>
    </div>
    <div className="mb-6">
    <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
    <input type="number" id="amount" ref={amountRef} step={0.01} min={0} placeholder ="Enter amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div>

    <div className="mb-6">
        <label htmlFor="budgetId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Budget</label>
        <select name="budgetId" id="budgetId" ref={budgetIdRef} defaultValue={defaultBudgetId} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            
            {budgets.map(budget=>(
                <option key={budget.id} value={budget.id}>{budget.budgetName?.budgetName}</option>
            ))}
        </select>

    </div>

  
    <button type="submit"  className=" bg-[#bdc3c7] text-gray-900 font-semibold hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300  rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 place-self-end ">Add Expense</button>
    </form>

            </div>
            </div>
        
        </div>
  )
}

export default AddExpenseModel