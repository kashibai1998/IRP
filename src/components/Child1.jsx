import React from "react";
function Child1({value,onChange}){
    const handle =(e)=>{
        onChange(e.target.value)
    }
    return <>
        <p>vhild1</p>
        <input type="text" value={value} onChange={(e)=>handle(e)}/>
    </>
}

export default Child1;