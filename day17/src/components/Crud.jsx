import React, { useState } from 'react'
import '../components/css/crud.css'

export const Crud = () => {
    const [data, setData] = useState([])
    const [newItem, setNewItem] = useState('')
    const [editIndex, setEditIndex] = useState(null)
    const [editText, setEditText] = useState('')

    // Create 
    function create() {
        setData([...data, newItem])
        setNewItem('')
    }

    // Delete
    function Delete(index) {
        const deletedData = data.filter((_,i) => (i !== index))
        setData(deletedData)
    }

    // Update 
    function Edit(index) {
        setEditIndex(index)
        setEditText(data[index])
    }

    function Update() {
        const UpdatedData = [...data]
        UpdatedData[editIndex]= editText
        setData(UpdatedData)
        setEditIndex(null)
        setEditText('')
        
    }


  return (
    <div className="all">
    <div className='cru'>
       {editIndex == null ? (
       <div>
       <input type="text"  value={newItem} onChange={(e)=>setNewItem(e.target.value)} />
       <button className='add' onClick={create}>Add</button>
       </div> ) :(
       <div>
         <input type="text"  value={editText} onChange={(e)=>setEditText(e.target.value)} />
         <button className='add' onClick={Update}>Update</button>
        </div>
        )}
        </div>
        {/* Read  */}
        {data.map((item, index) => (
            <div key={index} className='edit'>
               <table>
                <tr>
                    <td><span>{item}</span></td>
                    <div className="tab">
                    <td><button className='update' onClick={() => Edit(index)}>Edit</button></td>
                    <td><button className='del' onClick={() => Delete(index)}>Delete</button></td>
                    </div>
                </tr>
               </table>
            </div>
        ))}
    </div>
    
  )
}






