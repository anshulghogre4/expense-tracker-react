
import React, { useContext } from "react";
import {v4} from "uuid"
import useLocalStorage from "../CustomHooks/useLocalStorage";
const ExpenseTrackerContext = React.createContext()




export function useExpenseTracker(){

    return useContext(ExpenseTrackerContext)

};



export const ExpenseTrackerProvider=({children}) =>{

    const [budgets, setBudgets] = useLocalStorage("budgets", []);
    const [expenses, setExpenses] = useLocalStorage("expenses", []);


     const allExpensesForABudget =(budgetId)=>{
        return expenses.filter(exp => exp.budgetId === budgetId)
     };

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