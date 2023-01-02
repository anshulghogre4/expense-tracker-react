import React, { useEffect, useState } from 'react'

const useLocalStorage = (key,defaultValue) => {

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


useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
},[key,value])

  return [value,setValue];
}

export default useLocalStorage