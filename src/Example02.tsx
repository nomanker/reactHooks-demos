import { useEffect } from "react";
import { useState } from "react"

export function Example02(){
    const [count,setCount] =useState(0);
    useEffect(()=>{
        document.title="You clicked "+count+ "times";

        return ()=>{
            document.title="React 应用";
        }
    })

    return (
        <div>
            <p>You clicked the {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>加1按钮</button>
        </div>
    )
}