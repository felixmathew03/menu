import React, { useEffect, useState } from 'react';
import axios from 'axios';
import route from './route';
import { FaPlus } from 'react-icons/fa';
import '../Scss/Item.scss'
import { useNavigate } from 'react-router-dom';

const Item = ({selected}) => {
  const navigate=useNavigate();
  const [title,setTitle]=useState({})
    const [items,setItems]=useState([]);
    useEffect(()=>{
       getItem();
    },[selected]);
    const getItem=async()=>{
      const { status, data } = await axios.get(`${route()}getitem/${selected}`);
      if (status === 200) {
        setItems(data.items)
        setTitle(data.mend)
      }
    }
    const addItem=()=>{
      if(selected){
        navigate(`/additem/${selected}`)
      }else{
        alert("Select a Menu Category")
      }
    }
  return (
    <div className='Item'>
      <div className="icontent">
        <div className="heading">
            <div className="division"></div>
            <h2>{title.mdescription}</h2>
            <div className="division"></div>
        </div>
        <div className="idetails">
            {items.map((item,ind)=><div key={ind} className="eachItem">
                <h3><span className='title'>{item.iname}</span> <span className='price'>${item.price}</span></h3>
                <p>{item.idescription}</p>
            </div>)}
            <div className="adding">
              {selected&&<button onClick={addItem}><FaPlus /> <span>Add more item...</span></button>}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Item
