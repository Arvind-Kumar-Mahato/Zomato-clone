import React from 'react'
import ExploreCard from './exploreCard';
import "./exploreSection.css"

const ExploreSection = ({ list, collectionsName }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionsName}</div>
      <div className='explore-grid'>
        {list.map((restaurant)=>{
            return <ExploreCard restaurant = {restaurant}/>
        })}
      </div>
    </div>
  );
};

export default ExploreSection;
