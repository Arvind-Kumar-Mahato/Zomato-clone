import React from 'react'
import "./deliveryItems.css";



const DeliveryItem = ({item}) => { 
  return (
    <div>
    <div className='delivery-item-cover'>
        <img src = {item.cover} className = 'deliver-item-image' alt = {item.title}/>
    </div>
    <div className='delivery-item-title'> {item.title}</div>
    </div>
  )
}

export default DeliveryItem
