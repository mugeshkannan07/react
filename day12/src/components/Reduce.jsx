import React, { useReducer } from 'react'
const initialState = {count:0}
import '../css/reduce.css'


    function reducer (state,action) {
        switch (action.type) {
            case  'increment':
            return({count:state.count+1})
                
            case  'decrement':
            return({count:state.count-1})
        
            case  'reset':
            return({count:0})

            default:
                break;
        }
    }

export const Reduce = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <div className="btn">
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <p>{state.count}</p>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    </div>
  )
}
