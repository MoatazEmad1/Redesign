import React from 'react'
import {ReuseImgTxtContainer} from '../../styles/Dashboard.styles'
function ReuseImgTxt({imgsrc,text,id}) {
    return (
        <ReuseImgTxtContainer id={id}>
            <div className='imageContainer'>
           
                <img id='imgit1' src={imgsrc[0]} alt=''/>
                <img id='imgit2' src={imgsrc[1]} alt=''/>
                <img id='imgit3' src={imgsrc[2]} alt=''/>
                <img id='imgit4' src={imgsrc[3]} alt=''/>
            </div>
            <div className='infoContainer'>
                  <span>{text}</span>
            </div>
        </ReuseImgTxtContainer>
    )
}

export default ReuseImgTxt
