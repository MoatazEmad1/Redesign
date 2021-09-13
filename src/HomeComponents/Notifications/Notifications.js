import React from 'react'
import {WraperInfo,WraperContent,WraperHeader,Wraper,NotificationsContainer} from '../../styles/Notifications.styles'
import Paginate from '../../utils/Paginate'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsReuse from './NotificationsReuse'
import {useDispatch} from 'react-redux'
import {SetNewHomeState} from '../../Redux/Actions/HomeActionCreator'
import search from '../../images/Iconly/Search.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function Notifications() {
    const dispatch=useDispatch()
    return (
        <NotificationsContainer>
           <span>Notifications</span>
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
               
                    <span id='nid'>Notification ID</span>
                
               
                    <span id='nt'>Notification Text</span>
                
               
                    <span id='ni'>Notification Image</span>
                
               
                    <span id='cts'>Created Time Stamp</span>
                
              
               </WraperContent>
              {/* reuse */}
              <NotificationsReuse id={22} text='test'/>
              <NotificationsReuse id={22} text='test'/>
              <NotificationsReuse id={22} text='test'/>
              <NotificationsReuse id={22} text='test'/>
              <NotificationsReuse id={22} text='test'/>
           </Wraper>
           <Paginate/>
        </NotificationsContainer>
    )
}

export default Notifications
