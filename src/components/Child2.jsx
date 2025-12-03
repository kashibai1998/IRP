import React from "react";
function Child2({value,setValue}){
    return <>
        <p>vhild2</p>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
    </>
}

export default Child2;