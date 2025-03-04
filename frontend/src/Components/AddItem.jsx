import React,{useState} from 'react';
import axios from "axios";
import route from './route';
import '../Scss/AddItem.scss'
import { useParams } from 'react-router-dom';

const AddItem = () => {
    // const {menu}=useParams();
    const [item,setItem]=useState({
        iname:"",
        idescription:"",
        price:0
    })
    const handleChange=(e)=>{
        setItem({...item,[e.target.name]:e.target.value})
    }
    console.log(item);
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const {data,status}=await axios.post(`${route()}addmenu`,item)
        
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
        <h2>Add Item</h2>
        <input type="text" placeholder='Item Name' name="iname" id="iname" onChange={handleChange} />
        <input type="text" placeholder='Description' name="idescription" id="idescription" onChange={handleChange} />
        <input type="number" placeholder='Price' name="price" id="price" onChange={handleChange} />
        <button type='submit'>Add Item</button>
      </form>
    </div>
  )
}

export default AddItem
