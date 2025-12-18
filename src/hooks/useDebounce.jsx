import React,{useState,useEffect} from 'react'

const useDebounce =(value,delay=100)=>{
    const [debounceVal,setDebounceVal]=useState(value)
    useEffect(()=>{
        let timer = setTimeout(()=>{
            setDebounceVal(value)
        },delay)
        return ()=>{clearTimeout(timer)}
    },[value,delay])
    return debounceVal;
}

export default useDebounce;