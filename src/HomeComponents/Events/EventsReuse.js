import React from 'react'
import {EventsReuseContainer,Button} from '../../styles/Events.styles'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
function EventsReuse({id,users,owner,event_name}) {
    return (
        <EventsReuseContainer>
            <div className='contentInfo'>
            <input type='checkbox'/>
            <span>{id}</span>
            </div>
            <div className='contentInfo'>
            <span>{users}</span>
            </div>
            <div className='contentInfo'>
            <span>{owner}</span>
            </div>
            <div className='contentInfo'>
            <span>{event_name}</span>
            </div>
            <div className='contentInfo'>
            <span>10 nov 2020</span>
            </div>
            <div className='contentInfo'>
            <span>100 euro</span>
            </div>
            <div className='contentInfo info'>
                <PersonOutlineOutlinedIcon/>
            <span >contributers</span>
            </div>
            <div className='contentInfo info'>
                <PersonOutlineOutlinedIcon/>
            <span >transactions</span>
            </div>
            <div className='contentInfo '>
            <span>20 dec 2020 10AM</span>
            </div>
        </EventsReuseContainer>
    )
}

export default EventsReuse
