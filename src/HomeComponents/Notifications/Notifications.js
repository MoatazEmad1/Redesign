import React from 'react'
import {WraperInfo,WraperContent,WraperHeader,Wraper,NotificationsContainer} from '../../styles/Notifications.styles'
import Paginate from '../../utils/Paginate'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsReuse from './NotificationsReuse'
import {useDispatch} from 'react-redux'
import {SetNewHomeState} from '../../Redux/Actions/HomeActionCreator'
function Notifications() {
    const dispatch=useDispatch()
    return (
        <NotificationsContainer>
           <span>Notifications</span>
           <Wraper>
               <WraperHeader>
               <div className='search'>
                <SearchIcon className='searchIcon'/>
                <input type='text' placeholder='Search...'/>
                </div>
                <div className='sort'>

              
                <div className='sortUsers'> 
                 <span>Sort By:</span>
                    <select>
                    <option value="Default">Default</option>
                    </select>
                </div>
               
                <div className='btn'>
               <button onClick={()=>dispatch(SetNewHomeState('NotificationsAdd'))}>Add</button>
               </div>
               </div>
               </WraperHeader>
               <WraperContent>
                <div id='modify'>
                    <span>Notification ID</span>
                </div>
                <div id='modify'>
                    <span>Notification Text</span>
                </div>
                <div id='modify'>
                    <span>Notification Image</span>
                </div>
                <div id='modify'>
                    <span>Created Time Stamp</span>
                </div>
              
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
