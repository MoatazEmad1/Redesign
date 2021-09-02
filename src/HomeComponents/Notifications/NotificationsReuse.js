import React from 'react'
import {NotificationsReuseContainer} from '../../styles/Notifications.styles'

function NotificationsReuse({id,text}) {
    const image='https://previews.123rf.com/images/houbacze/houbacze1801/houbacze180100243/93055121-banner-best-offer-design-.jpg'

    return (
        <NotificationsReuseContainer>
         
                <span id='nid'>{id}</span>
         
         
                <span id='nt'>{text}</span>
         
         
               <img id='ni' src={image} alt=''/>
         
         
                <span id='cts'>16 sep 2020 10AM</span>
         
        </NotificationsReuseContainer>
    )
}

export default NotificationsReuse
