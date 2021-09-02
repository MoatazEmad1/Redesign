import styled from 'styled-components'

export const OfferListAddContainer=styled.div`

margin-top: 30px;
margin-left: 30px;
width: 1184px;

span{
    color:#212A54;
    font-size: 20px;
    font-weight:600 ;
}
`

export const Wraper=styled.div`
border-radius:10px;
border:1px solid #F1F1F5;
background-color: #FFFFFF;
width:1122px;
margin-top:30px;
position: relative;
height: 345px;
`
export const WraperHeader=styled.div`

.btn{
    position: absolute;
  top: 30px;
  right: 10px;
  
}
}

`

export const Button=styled.button`

padding:10px;
border-radius: 10px;
color:white;
background-color: ${(props)=>props.bg};
border:none;
outline:none;
margin-right:20px;

`
export const WraperContent=styled.div`
span{
    font-size:14px;
   color: #212A54;
   font-weight: 700;
}
#name{
    position: absolute;
    top:98px;
    left:96px;
margin-bottom: 10px;
}
#input-name{
    position: absolute;
    top:127px;
    left:96px;
    border:1px solid #F1F1F5;
    border-radius:14px;
    outline: none;
    width: 795px;
    height: 58px;
    span{
        color: #696974;
        margin-left: 20px;
        font-size: 12px;
        font-weight: 600;
    }
}
#image{
    position: absolute;
    top:205px;
    margin-bottom: 10px;
    left:96px;
}
.btcontainer{
  color: #696974;
  border: 1px solid #F1F1F5;
  position: absolute;
    top:234px;
    left:96px;
    width: 795px;
    border-radius:14px;
    height: 58px;
    display: flex;
    align-items: center;
}
.choose{
width: 86px;
height: 36px;
background-color: #04B4FF;
border-radius: 8px;
display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
span{
    color: white;
    font-weight: 600;
    font-size: 12px;
}
}
.filetitle{
span{
    color: #696974;
    font-size: 12px;
    font-weight: 600;
    margin-left: 10px;
}
}
`