import React from 'react'
import "./header.css";


const Header = () => {
  return (
    <div className='max-width header'>
   <img src = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
   alt = "zomato-logo"
   className='header-logo'/>
   
    <div className='header-right'>
    <div className = 'header-loaction-search-container'>
    <div className ='location-wrapper'>
    <div className = 'location-icon-name'>
    <i className = "fi fi-ss-marker  absolute-center  location-icon"></i>
    <div>Banglore</div>
    
    </div>
    <i className ="fi fi-rr-caret-down absolute-center"></i>
    </div>
    <div className='location-search-separator'></div>
    <div className='header-searchBar'>
    <i className="fi fi-rr-search  absolute-center search-icon"></i>
    <input placeholder = "search for restaurant, cuisine or a dish"
     className='search-input' />
    </div>
    </div>
    <div className='profile-wrapper'>
    <img src ="data:image/png;base64,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"
     alt ="profile" className='header-profile-image'
    />
    <span className='header-username'>Arvind</span>
    <i className="fi fi-rr-caret-down absolute-center profile-options-icon"></i>

    </div>
    </div>
    </div>
  )
}

export default Header;
