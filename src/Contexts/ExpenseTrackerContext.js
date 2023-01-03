
import React, { useContext } from "react";
import {v4} from "uuid"
import useLocalStorage from "../CustomHooks/useLocalStorage";

/*
1) using Contect API here
2) Using uuid to provide unique ID to budget card and unique IDs to the budget's expenses
3) using useLocalStorage as a custom hook to store budgets and expenses of budgets in browser's local storage
4) using custom hook useExpenseTracker and importing it to use directly
*/


const ExpenseTrackerContext = React.createContext()

export function useExpenseTracker(){

    return useContext(ExpenseTrackerContext)

};


// exporting ExpenseTrackerProvider to index.js to hydrate it inside App.js 
export const ExpenseTrackerProvider=({children}) =>{

    //all the budgets with budgetID,budget Name, and max amout for the budget
    const [budgets, setBudgets] = useLocalStorage("budgets", []);
    //all the respective budgets's expeses with own Unique ID,budgetID,description of expenseand amount of the expense
    const [expenses, setExpenses] = useLocalStorage("expenses", []);

        // function for all the expense for the perticular budget ,tracking with budget ID
     const allExpensesForABudget =(budgetId)=>{
        return expenses.filter(exp => exp.budgetId === budgetId)
     };

     //adding budget 
   const addBudget =(budgetName, max)=>{
    setBudgets(prevBudgets=>{
        if (prevBudgets.find(budget=> budget.budgetName === budgetName)) {
            return prevBudgets;
        }
        return [...prevBudgets,{id: v4(), budgetName, max}]
    })
   }


    const  addExpense = ({description,amount,budgetId})=>{
        setExpenses(prevExpenses=>{
            return [...prevExpenses,{id: v4(), description, amount, budgetId}]
        })
    }




   const  deleteBudget =({id})=>{
    setExpenses(prevExpenses=>{
        return prevExpenses.map(expense=>{
            if (expense.budgetId !== id) {
                return expense;
            }

            return{...expense,budgetId:null,amount:null}
        })
    })
    setBudgets(prevBudgets=>{
        return prevBudgets.filter(budget => budget.id !== id)
    })


   }

    const deleteExpense =({id})=>{
        setExpenses(prevExpenses=>{
            return prevExpenses.filter(expense => expense.id !== id)
        })
    }



    return (
        <ExpenseTrackerContext.Provider value={{
            budgets,
            expenses,
            allExpensesForABudget,
            addBudget,
            addExpense,
            deleteBudget,
            deleteExpense,
        }} >
            {children}
        </ExpenseTrackerContext.Provider>
    )
}