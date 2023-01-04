import React, { useEffect, useState } from 'react'

const useLocalStorage = (key,defaultValue) => {

    /*
    It'll be used as hook
    therefore,  key for this will be the budgets / expenses and default value will be an empty array 
    */
const [value,setValue] = useState(()=>{
    const getJsonValue = localStorage.getItem(key);
    if (getJsonValue !== null) {
        return JSON.parse(getJsonValue);
    }

    if (typeof defaultValue === "function") {
        return defaultValue(); 
    }else{
        return defaultValue;
    }
})

/*
Useffect will update any change in the value
*/

useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
},[key,value])

  return [value,setValue];
}

export default useLocalStorage