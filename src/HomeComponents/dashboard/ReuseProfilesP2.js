import React from 'react'
import {ReuseProfilesPart2} from '../../styles/Dashboard.styles'
function ReuseProfilesP2({owner,transactionto,at,me,ct}) {
    return (
        <ReuseProfilesPart2>
             <div className='owner'>
                <img src={owner.imgsrc} alt=''/>
                <span>{owner.name}</span>
            </div>
             <div className='transactionto'>
                <img src={transactionto.imgsrc} alt=''/>
                <span>{transactionto.name}</span>
            </div>
            <span>{at}</span>
            <span>{me}</span>
            <span>{ct}</span>
        </ReuseProfilesPart2>
    )
}

export default ReuseProfilesP2
