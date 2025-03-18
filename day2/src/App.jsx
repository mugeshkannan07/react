import React, {useState} from "react"
// import Home from './Home.jsx'
import './css/style.css'


// export const App = () => {
//   const [Count, setCount] = useState(0);
//   return (
//     <>
//     <button onClick={(e)=>{setCount(Count+1)}}>Click Me {Count}</button>
//     <h1>{Count}</h1>
//     </>
//   )
// }



export const App = () => {
  const [Leave, setLeave] = useState(true);
  const leave = () => {
    Leave?setLeave(false):setLeave(true)
  }
  return (
    <>
    <button onClick={leave}>leave</button>
    {Leave ? <h3 id="lea">You are leave</h3> : <h3 id="task">Youe task</h3>  }
    {/* <h1>{Count}</h1> */}
    </>
  )
}



export default App