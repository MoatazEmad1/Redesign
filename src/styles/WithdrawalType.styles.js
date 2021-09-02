import styled from 'styled-components'

export const WithdrawalTypeContainer=styled.div`

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

`

export const WraperHeader=styled.div`
width: 100%;
height: 58px;
position: relative;

display: flex;
justify-content: space-between;
.search{
    position: absolute;
left: 30px;
bottom: 0px;
display: flex;
align-items: center;
.searchIcon{
    color:#04B4FF;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    border:1px solid #F1F1F5;
}
input{
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    border:1px solid #F1F1F5;
    padding: 4px;
    outline: none;
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
    padding:5px;
}
span{
    color:#696974;
    font-size:14px;
}
select{
    border:none;
    outline: none;
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

`

export const WraperContent=styled.div`


width: 100%;
height: 58px;
position: relative;
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
span{
    font-size: 14px;
    font-weight: 700;
    color: #212A54;
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
    position: absolute;
    top:10px;
    left:863px;
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

`