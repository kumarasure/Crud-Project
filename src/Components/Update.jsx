import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Update = () => {
    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const navigete = useNavigate()
    
    useEffect(()=>{
        setId (localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    }, [])
    const handleUpdate = (e)=>{
        e.preventDefault()
        console.log("id", id)
        axios.put(`https://6719d961acf9aa94f6a809f4.mockapi.io/crud-operation1/${id}`,{
            name:name,
            email:email,
        })
        .then(()=>{
          navigete("/read")
        })
    }
  return (
    <>
    <h1>Update Page</h1>
     <form>
  <div className="mb-3">
    <label className="form-label">Name:</label>
    <input name="username" type="text" className="form-control" value={name} aria-describedby="emailHelp" 
    onChange={(e) => setName(e.target.value)} 
    />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Email address:</label>
    <input name="email" type="text" className="form-control" value={email}
     onChange={(e) => setEmail(e.target.value)}
      /> 
  </div>

  <button type="submit" className="btn btn-primary mx-2" 
   onClick={handleUpdate}
   >Update</button>

    <Link to="/read">
    <button className='btn btn-secondary mx-2'>Back</button>
    </Link>
</form>
    </> 
  )
}

export default Update