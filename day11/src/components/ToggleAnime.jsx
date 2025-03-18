import React, { useRef } from 'react'
import '../css/anime.css'

export const ToggleAnime = () => {
    const boxRef = useRef(null)

    const handlemove = () => {
        if(boxRef.current) {
            boxRef.current.classList.toggle('moveright')
        }
    }

    const handletop = () => {
        if(boxRef.current) {
            boxRef.current.classList.toggle('movetop')
        }
    }

    const handleleft = () => {
        if(boxRef.current) {
            boxRef.current.classList.toggle('moveleft')
        }
    }

    const handleright = () => {
        if(boxRef.current) {
            boxRef.current.classList.toggle('movebottom')
        }
    }
  return (
    <>
    <div className="anime">
    <div className="container">
        <div className='box' ref={boxRef}></div>
    </div>
    <div className="btn">
    <button onClick={handletop}>Move Top</button>
    <button onClick={handleleft}>Move Left</button>
    <button onClick={handlemove}>Move Right</button>
    <button onClick={handleright}>Move Bottom</button>
    </div>
    </div>
    </>
  )
}










