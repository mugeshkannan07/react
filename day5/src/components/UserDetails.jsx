import React, {useState} from 'react'

export const UserDetails = () => {
    const [user,setUser]=useState({
        name:'mugesh',
        Dept:'CSE',
        gender:'Male',
        isMarried:false,
        subject:{
            Tamil:0,
            English:0,
            Maths:0,
            Science:0,
            Social:0
        }
    })
    const [SubTotal,setSubTotal]=useState(0)
    function OnChange(e){
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setUser({...user,[e.target.name]:value})
    }
  return (
    <div>
    <div>
        <h1>{user.name}</h1>
        <h1>{user.Dept}</h1>
        <h1>{user.gender}</h1>
        <h1>{user.isMarried?'Married':'Single'}</h1>
        <h1>Tamil : {user.subject.Tamil}</h1>
        <h1>English : {user.subject.English}</h1>
        <h1>Maths : {user.subject.Maths}</h1>
        <h1>Science : {user.subject.Science}</h1>
        <h1>Social : {user.subject.Social}</h1>
    </div>
    // <br />  <br />  <br /> 
    <div>
        <label htmlFor="Name">Name :</label>
        <input type="text" name='name' id='Name' onChange={OnChange} value={user.name}/> <br />


        <label htmlFor="Department">Department</label>
        <select name="Dept" id="Department" onChange={OnChange} value={user.Dept}>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="MECH">MECH</option>
        </select> <br />

        <label htmlFor="Gender">Gender :</label> <br />

        <input type="radio" name='gender' id='Male' value="Male" onChange={OnChange} checked={user.gender=='Male'} />
        <label htmlFor="Male">Male</label> <br />

        <input type="radio" name='gender' id='Female' value="Female" onChange={OnChange} checked={user.gender=='Female'} />
        <label htmlFor="Female">Female</label> <br />

        <input type="checkbox" name='isMarried' id='Married' onChange={OnChange} checked={user.isMarried} />
        <label htmlFor="Married">isMarried</label> <br />

        <label htmlFor="Tamil">Tamil</label>
        <input type="text" name='subject' id='Tamil' onChange={OnChange} checked={user.subject.Tamil} /> <br />

        
        <label htmlFor="English">English</label>
        <input type="text" name='subject' id='English' onChange={OnChange} checked={user.subject.English} /> <br />

        
        <label htmlFor="Maths">Maths</label>
        <input type="text" name='subject' id='Maths' onChange={OnChange} checked={user.subject.Maths} /> <br />

        
        <label htmlFor="Science">Science</label>
        <input type="text" name='subject' id='Science' onChange={OnChange} checked={user.subject.Science} /> <br />

        
        <label htmlFor="Social">Social</label>
        <input type="text" name='subject' id='Social' onChange={OnChange} checked={user.subject.Social} /> <br />
       
    </div>
    </div>
  )
}
