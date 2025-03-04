import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Item from './Item';
import axios from 'axios';
import route from './route';
import '../Scss/Menus.scss'

const Menus = () => {
  const [menus,setMenus]=useState([]);
  const [selected,setSelected]=useState("");
  const naviagte=useNavigate();
  useEffect(()=>{
    getMenu();
  },[selected]);
  const getMenu=async()=>{
    const { status, data } = await axios.get(`${route()}getmenu`);
    if (status === 200) {
     setMenus([...data])
    }
  }
  return (
    <>
      <div className='Menus'>
        <ul className='mlist'>
          {menus.map((menu)=><li  key={menu._id}><button className={menu.mname==selected?'selectedB':'mbuttons'} onClick={()=>{setSelected(menu.mname)}}>{menu.mname}</button></li>)}
        </ul>
        <FaPlus size={16} color="white" className='plus1' title='Add Menu' onClick={()=>{naviagte('/addmenu')}}/>
      </div>
      <Item selected={selected}/>
    </>
  )
}

export default Menus
