import { useState } from "react";

export function Example01(){
    const [count,setCount] =useState(0);
    const [sex,setSex] =useState('男');
    const [work,setWork] =useState('前端程序员')
    return (
        <div>
            <p>你{count} 岁了</p>
            <p>你是 {sex} 的</p>
            <p>你是{work}</p>
            <button onClick={()=>{setCount(count+1)}}>增加年龄</button>
            <button onClick={()=>{setSex(sex==='男'?'女':'男')}}>反转性别</button>
            <button onClick={()=>{setWork(work==='前端程序员'?'后端程序员':'前端程序员')}}>反转工作</button>
        </div>
    )
}
