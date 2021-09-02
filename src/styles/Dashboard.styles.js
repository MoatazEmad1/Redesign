import styled from 'styled-components'

export const Container=styled.div`
.Wraper{
    margin-top: 30px;
margin-left: 30px;
width: 100%;

}
width: 1184px;
span{
    color:#212A54;
    font-size: 20px;
    font-weight:600 ;
}
position: relative;


#img_txt1{
position: absolute;
left:29px;
top:30px;


}
#img_txt2{
    position: absolute;
    left:413px;
    top:30px;
}
#num_txt1{
    position: absolute;
    left:797px;
    top:30px;
}
#num_txt2{
position: absolute;
left:29px;
top:153px;
}
#num_txt3{
    position: absolute;
    left:413px;
    top:153px;
}
#num_txt4{
    position: absolute;
    left:797px;
    top:153px;
}

`

export const ReuseImgTxtContainer=styled.div`
background-color: #FFFFFF;
width:354px;
height: 103px;
border-radius: 20px;
position: relative;
.imageContainer{
    display: flex;
  position: absolute;
  left:16px;
  top:16px;
    img{
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
  
}
.infoContainer{
    position: absolute;
    left:16px;
    bottom: 16px;
color: #212A54;
font-size:16px;
font-weight:600;
margin-left:5px;
margin-top:20px;
}

`
export const ReuseNumberTxtContainer=styled.div`
background-color: white;
position: relative;
width:354px;
height: 103px;
border-radius: 20px;


.NumberContainer{
    position: absolute;
    top:16px;
    left:16px;
    color:#171725;
    font-size:25px;
    font-weight: 700;
   
}
.TxtContainer{
    position: absolute;
   bottom:16px;
    left:16px;
    color: #212A54;
font-size:16px;
font-weight:600;
}

`


export const BottomContainer=styled.div`
display: flex;
position: absolute;
top:286px;
left:29px;

`

export const LeftDashBoardContainer=styled.div`
margin-right: 30px;
.DashBoardTxt{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
    .InfoTxt{
       
        font-size:20px;
        color:#212A54;
        font-weight:600;
        margin-bottom: 20px;
    }
    .SeeMore{
      
        font-size:12px;
        color:#808191;
        font-weight: 600;
        margin-bottom: 20px;
    }

`

export const RightDashBoardContainer=styled.div`

.DashBoardTxt{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .InfoTxt{
      
        font-size:20px;
        color:#212A54;
        font-weight:600;
        margin-bottom: 20px;
    }
    .SeeMore{
        font-size:12px;
        color:#808191;
        font-weight: 600;
        margin-bottom: 20px;
    }
}



`
export const UsersDashBoardContainer=styled.div`
width: 100%;


`
export const UsersDashBoardHeader=styled.div`
background-color: #212A54;
span{
   color: #FFFFFF; 
   font-weight: 600;
}
position: relative;
width: 546px;
height: 46px;
border-top-left-radius:10px;
border-top-right-radius:10px;
#tit1{
    position: absolute;
    top:14px;
    left:10px;
    font-size: 14px;
}
#tit2{
    position: absolute;
    top:14px;
    left:196px;
    font-size: 12px;
}
#tit3{
    position: absolute;
    top:14px;
    left:321px;
    font-size: 12px;
}
#tit4{
    position: absolute;
    top:14px;
    left:434px;
    font-size: 12px;
}
#rttit1{
    position: absolute;
    top:14px;
    left:10px;
    font-size: 14px;
    
}
#rttit2{
    position: absolute;
    top:14px;
    left:154px;
    font-size: 12px;
}
#rttit3{
    position: absolute;
    top:14px;
    left:272px;
    font-size: 12px;
}
#rttit4{
    position: absolute;
    top:14px;
    left:349px;
    font-size: 12px;
}
#rttit5{
    position: absolute;
    top:14px;
    left:415px;
    font-size: 12px;
}

`
export const ReuseProfilesPart1=styled.div`
width: 546px;
height: 52px;
background-color: white;
span{
    color: #696974;
    font-size:12px;
    font-weight: 400;
}

position: relative;
border: 1px solid #F1F1F5;

    img{
        width: 32px;
        height: 32px;
        border-radius:50%;
    }

    #ps_img{
    position: absolute;
    top:10px;
    left:10px;
    }
    #ps_owner{
        position: absolute;
        top:17px;
        left:52px;
    }
    #ps_wn{
        position: absolute;
        top:17px;
        left:196px;
    }
    #ps_ed{
        position: absolute;
        top:17px;
        left:321px;
    }
    #ps_co{
        position: absolute;
        top:17px;
        left:434px;
    }

`
export const ReuseProfilesPart2=styled.div`
width: 546px;
height: 52px;
background-color: white;
span{
    color: #696974;
    font-size:12px;
    font-weight: 400;
}

position: relative;
border: 1px solid #F1F1F5;

    img{
        width: 32px;
        height: 32px;
        border-radius:50%;
    }

#ps2_img1{
    position: absolute;
    top:10px;
    left:10px;
}
#ps2_owner{
    position: absolute;
top:17px;
left:52px;
}
#ps2_img2{
    position: absolute;
top:10px;
left:154px;
}
#ps2_tit1{
    position: absolute;
top:17px;
left:198px;
}
#ps2_tit2{
    position: absolute;
top:17px;
left:272px;
}
#ps2_tit3{
    position: absolute;
top:17px;
left:349px;
}
#ps2_tit4{
    position: absolute;
top:17px;
left:415px;
}
`