import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import "./App.css"


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <div className="flex flex-row justify-around items-center mx-[20rem]   ">
            <h1 className="text-[2rem] font-bold">Expenses</h1>
       <div className="flex flex-row justify-around items-center space-x-4">
        <button className="bg-[#bdc3c7] text-gray-900 font-semibold rounded px-[0.5rem] py-[0.3rem]"> Add Budget</button>
        <button className="bg-[#c0392b] text-[#f5f6fa] font-semibold  rounded px-[0.5rem] py-[0.3rem] ">Add Expense</button>
        </div>
      </div>
      <Cards/>
    </div>
  );
}

export default App;
