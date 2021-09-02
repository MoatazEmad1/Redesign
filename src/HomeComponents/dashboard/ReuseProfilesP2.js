import React from 'react'
import {ReuseProfilesPart2} from '../../styles/Dashboard.styles'
function ReuseProfilesP2({owner,transactionto,at,me,ct}) {
    return (
        <ReuseProfilesPart2>
             
                <img id='ps2_img1' src={owner.imgsrc} alt=''/>
                <span id='ps2_owner'>{owner.name}</span>
          
            
                <img id='ps2_img2' src={transactionto.imgsrc} alt=''/>
                <span id='ps2_tit1'>{transactionto.name}</span>
           
            <span id='ps2_tit2'>{at}</span>
            <span id='ps2_tit3'>{me}</span>
            <span id='ps2_tit4'>{ct}</span>
        </ReuseProfilesPart2>
    )
}

export default ReuseProfilesP2
