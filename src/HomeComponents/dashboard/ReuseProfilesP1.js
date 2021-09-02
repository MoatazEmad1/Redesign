import React from 'react'
import {ReuseProfilesPart1} from '../../styles/Dashboard.styles'
function ReuseProfilesP1({owner,wn,ed,co}) {
    return (
        <ReuseProfilesPart1>
           
                <img id='ps_img' src={owner.imgsrc} alt=''/>
                <span id='ps_owner'>{owner.name}</span>
     
            <span id='ps_wn'>{wn}</span>
            <span id='ps_ed'>{ed}</span>
            <span id='ps_co'>{co}</span>
        </ReuseProfilesPart1>
    )
}

export default ReuseProfilesP1
