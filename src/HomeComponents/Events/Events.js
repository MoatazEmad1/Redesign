import React from 'react'
//import {WraperContent,WraperHeader,Wraper,EventsContainer} from '../../styles/Events.styles'
import SearchIcon from '@material-ui/icons/Search';
import EventsReuse from './EventsReuse'
import Paginate from '../../utils/Paginate'
import {useDispatch} from 'react-redux'
import {SetNewHomeState} from '../../Redux/Actions/HomeActionCreator'
import search from '../../images/Iconly/Search.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Parent,WraperContent,WraperHeader,Wraper} from '../../SharedStyles/HomeComponentsStyles/Home.styles'
function Events() {
    const dispatch=useDispatch()
    return (
        <Parent>
            <span id='HeaderTitle'>Events</span>
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
               <button onClick={()=>dispatch(SetNewHomeState('EventsDetails'))}>Export</button>
               </div>
               </div>
                </WraperHeader>
                <WraperContent>
               
                        <input id='Events_Checkbox' type='checkbox'/>
                        <span id='Events_Event_Id'>Event Id</span>
                
               
                      
                        <span id='Events_Users'>Users</span>
                
               
                      
                        <span id='Events_Owner'>Owner</span>
                
               
                      
                        <span id='Events_Event_Name'>Event Name</span>
                
               
                      
                        <span id='Events_Event_Date'>Event Date</span>
                
               
                      
                        <span id='Events_Event_Balance'>Event Balance</span>
                
               
                      
                        <span id='Events_Contributers'>Contributers</span>
                
               
                      
                        <span id='Events_Transactions'>Transactions</span>
                
               
                      
                        <span id='Events_Created_At'>Created At</span>
                
                </WraperContent>
                {/* Reuse section */}
                <EventsReuse id='1242-343' users='5' owner='moataz' event_name='paytabs_lunch'/>
                <EventsReuse id='1242-343' users='5' owner='moataz' event_name='paytabs_lunch'/>
                <EventsReuse id='1242-343' users='5' owner='moataz' event_name='paytabs_lunch'/>
                <EventsReuse id='1242-343' users='5' owner='moataz' event_name='paytabs_lunch'/>
                <EventsReuse id='1242-343' users='5' owner='moataz' event_name='paytabs_lunch'/>
                <EventsReuse id='1242-343' users='5' owner='moataz' event_name='paytabs_lunch'/>
                <EventsReuse id='1242-343' users='5' owner='moataz' event_name='paytabs_lunch'/>
               
            </Wraper>
            <Paginate/>
        </Parent>
    )
}

export default Events
