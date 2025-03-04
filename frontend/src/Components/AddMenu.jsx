import React, { useState } from 'react';
import axios from "axios";
import route from './route';
import '../Scss/AddMenu.scss'
import { useNavigate } from 'react-router-dom';

const AddMenu = () => {
  const navigate=useNavigate();
    const [menu,setMenu]=useState({
        mname:"",
        mdescription:""
    })
    const handleChange=(e)=>{
        setMenu({...menu,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const {data,status}=await axios.post(`${route()}addmenu`,menu)
        
        if(status===201){
          alert(data.msg);
          navigate('/');
        }
        else{
          alert(data.msg)
        }
        } catch (error) {
          alert("error occured")
        }
    }
  return (
    <div className='AddMenu'>
      <form className='addMForm' onSubmit={handleSubmit}>
        <h2>Add to Menu</h2>
        <input type="text" placeholder='Menu Name' name="mname" id="mname" onChange={handleChange} />
        <input type="text" placeholder='Description' name="mdescription" id="mdescription" onChange={handleChange} />
        <button type='submit'>Add to Menu</button>
      </form>
    </div>
  )
}

export default AddMenu
