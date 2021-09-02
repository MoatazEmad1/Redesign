import React from 'react'
import {WraperContent,WraperHeader,Wraper,EventsContainer} from '../../styles/Events.styles'
import SearchIcon from '@material-ui/icons/Search';
import EventsReuse from './EventsReuse'
import Paginate from '../../utils/Paginate'
import {useDispatch} from 'react-redux'
import {SetNewHomeState} from '../../Redux/Actions/HomeActionCreator'
function Events() {
    const dispatch=useDispatch()
    return (
        <EventsContainer>
            <span>Events</span>
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
               <button onClick={()=>dispatch(SetNewHomeState('EventsDetails'))}>Export</button>
               </div>
               </div>
                </WraperHeader>
                <WraperContent>
               
                        <input id='cx' type='checkbox'/>
                        <span id='ed'>Event Id</span>
                
               
                      
                        <span id='us'>Users</span>
                
               
                      
                        <span id='or'>Owner</span>
                
               
                      
                        <span id='et'>Event Name</span>
                
               
                      
                        <span id='ete'>Event Date</span>
                
               
                      
                        <span id='el'>Event Balance</span>
                
               
                      
                        <span id='cs'>Contributers</span>
                
               
                      
                        <span id='ts'>Transactions</span>
                
               
                      
                        <span id='ct'>Created At</span>
                
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
        </EventsContainer>
    )
}

export default Events
