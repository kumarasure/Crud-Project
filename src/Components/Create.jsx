import axios from 'axios'
import React, { useState } from 'react'

const Create = () => {
    const [name, setName] = useState({
        username:'',
        email:'',
        password: '',
        address: '',
    })
    const handleChange=(e)=>{
        const name =e.target.name
        const value =e.target.value
        setName((values)=>({...values,[name]:value}))
        console.log(name,value)
    }

    const FetchApi=()=>{
        axios.post("https://6719d961acf9aa94f6a809f4.mockapi.io/crud",name).then((res)=>{
            console.log(res.data)
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        FetchApi()
    }
  return (
    <>
    <h1>Create Page</h1>
     <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label className="form-label">Name:</label>
    <input name="username" type="text" value={name.username} className="form-control" onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Email address:</label>
    <input name="email" type="text" value={name.email} className="form-control" onChange={handleChange} />
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Password:</label>
    <input name="password" type="password" value={name.password} className="form-control" onChange={handleChange} />
  </div>
 
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Address:</label>
    <input name="address" type="text" value={name.address} className="form-control" onChange={handleChange} />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
   
    
    
  )
}

export default Create