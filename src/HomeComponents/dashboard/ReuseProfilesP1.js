import React from 'react'
import {ReuseProfilesPart1} from '../../styles/Dashboard.styles'
function ReuseProfilesP1({owner,wn,ed,co}) {
    return (
        <ReuseProfilesPart1>
            <div className='owner'>
                <img src={owner.imgsrc} alt=''/>
                <span>{owner.name}</span>
            </div>
            <span>{wn}</span>
            <span>{ed}</span>
            <span>{co}</span>
        </ReuseProfilesPart1>
    )
}

export default ReuseProfilesP1
