import React from "react"
// import {childProps} from './ChildProps'


export const PropsViewer = ({Name,Age,setAge}) => {
  return (
   <>
    <input type="text" onChange={(e)=>(setAge(e.target.value))} />
    <h1>{Age < 15 ? `${Name}, You are Eligible for School`: (Age >15 && Age <=24) ? `${Name}, You are Eligible 
    for College` : (Age >25) ? `${Name}, You are Eligible for Work` : '' }</h1>
   </>
  )
}
