import React, { useState,useEffect } from 'react'
import '../css/useEffect.css'

export const UseEffect = () => {
    const [count,setCount]=useState(0)
    const [Time,setTime]=useState(0)


    // Mount is single page, remove already what in page

    // Type 1 (withut Dependency Array)
    useEffect(()=>{
        console.log('UseEffect')
    })
    console.log('Not UseEffect')


    // Type 2 (Empty Dependency Array)
    //  useEffect(()=>{
    //         console.log('UseEffect')
    //     },[])


         // Type 3 (with Dependency Array)
    //  useEffect(()=>{
    //     console.log('UseEffect for Count')
    // },[count,Time])
        
  return (
    <div>
        <h1>Count : {count}</h1>
        <h1>Time : {Time}</h1>
        <button onClick={()=>setCount((v)=>v-1)}>-</button>
        <button onClick={()=>setCount((v)=>v+1)}>+</button>
        <button onClick={()=>setTime((v)=>v+1)}>+</button>
    </div>
  )
}
