import React from 'react'
import { useState } from 'react'
import Footer from '../../Components/common/footer'
import Header from '../../Components/common/header'
import TabOptions from '../../Components/common/tabOptions'
import Deliver from '../../Components/delivery'
import DiningOut from '../../Components/diningOut'
import Nightlife from '../../Components/nightlife'

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery")
  return (
    <div>
   <Header/>
   <TabOptions activeTab = {activeTab}  setActiveTab = {setActiveTab}/>
   {getCorrectScreen(activeTab)}
   <Footer/>
    </div>
  )
}


const getCorrectScreen = (tab)=>{
  switch(tab){
    case "Delivery":
      return <Deliver/>
      case "Dining out":
        return <DiningOut/>
        case "Nightlife":
          return <Nightlife/>
          default:
            return <div>Delivery</div>
  }
};
export default HomePage
