import React, { useState,useEffect } from 'react'

export const Advice = () => {
    const [advice,setAdvice]=useState('Advice')
    fetch("https://api.adviceslip.com/advice")
    async function getAdvice() {
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json()
        console.log(data.slip.advice)
        setAdvice(data.slip.advice)
    }
    useEffect(() => {
        getAdvice()
    },[]) 
  return (
    <div>
        <h1>{advice}</h1>
        <button onClick={getAdvice}>getAdvice</button>
    </div>
  )
}
