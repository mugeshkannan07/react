import React, { useState } from 'react'

export const Restapi = () => {
    let [text, setText] = useState('')

    function Data() {
        fetch('https://dummyjson.com/posts/add', {
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify({
            title : {text},
            userId : 5,
            })
        })
        .then(res => res.json())
            .then(console.log)
    }
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={Data}>Post</button>
    </div>
  )
}
