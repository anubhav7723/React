import React, { useState } from "react";

function Counter(){
    let [count,setcount]=useState(0);
    function addCount(){
        setcount(count+1);
        setcount(count+1);
        setcount(count+1);
        setcount(count+1);
    }
    function removeCount(){
        setcount(count-1);
    }
    return(
        <>
        <h1>Counter</h1>
        <h2>Current count : {count}</h2>
        <button onClick={addCount}>Add count</button>
        <button onClick={removeCount}>Remove count</button>
        </>
    )
}
export default Counter;