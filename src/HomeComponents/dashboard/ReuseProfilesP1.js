import React from 'react'
import {ReuseProfilesPart1} from '../../styles/Dashboard.styles'
function ReuseProfilesP1({Owner,Wallet_Name,Event_Date,Created_On}) {
    return (
        <ReuseProfilesPart1>
           
                <img id='ps_img' src={Owner.imgsrc} alt=''/>
                <span id='ps_owner'>{Owner.name}</span>
     
            <span id='ps_wn'>{Wallet_Name}</span>
            <span id='ps_ed'>{Event_Date}</span>
            <span id='ps_co'>{Created_On}</span>
        </ReuseProfilesPart1>
    )
}

export default ReuseProfilesP1
