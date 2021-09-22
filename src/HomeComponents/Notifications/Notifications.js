import React from 'react'
import {WraperInfo} from '../../styles/Notifications.styles'
import Paginate from '../../utils/Paginate'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsReuse from './NotificationsReuse'
import {useDispatch} from 'react-redux'
import {SetNewHomeState} from '../../Redux/Actions/HomeActionCreator'
import search from '../../images/Iconly/Search.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Parent,Wraper,WraperContent,WraperHeader} from '../../SharedStyles/HomeComponentsStyles/Home.styles'
function Notifications() {
    const dispatch=useDispatch()
    return (
        <Parent>
           <span id='HeaderTitle'>Notifications</span>
           <Wraper>
               <WraperHeader>
               <div className='search'>
                    <div className='searchIcon' >
                        <img src={search} alt=''/>
                    </div>
               
                <input type='text' placeholder='Search...'/>
                </div>
                <div className='sort'>

              
                <div className='sortUsers'> 
                 <span className='sortby'>Sort By:</span>
                 <span className='default'>Default</span>
                 <div className='downarrowContainer'>
                    <ArrowDropDownIcon/>
                 </div>
                  
                </div>
               
                <div className='btn'>
               <button onClick={()=>dispatch(SetNewHomeState('NotificationsAdd'))}>Add</button>
               </div>
               </div>
               </WraperHeader>
               <WraperContent>
               
                    <span id='Notifications_Notification_ID'>Notification ID</span>
                
               
                    <span id='Notifications_Notification_Text'>Notification Text</span>
                
               
                    <span id='Notifications_Notification_Image'>Notification Image</span>
                
               
                    <span id='Notifications_Created_Time_Stamp'>Created Time Stamp</span>
                
              
               </WraperContent>
              {/* reuse */}
              <NotificationsReuse id={22} text='test'/>
              <NotificationsReuse id={22} text='test'/>
              <NotificationsReuse id={22} text='test'/>
              <NotificationsReuse id={22} text='test'/>
              <NotificationsReuse id={22} text='test'/>
           </Wraper>
           <Paginate/>
        </Parent>
    )
}

export default Notifications
