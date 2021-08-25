import styled from 'styled-components'

export const Container=styled.div`
flex:0.8;
margin:20px;
span{
    font-weight:600;
    color:#212A54;
}
`

export const TopDashBoardContainer=styled.div`
width: 100%;

display: flex;
flex-direction: column;
.top{
    display: flex;
    justify-content:space-between;
    margin-top:5px;
}
.bottom{
    display: flex;
    justify-content:space-between;
    margin-top:5px;
}
`
export const ReuseImgTxtContainer=styled.div`
background-color: white;
margin-left:5px;
width:354px;
height: 103px;
border-radius: 10px;
justify-content: flex-start;

.imageContainer{
    display: flex;
    margin-bottom:3px;
    img{
        width: 33px;
        margin-right: 1px;
        border-radius: 50%;
    }
    margin-left:5px;
    margin-top:10px;
}
.infoContainer{
color: #212A54;
font-size:16px;
font-weight:bold;
margin-left:5px;
margin-top:20px;
}

`
export const ReuseNumberTxtContainer=styled.div`
background-color: white;
margin-left:5px;
width:354px;
height: 103px;
border-radius: 10px;
justify-content: flex-start;

.NumberContainer{
    color:#171725;
    font-size:25px;
    font-weight: bold;
    margin-left:5px;
    margin-top:10px;
}
.TxtContainer{
    margin-left:5px;
margin-top:20px;
font-size:16px;
color: #212A54;
font-weight: bold;
}

`


export const BottomContainer=styled.div`
display: flex;
justify-content: space-between;

margin-top: 10px;

`

export const LeftDashBoardContainer=styled.div`
width: 47%;
.DashBoardTxt{
    align-items: center;
    display: flex;
    justify-content:space-between;
    margin-bottom:10px;
    .InfoTxt{
        font-size:20px;
        color:#212A54;
        font-weight:bold;
    }
    .SeeMore{
        font-size:12px;
        color:#808191;
    }
}


`

export const RightDashBoardContainer=styled.div`
width: 47%;
.DashBoardTxt{
    display: flex;
    justify-content:space-between;
    margin-bottom:10px;
    align-items: center;
    .InfoTxt{
        font-size:20px;
        color:#212A54;
        font-weight:bold;
    }
    .SeeMore{
        font-size:12px;
        color:#808191;
    }
}



`
export const UsersDashBoardContainer=styled.div`
width: 100%;


`
export const UsersDashBoardHeader=styled.div`
background-color: #212A54;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
border-top-left-radius:10px;
border-top-right-radius:10px;
padding: 15px;
`
export const ReuseProfilesPart1=styled.div`
padding: 15px;
background-color: white;
color: #696974;
font-size:12px;
margin-bottom: 1px;
display: flex;
justify-content: space-between;
align-items: center;
.owner{
    display: flex;
    align-items: center;
    img{
        margin-right:5px;
        width: 33px;
        border-radius:50%;
    }
}
`
export const ReuseProfilesPart2=styled.div`
padding: 15px;
background-color: white;
color: #696974;
font-size:12px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1px;
font-size:12px;
.owner{
    display: flex;
    align-items: center;
    img{
        margin-right:5px;
        width: 33px;
        border-radius:50%;
    }
}
.transactionto{
    display: flex;
    align-items: center;
    img{
        margin-right:5px;
        width: 33px;
        border-radius:50%;
    }
}
`