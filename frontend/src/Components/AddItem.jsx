import React,{useState} from 'react';
import axios from "axios";
import route from './route';
import '../Scss/AddItem.scss'
import { useNavigate, useParams } from 'react-router-dom';

const AddItem = () => {
    const {menu}=useParams();
    console.log(menu);
    const navigate=useNavigate();
    const [item,setItem]=useState({
        iname:"",
        idescription:"",
        menu:menu,
        price:0
    })
    const handleChange=(e)=>{
        setItem({...item,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const {data,status}=await axios.post(`${route()}additem`,item);
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
    <div className='AddItem'>
      <form className='addIForm' onSubmit={handleSubmit}>
        <h2>{menu}</h2>
        <input type="text" placeholder='Item Name' name="iname" id="iname" onChange={handleChange} />
        <input type="text" placeholder='Description' name="idescription" id="idescription" onChange={handleChange} />
        <input type="number" placeholder='Price' name="price" id="price" onChange={handleChange} />
        <button type='submit'>Add Item</button>
      </form>
    </div>
  )
}

export default AddItem
