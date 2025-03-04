import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Item from './Item';
import '../Scss/Menus.scss'

const Menus = () => {
  const [menus,setMenus]=useState(["food","Drinks","brunch"]);
  const [selected,setSelected]=useState("Drinks");4
  const naviagte=useNavigate();
  useEffect(()=>{
  },[selected]);

  return (
    <>
      <div className='Menus'>
        <ul className='mlist'>
          {menus.map((menu,ind)=><li  key={ind}><button className={menu==selected?'selectedB':'mbuttons'} onClick={()=>{setSelected(menu)}}>{menu}</button></li>)}
        </ul>
        <FaPlus size={16} color="white" className='plus1' title='Add Menu' onClick={()=>{naviagte('/addmenu')}}/>
      </div>
      <Item selected={selected}/>
    </>
  )
}

export default Menus
