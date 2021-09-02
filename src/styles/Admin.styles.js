import styled from "styled-components";


export const AdminContainer=styled.div`
margin-top: 30px;
margin-left: 30px;
width: 1184px;

span{
    color:#212A54;
    font-size: 20px;
    font-weight:600 ;
}

`
export const WraperHeader=styled.div`
width: 100%;
height: 58px;
position: relative;

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
    font-weight: 400;
}
select{
    border:none;
    outline: none;
    color: #44444F;
    font-size: 14px;
    font-weight: 600;
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

span{
    color:#212A54;
    font-weight: 700;
    font-size:14px;
}
#user{
position: absolute;
left:30px;
top:20px;

}
#email{
position: absolute;
left:282px;
top:20px;
}
#ca{
position: absolute;
left:534px;
top:20px;
}
#re{
position: absolute;
left:710px;
top:20px;
}
#an{
position: absolute;
left:863px;
top:20px;
}

`
export const Wraper=styled.div`
border-radius:10px;
border:1px solid #F1F1F5;
background-color: #FFFFFF;
width:1122px;
margin-top:30px;

`
export const AdminReuse=styled.div`

border: 1px solid #F1F1F5;
position: relative;
height: 58px;
span{
    font-size: 12px;
    color:#696974;
    font-weight: 600;
}
.accesstimeIcon{
    color:#D9D9DE;
    margin-right: 6.33px;
    width: 13.33px;
    height: 13.33px;

}
.timeToUser{
    position: absolute;
    top:20px;
    left:30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#email{
    position: absolute;
    top:20px;
    left:282px;
}
#ca{
    position: absolute;
    top:20px;
    left:534px;
}
#re{
    position: absolute;
    top:20px;
    left:710px;
}
.adminBtns{
    position: absolute;
    top:10px;
    left:863px;
    
    width: 259px;
   
#edit{
    margin-right: 10px;
}
    
}
`
export const Button=styled.button`

background-color: ${(props)=>props.bg};
padding:7px 20px 7px 20px;
border:none;
outline: none;
color:white;
border-radius:8px;

`
export const AdminReuseInputFieldContainer=styled.div`
margin-bottom:20px;


span{
color:#212A54;
font-size:14px;
font-weight:bold;
}
input{
padding:10px;
margin-top:5px;
border:1px solid #F1F1F5;
border-radius: 10px;
outline: none;
}

`