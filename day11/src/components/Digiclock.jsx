import React, { useEffect, useRef } from 'react'
import '../css/clock.css'

export const Digiclock = () => {
    const timeRef = useRef(null)
    const clockRef = useRef(null)

    useEffect(() => {
        timeRef.current = setInterval(() => {
            if(clockRef.current) {
                clockRef.current.innerHTML = new Date().toLocaleTimeString();
            }
        },1000);

        return () => clearInterval(timeRef.current)
    },[])

  return (
    <div>
        <div className='clock' ref={clockRef}>{new Date().toLocaleTimeString()}</div>
    </div>
  )
}
