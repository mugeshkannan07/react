import React, {useState} from 'react'
import { PropsViewer } from './PropsViewer'

export const Props = () => {
    const [Name,setName]=useState()
    const [Age,setAge]=useState()
  return (
   <>
   <input type="text" onChange={(e)=>(setName(e.target.value))} />

   <PropsViewer Name={Name} Age={Age} setAge={setAge}/>
   </>
  )
}
