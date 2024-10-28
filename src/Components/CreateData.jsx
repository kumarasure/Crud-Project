import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CreateData = () => {
    const [name, setName] = useState(" ")
    const [email, setEmail] = useState(" ")
    const history = useNavigate()

    const header = {"Access-Control-Allow-Orgin": "*"}
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log("clicked")
          axios.post("https://6719d961acf9aa94f6a809f4.mockapi.io/crud-operation1",{
            name:name,
            email:email,
            header,
          })
          .then(()=>{
            history("/read")
          })
        }
  return (
    <>
   <div className='d-flex justify-content-between m-2 main-container'>
    <h1>Create Page</h1>
    <Link to="/read">
    <button className='btn btn-primary'>View Data</button>
    </Link>
    </div>
     <form>
  <div className="mb-3">
    <label className="form-label">Name:</label>
    <input name="username" type="text" className="form-control" aria-describedby="emailHelp" 
    onChange={(e) => setName(e.target.value)} placeholder='Enter Name:' />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Email address:</label>
    <input name="email" type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email:'/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </> 
  ) 
}

export default CreateData