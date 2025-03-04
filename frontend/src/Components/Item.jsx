import React, { useEffect, useState } from 'react';
import '../Scss/Item.scss'

const Item = ({selected}) => {
    const [items,setItems]=useState([])
    useEffect(()=>{
        if (selected=="Drinks") {
            
            setItems([
                {name:"Cinnamon Toast Crunch",price:"12",description:"sgdvghvg sgvgdvhgv vsdhvhgvghsy  76t37th whgegwg4 2f3yf2yt"},
                {name:"MOET Spritz",price:"14",description:"sgdvghvg sgvgdvhgv 343  76t37th ggwhgegwg4 3434"},
                {name:"Bar 42 mary",price:"30",description:"sgdvghvg sgvgdvhgv vsdhvhgvghsy  76t37th whgegwg4 2f3yf2yt"},
                {name:"Cinnamon Toast ",price:"50",description:"sgdvghvg sgvgdvhgv rerr  76t37th whgegwg4 2f3yf2yt"},
                {name:"Toast Crunch",price:"80",description:"sgdvghvg sgvgdvhgv wewuihi  76t37th whgegwg4 2f3yf2yt"}
            ])
        }else if (selected === "food") {
            setItems([
              { name: "Mojito", price: 8, description: "Refreshing cocktail" },
              { name: "Lemonade", price: 5, description: "Freshly squeezed lemonade" }
            ]);
          } else if (selected === "brunch") {
            setItems([
              { name: "Eggs Benedict", price: 14, description: "Classic brunch dish" },
              { name: "Pancakes", price: 10, description: "Fluffy pancakes with syrup" }
            ]);
          }else{
            setItems([]);
          }
    },[selected]);
  return (
    <div className='Item'>
      <div className="icontent">
        <div className="heading">
            <div className="division"></div>
            <h2>Brunch Cocktails</h2>
            <div className="division"></div>
        </div>
        <div className="idetails">
            {items.map((item,ind)=><div key={ind} className="eachItem">
                <h3><span className='title'>{item.name}</span> <span className='price'>${item.price}</span></h3>
                <p>{item.description}</p>
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default Item
