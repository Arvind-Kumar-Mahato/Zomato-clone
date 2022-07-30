import React from 'react'
import { restaurants } from '../../data/restaurants'
import ExploreSection from '../common/exploreSection'
import Filters from '../common/filters'
import "./delivery.css"
import DeliveryCollections from './deliveryCollections'
import TopBrands from './topBrand'


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

const restaurantList = restaurants;
const Deliver = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection list={restaurantList}  collectionsName = "Delivery Restaurants in Bangalore"/>
    </div>
  );
}

export default Deliver
