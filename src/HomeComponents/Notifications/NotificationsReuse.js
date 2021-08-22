import React from 'react'
import {NotificationsReuseContainer} from '../../styles/Notifications.styles'

function NotificationsReuse({id,text}) {
    const image='https://previews.123rf.com/images/houbacze/houbacze1801/houbacze180100243/93055121-banner-best-offer-design-.jpg'

    return (
        <NotificationsReuseContainer>
            <div id='modify'>
                <span>{id}</span>
            </div>
            <div id='modify'>
                <span>{text}</span>
            </div>
            <div id='modify'>
               <img src={image} alt=''/>
            </div>
            <div id='modify'>
                <span>16 sep 2020 10AM</span>
            </div>
        </NotificationsReuseContainer>
    )
}

export default NotificationsReuse
