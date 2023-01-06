import React from 'react'
import { toast} from 'react-hot-toast';
import {RiCloseLine} from "react-icons/ri"
import { useExpenseTracker } from '../Contexts/ExpenseTrackerContext';
import { currFormatter } from '../utils';



const ViewExpenseModel = ({budgetId, onClose,}) => {
  
    const {allExpensesForABudget, budgets, deleteBudget, deleteExpense} = useExpenseTracker();
    //  if budget is no there modal will no open for the perticular budget
    if ( !budgetId) {
        return null;
    }

    // toaster notification for expense getting deleted
    const notify =()=> toast.success("Expense Deleted")

    // Toaster notification for deleting all the budget
    const notifyDeleteBudget =()=> 
    { toast('Budget Deleted',
    {
      icon: '👏',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );

    }

    // selecting perticular budget when we click on respective or respective budget ID
    const budget = budgets.find(b=>b.id === budgetId);
    // finding all the expenses related to the specific budget Id
    const expenses = allExpensesForABudget(budgetId);
    //to close modal
    const handleClose =(e)=>{
        if(e.target.id ==="closeAddModal")
         {onClose();}
    }

    

    //custom made modal in tailwind css
  return (
    <div className='fixed inset-0 bg-black/[0.4] flex justify-center items-center' id="closeAddModal" onClose={handleClose} >
            <div className="w-[21.5rem] md:w-[40rem] flex flex-col">
                <button className='scale-150 text-white place-self-end mb-[0.5rem]' onClick={()=>onClose()} ><RiCloseLine/></button>
            <div className="bg-white p-3 rounded ">

                <div className='flex flex-row justify-between items-center mb-4 border-b  border-gray-300 pb-2'>
                    {/* mentioning the budget name respect to budget ID in the view Modal */}
             <h2 className=' text-xl md:text-[1.5rem] font-bold  '>Expenses for {budget?.budgetName?.budgetName}</h2> 
             {/* on click it'll delete the respective budget along with it's expenses and show notification fior the same */}
            <button onClick={()=>(deleteBudget(budget),onClose(),notifyDeleteBudget())} className='bg-white border border-2 border-red-300  text-gray-900 md:font-semibold font-bold text-[0.7rem] md:text-[1rem] hover:bg-red-200  rounded py-[0.3rem] px-[1rem] ' >Delete</button>  
            </div>  

            <div className='flex flex-col space-y-3'>
                {/* mapping the expeses for the respective budet with the help of function(allExpensesForABudget) we getting from the context provider value */}
                {expenses.map(expense=>(
                    <div key={expense.id} className='flex flex-row justify-between  items-center space-x-4'>

                           <h4>{expense.description}</h4>
                            <div className='flex flex-row justify-center items-center space-x-4'>
                                {/* using currecy formatter from the utils.js */}
                               <h3>{currFormatter.format(expense.amount)}</h3> 
                               {/* deleting expense and notifying the same */}
                               <button onClick={()=>(deleteExpense(expense),notify())} className='bg-white border border-2 border-red-300 text-gray-500  text-gray-900 md:font-semibold font-bold text-[0.7rem] md:text-[1rem] hover:bg-red-200  rounded py-[0.3rem] px-[0.5rem]'><RiCloseLine /></button>
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