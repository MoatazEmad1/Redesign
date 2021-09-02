import React from 'react'
import {EventsReuseContainer,Button} from '../../styles/Events.styles'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
function EventsReuse({id,users,owner,event_name}) {
    return (
        <EventsReuseContainer>
          
            <input id='cx' type='checkbox'/>
            <span id='ed'>{id}</span>
            
          
            <span id='us'>{users}</span>
            
          
            <span id='or'>{owner}</span>
            
          
            <span id='et'>{event_name}</span>
            
          
            <span id='ete'>10 nov 2020</span>
            
          
            <span id='el'>100 euro</span>
            
            <div id='cs' className='info1'>
                <PersonOutlineOutlinedIcon/>
            <span >contributers</span>
            </div>
            <div id='ts' className='info2'>
                <PersonOutlineOutlinedIcon/>
            <span >transactions</span>
            </div>
         
            <span id='ct'>20 dec 2020 10AM</span>
          
        </EventsReuseContainer>
    )
}

export default EventsReuse
