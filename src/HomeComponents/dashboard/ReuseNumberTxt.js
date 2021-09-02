import React from 'react'
import {ReuseNumberTxtContainer} from '../../styles/Dashboard.styles'
function ReuseNumberTxt({Number,txt,id}) {
    return (
        <ReuseNumberTxtContainer id={id}>
            <div className='NumberContainer'>
             {Number}
            </div>

            <div className='TxtContainer'>
                {txt}
            </div>
        </ReuseNumberTxtContainer>
    )
}

export default ReuseNumberTxt
