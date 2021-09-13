import styled from 'styled-components'


export const Container=styled.div`
width: 1440px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
height: 70px;
position: relative;
border-bottom: 1px solid #F3F4F6;
`

export const ImageContainer=styled.div`
cursor: pointer;
width: 256px;
height: 70px;
left: 0px;
top: 0px;
position: absolute;
border-right: 1px solid #F3F4F6;

z-index: 999;
display: flex;
align-items: center;
img{
    position: absolute;
    width:55px;
    height:55px;
    top:10px;
    left:75px;
}
span{
    position: absolute;
    top:19px;
    right:70px;
   font-size:24px;
   color:#212A54;
   font-weight: 700;

   width: 59px;
   height: 32px;
}

`

export const AdminContainer=styled.div`

display: flex;
align-items: center;
width: 256px;

background-color: red;
img{
    position: absolute;
    top:15px;
    right:176px;
    width:40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}
cursor: pointer;
.adminInfo{
    position: absolute;
    top:15px;
    right:82px;
    display: flex;
    flex-direction:column;
    margin:0 10px;
    .adminName{
        font-size:14px;
        color:#212A54;
        font-weight: 600;
    }
    .Admin{
        font-size: 13px;
        color:#808191;
        font-weight: 400;
    }
}
.drobdown{
    position: absolute;
    top:25px;
   
    right:28px;
}

.settings{
    position: absolute;
    display: ${(props)=>props.option};
    top: 69px;
    right: 0px;
z-index: 999;
border:1px solid #F3F4F6;

}

#opt1{
    position: relative;
    width:256px;
    background-color: white;
    height: 70px;
   color: #212A54;
 #set{
     position: absolute;
     top:25px;
     left:42.5px;
 }
 #profile{
    position: absolute;
     top:25px;
     left:80px;
 }
 #arr{
    position: absolute;
     top:25px;
     left:202px;
 }
 span{
     font-size: 14px;
     font-weight: 600;
 }
}
#opt1:hover{
    background-color: #04B4FF;
    color:  white;
}
#opt2{
    position: relative;
    width:256px;
  
    height: 70px;
   background-color: white;
 #set{
     position: absolute;
     top:25px;
     left:42.5px;
 }
 #profile{
    position: absolute;
     top:25px;
     left:80px;
 }
 #arr{
    position: absolute;
     top:25px;
     left:202px;
 }
 span{
     font-size: 14px;
     font-weight: 600;
 }
   
 background-color: white;
   color: #212A54;
  
}
#opt2:hover{
    background-color: #04B4FF;
    color:  white;
}
`