import React from 'react'
import {ReuseInputPopUpConatiner} from '../../styles/PopUp.styles'
function ReuseInputPopUp({label,initialVal,AdminAccess}) {
    return (
        <ReuseInputPopUpConatiner>
            <span id='LabelPopUp'>{label}</span>
            {AdminAccess==='false'? <input id='InputPopUp' disabled type='text' placeholder={initialVal}/>:  <input id='InputPopUp' type='text' placeholder={initialVal}/>}
          
        </ReuseInputPopUpConatiner>
    )
}

export default ReuseInputPopUp
