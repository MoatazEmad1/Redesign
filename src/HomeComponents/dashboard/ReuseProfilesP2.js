import React from 'react'
import {ReuseProfilesPart2} from '../../styles/Dashboard.styles'
function ReuseProfilesP2({Owner,Transaction_To,Amount,Message,Created_Date_Time}) {
    return (
        <ReuseProfilesPart2>
             
                <img id='ps2_img1' src={Owner.imgsrc} alt=''/>
                <span id='ps2_owner'>{Owner.name}</span>
          
            
                <img id='ps2_img2' src={Transaction_To.imgsrc} alt=''/>
                <span id='ps2_tit1'>{Transaction_To.name}</span>
           
            <span id='ps2_tit2'>{Amount}</span>
            <span id='ps2_tit3'>{Message}</span>
            <span id='ps2_tit4'>{Created_Date_Time}</span>
        </ReuseProfilesPart2>
    )
}

export default ReuseProfilesP2
