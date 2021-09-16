import React from 'react'
import {ReuseInputPopUpConatiner} from '../../styles/PopUp.styles'
function ReuseInputPopUp({label,initialVal}) {
    return (
        <ReuseInputPopUpConatiner>
            <span>{label}</span>
            {label==='Email'||label==='Mobile Number'? <input disabled type='text' placeholder={initialVal}/>:  <input type='text' placeholder={initialVal}/>}
          
        </ReuseInputPopUpConatiner>
    )
}

export default ReuseInputPopUp
