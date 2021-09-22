import styled from 'styled-components'

export const ContactContainer=styled.div`

margin-top: 30px;
margin-left: 30px;
width: 1184px;

#HeaderTitle{
    color:#212A54;
    font-size: 20px;
    font-weight:600 ;
}

.Description{
    width: 400px;
    height: 400px;
    margin: 30px;
}
.Title{
    margin: 30px;
    display: flex;
    flex-direction: column;
    label{
        color:#212A54;
    font-size: 14px;
    font-weight:700 ;
    margin-bottom: 10px;
    }
    input{
        width: 314px;
        padding:15px 16px 15px 16px;
        border:1px solid #F1F1F5;
        border-radius: 14px;
        outline: none;

    }
}
`

export const Wraper=styled.div`

border-radius:10px;
border:1px solid #F1F1F5;
background-color: #FFFFFF;
width:1122px;
margin-top:30px;
.Description{
    width: 700px;
}
`
export const WraperHeader=styled.div`
width: 100%;
height: 58px;
position: relative;

.search{
    width: 314px;
    height: 34px;
    border-radius: 10px;
    border:1px solid #F1F1F5;
    position: absolute;
    left: 30px;
    bottom: 0px;
    display: flex;
    align-items: center;

.searchIcon{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 38px;
  border-right: 1px solid #F1F1F5;
}
input{
    
    border:none;
    outline: none;
    width: 250px;
   padding-left: 20px;
    height: 30px;
}
}
.sort{
    position: absolute;
right: 30px;
bottom: 0px;
display: flex;
align-items: center;
.sortUsers{
    border:1px solid  #F1F1F5;
    border-radius: 10px;
    width: 200px;
    height: 38px;
    position: relative;
}
span{
    color:#696974;
    font-size:14px;
    font-weight: 400;
}
.sortby{
    position: absolute;
    top:10px;
    left:12px;
}
.default{
    position: absolute;
    top:10px;
    left:64px;
    color: #44444F;
}

.downarrowContainer{
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
   height: 38px;
   width: 28px;

   border-left: 1px solid #F1F1F5;
   color: #04B4FF;
}
.btn{
    margin-left:20px;
  button{
      background-color: #04B4FF;
      padding:5px 20px;
      border-radius:10px;
      border:none;
      color:white;
      cursor: pointer;
  }
}
}
.Editbtn{
    position: absolute;
    bottom:0px;
    right: 0px;
}
`

export const WraperContent=styled.div`

width: 100%;
height: 58px;
position: relative;

span{
    color:#212A54;
    font-weight: 700;
    font-size:14px;
}
#id{
    position: absolute;
    top:20px;
    left:30px;
}
#name{
    position: absolute;
    top:20px;
    left:322px;
}
#action{
    position: absolute;
    top:20px;
    left:863px;
}
`
export const WraperInfo=styled.div`

border: 1px solid #F1F1F5;
position: relative;
height: 58px;
span{
    font-size: 12px;
    color:#696974;
    font-weight: 600;
}

button{
    padding:10px;
    border-radius: 10px;
    border:none;
    outline: none;
    background-color: #639DFF;
    color:white;
}
#id{
    position: absolute;
    top:20px;
    left:30px;
}
#name{
    position: absolute;
    top:20px;
    left:322px;
}
#action{
    position: absolute;
    top:10px;
    left:863px;
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