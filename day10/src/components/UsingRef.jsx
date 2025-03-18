import React, { useEffect, useRef } from 'react'
import '../css/using.css'

export const UsingRef = () => {
    const countRef = useRef(0)
    const spanRef = useRef(null)
    const images = useRef('')


    const imgchange = () => {
      images.current 
        images.current.src = 'src/assets/vinlandsaga.webp'
    }

    function handleclick(){
        // console.log(spanRef)
        // console.log(countRef)
        countRef.current++
        spanRef.current.innerHTML=countRef.current
    }
    useEffect(() =>{
        console.log('UseRef component Re-Rendering')
        imgchange()
    })

  return (
    <div>
        <button onClick={handleclick}>UseRef <span ref={spanRef}>0</span></button>
        <img ref={images}  alt="#" width={200} />
    </div>
  )
}
