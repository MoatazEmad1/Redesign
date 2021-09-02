import React from 'react'
import {ReuseImgTxtContainer} from '../../styles/Dashboard.styles'
function ReuseImgTxt({imgsrc,text,id}) {
    return (
        <ReuseImgTxtContainer id={id}>
            <div className='imageContainer'>
                <img src={imgsrc[0]} alt=''/>
                <img src={imgsrc[1]} alt=''/>
                <img src={imgsrc[2]} alt=''/>
                <img src={imgsrc[3]} alt=''/>
            </div>
            <div className='infoContainer'>
                  <span>{text}</span>
            </div>
        </ReuseImgTxtContainer>
    )
}

export default ReuseImgTxt
