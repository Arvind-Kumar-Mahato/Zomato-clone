import React from 'react'
import Filters from '../common/filters'
import "./delivery.css"


const deliveryFilters = [
  {
    id:1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center" ></i>,
    title: "Filters",
  },
  {
    id:2,
    title: "Rating: 4.0+",
  },
  {
    id:3,
    title: "Safe and Hygienic",
  },
  {
    id:4,
    title: "pure Veg",
  },

  {
    id:5,
    icon: <i className ="fi fi-br-sort-alt absolute-center"></i>,
    title: "Delivery Time",
  },
  {
    id:6,
    title: "Great Offers",
  },

]
const Deliver = () => {
  return (
    <div>
    <div className='max-width'>
    <Filters filterList = {deliveryFilters}/>
    </div>
      
    </div>
  )
}

export default Deliver
