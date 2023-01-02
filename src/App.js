import React, { useState } from "react";
import "./App.css"
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import AddBudgetModel from "./Components/AddBudgetModel";




function App() {

  const [showAddBudgetModel, setShowAddBudgetModel] = useState(false)

  return (
    <div className="App">
      <Navbar/>
      <div className="flex flex-row justify-around items-center mx-[20rem]   ">
            <h1 className="text-[2rem] font-bold">Expenses</h1>
       <div className="flex flex-row justify-around items-center space-x-4 mr-8">
        <button className="bg-[#bdc3c7] text-gray-900 font-semibold rounded px-[0.5rem] py-[0.3rem]" onClick={()=>setShowAddBudgetModel(true)}> Add Budget</button>
        <button className="bg-[#c0392b] text-[#f5f6fa] font-semibold  rounded px-[0.5rem] py-[0.3rem] ">Add Expense</button>
        </div>
      </div>
      <Cards  title={"Trial"} amount={50} maxAmount={1000} />
      <AddBudgetModel show={showAddBudgetModel} onClose={()=>setShowAddBudgetModel(false)}/>
    </div>
  );
}

export default App;
