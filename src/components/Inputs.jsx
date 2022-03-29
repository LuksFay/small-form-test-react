import React, {useState } from 'react'
import './inputs.css'
const Inputs = () => {

    const [user, setUser] = useState({
        name: '' ,
        role: ''
    })

    const handleChange = e => {
        setUser({
        ...user,
        [e.target.name] : e.target.value,
        })
    }
  return (
    <>
    <div className="container">
        <form id='form' >
            <label htmlFor="name">Name:</label>
            <input
                id='name'
                type="text"
                name='name' 
                value={user.name}
                onChange={handleChange} 
                autocomplete='off'
                maxlength='14'
            />
            
            <label htmlFor="role">
                Role:
            </label>
            <select
                id="role"
                name="role"
                value={user.role}
                onChange={handleChange}
                >
                <option hidden>Select an Option</option>
                <option value='Designer'>Designer</option>
                <option value='Developer'>Developer</option>
                <option value='Dev Op'>Dev Op</option>
            </select>
        </form>

        <div id='div'>
            <p>Name: <span> {user.name}  </span> </p>  
            <p>Role: <span> {user.role}  </span> </p> 
        </div>
    </div>
    </>
  )
}

export default Inputs
