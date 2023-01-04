import React,{useRef} from 'react'
import {RiCloseLine} from "react-icons/ri"
import { useExpenseTracker } from '../Contexts/ExpenseTrackerContext';
import { toast } from 'react-hot-toast';


const AddBudgetModel = ({show, onClose,}) => {
    const budgetNameRef = useRef();
    const maxSpendRef = useRef();
    const {addBudget} = useExpenseTracker();

    //to turn on off modal
    if (!show) {
        return null;
    }

    //toaster notifiCATION
    const notify =()=> toast.success("Budget Added")

    //TO CLOSE
    const handleClose =(e)=>{
        if(e.target.id ==="closeAddModal")
         {onClose();}
    }
    // on submit
    const handleSubmit=(e)=>{ 
            e.preventDefault();
        //to add budget we're adding ref values that we ahave attached to the input field
        addBudget({
            budgetName: budgetNameRef.current.value,
            max: parseFloat(maxSpendRef.current.value)
        })
        //after adding close the modal
        onClose();
    }

    //custom made modal in tailwind css
  return (
    <div className='fixed inset-0 bg-black/[0.4] flex justify-center items-center' id="closeAddModal" onClose={handleClose} >
            <div className="w-[21.5rem] md:w-[40rem] flex flex-col">
                <button className='scale-150 text-white place-self-end mb-[0.5rem]' onClick={()=>onClose()} ><RiCloseLine/></button>
            <div className="bg-white p-3 rounded ">
                {/* add Budget Title */}
         <h2 className=' text-xl md:text-[1.5rem] font-bold mb-4'>New budget</h2>           
    <form  className="flex flex-col" onSubmit={handleSubmit}>
    <div className="mb-6">
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Budget Name</label>
            {/* budget Name referrence from input field */}
    <input type="text" id="text" ref={budgetNameRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter budget name" required/>
    </div>
    <div className="mb-6">
    <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 ">Maximum Spending Budget</label>
    {/* budget Max amount referrence from input field */}
    <input type="number" id="number" ref={maxSpendRef} step={0.01} min={0} placeholder ="Enter max amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
    </div>
  
    <button type="submit" onClick={notify} className=" bg-[#bdc3c7] text-gray-900 font-semibold hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300  rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center  place-self-end ">Add Budget</button>
    </form>

            </div>
            </div>
        
        </div>
  )
}

export default AddBudgetModel