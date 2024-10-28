import React, { useState, useEffect } from "react";
// import swal from 'sweetalert';
import axios from "axios";
import { Link } from 'react-router-dom'

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState('')
  function getData() {
    axios.get("https://6719d961acf9aa94f6a809f4.mockapi.io/crud-operation1")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
   const handleRemove = ((id)=>{
       axios.delete(`https://6719d961acf9aa94f6a809f4.mockapi.io/crud-operation1/${id}`)
       .then(()=>{
        getData();
       })
      // if(id === id) {
      //   swal('You Want Delete Or Cancelld')
      // } 
   })
  useEffect(() => {
    getData();
  }, [data]);
    const setLocaStorage = (id, name, email)=>{
       localStorage.setItem("id",id)
       localStorage.setItem("name",name)
       localStorage.setItem("email",email)
    }
  return (
    <>
    <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" 
      onClick={()=>{
        if(tabledark ==='table-dark') setTableDark("")
          else 
        setTableDark("table-dark")
      }}
    />
    </div>
    <div className='d-flex justify-content-between m-2'>
    <h1>Read Page</h1>
    <Link to="/">
    <button className='btn btn-info'>Create Data</button>
    </Link>
    </div>
      <table className={`table ${tabledark}`} >
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((allElem) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{allElem.id}</th>
                  <td>{allElem.name}</td>
                  <td>{allElem.email}</td>
                  <td>
                    <Link to="/update">
                    <button className="btn-success" onClick={()=>setLocaStorage(allElem.id,allElem.name,allElem.email)}>Edid</button>
                    </Link>
                  </td>
                  <td>
                    <button className="btn-danger" onClick={()=> handleRemove(allElem.id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
