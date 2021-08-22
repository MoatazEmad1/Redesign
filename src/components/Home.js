import React from 'react'
import LeftSide from './LeftSide'
import {Container} from '../styles/Home.styles'
import {useSelector} from 'react-redux'
import DashBoard from '../HomeComponents/dashboard/DashBoard'
import Admin from '../HomeComponents/Admin/Admin'
import BusinessUsers from '../HomeComponents/Business_Users/BusinessUsers'
import IndividualUser from '../HomeComponents/individual_user/IndividualUser'
import Insights from '../HomeComponents/insights/Insights'
import Transactions from '../HomeComponents/Transactions/Transactions'
import Transaction from '../HomeComponents/Transaction/Transaction'
import WithdrawalType from '../HomeComponents/Withdrawal_type/WithdrawalType'
import TransactionFees from '../HomeComponents/Transaction_Fees/TransactionFees'
import WithDrawalList from '../HomeComponents/WithdrawalList/WithdrawalList'
import OfferList from '../HomeComponents/OfferList/OfferList'
import Events from '../HomeComponents/Events/Events'
import EventsDetails from '../HomeComponents/EventDetails/EventDetails'
import Contact from '../HomeComponents/contact/Contact'
import OfferListAdd from '../HomeComponents/OfferListAdd/OfferListAdd'
import Notifications from '../HomeComponents/Notifications/Notifications'
import NotificationsAdd from '../HomeComponents/NotificationsAdd/NotificationsAdd'
import MyProfile from '../HomeComponents/MyProfile/MyProfile'
function Home() {
    const homestate=useSelector((state)=>state.HomeState)
   const handelState=()=>{
       switch(homestate){
           case 'Dashboard':
               return <DashBoard/>
           case 'MyProfile':
               return <MyProfile/>
           case 'Insights':
               return <Insights/>

           case 'Admin':
            return <Admin/>
          
           case 'Individual user':
            return <IndividualUser/>
          
           case 'Business user':
            return <BusinessUsers/>
          
           case 'Transaction':
            return <Transaction/>
           case 'Transactions':
            return <Transactions/>
          
           case 'Transaction Fees':
            return <TransactionFees/>
          
           case 'Withdrawal list':
            return <WithDrawalList/>
          
           case 'Withdrawal type':
            return <WithdrawalType/>
          
           case 'Offer list':
            return <OfferList/>
           case 'OfferListAdd':
            return <OfferListAdd/>
          
           case 'Events':
            return <Events/>
           case 'EventsDetails':
            return <EventsDetails/>
          
           case 'Contact':
            return <Contact/>
          
           case 'Notification':
            return <Notifications/>
           case 'NotificationsAdd':
            return <NotificationsAdd/>
          
           default:return <h1>Error</h1>
       }
   }
    return (
        <Container>
         
           <LeftSide/> 
           {/* HomePgae */}
           {handelState()}
            
        </Container>
    )
}

export default Home
