import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const DisplayPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('formData')) || [];
        setData(storedData)},[]);

        const handleDelete = (index) => {
            const updatedata = [...data]
            updatedata.splic(index,1)
            setData(updatedata)

            localStorage.setItem('formData',JSON.stringify(updatedata))
        }  
  return (
    <div>
        <div className='container'>
            <h2>Submited Data</h2>
            {
                data.length > 0 ? (
                    data.map((item, index) => (
                        <div key={index} className='data-card'>
                            <p><strong>Name :</strong>{item.name}</p>
                            <p><strong>Email :</strong>{item.email}</p>
                            <button onClick={()=>handleDelete(index)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>No data Submited</p>
                )
            }

        </div>
    </div>
  )
}
