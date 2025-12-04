import React,{useState} from "react"
import Child1 from './Child1'
import Child2 from './Child2'
function Child(){

    const [value, setValue] = useState(0)
    const getData =(data)=>{
      setValue(data)
    }
  
    return (
      <>
        <Child1 value={value} onChange={(data)=>getData(data)}/>
        <Child2 value={value} setValue={setValue}/>
      </>
    )

}

export default Child;