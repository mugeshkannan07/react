import  { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const FormPage = () => {
    const [formData, setFormData] = useState({name:'', email:''})
    const navigate = useNavigate();

    const handlechange = (e) => {
        setFormData({...formData,[e.target.name] : [e.target.value]})
        console.log(setFormData)
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        const existingData = JSON.parse(localStorage.getItem('formData')) || [];
        const updatedData = [...existingData,formData]
        localStorage.setItem("formData", JSON.stringify(updatedData));
    
        navigate('/data')
        console.log(existingData)
    }

  return (
    <div className='container'>
        <h2 >Submit Your Data</h2>
        <form action="" onSubmit={handlesubmit}>
            <div className='input-group'>
                <label>Name : </label>
                <input type="text" name='name' value={formData.name} onChange={handlechange} required />
            </div>

            <div className='input-group'>
                <label>Email : </label>
                <input type="email" name='email' value={formData.email} onChange={handlechange} required />
            </div>
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}
