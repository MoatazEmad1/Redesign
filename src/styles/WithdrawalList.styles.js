import styled from 'styled-components'


export const WithdrawalListContainer=styled.div`
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
    width: 314px;
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
#bnkr{
   position :absolute ;
   top:30px;
   left:423px;
}
#cd{
    position :absolute ;
   top:30px;
   left:568px;
}

`

export const Button=styled.button`

background-color: ${(props)=>props.bg};
color:white;
padding:7px 20px 7px 20px;
border-radius: 8px;
outline:none;
border:none;

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
#cx{
    position :absolute ;
   top:20px;
   left:10px;
}
#td{
    position :absolute ;
   top:20px;
   left:44px;
}
#ue{
    position :absolute ;
   top:20px;
   left:179px;
}
#me{
    position :absolute ;
   top:20px;
   left:279px;
}
#we{
    position :absolute ;
   top:20px;
   left:348px;
}
#ts{
    position :absolute ;
   top:20px;
   left:490px;
}
#tne{
    position :absolute ;
   top:20px;
   left:624px;
}
#at{
    position :absolute ;
   top:20px;
   left:784px;
}
#msg{
    position :absolute ;
   top:20px;
   left:871px;
}
#an{
    position :absolute ;
   top:20px;
   left:982px;
}

`

export const WithdrawalListReuseContainer=styled.div`
.wlrc{
position: relative;
height: 58px;
}
border: 1px solid #F1F1F5;

span{
    font-size: 12px;
    color:#696974;
    font-weight: 600;
}

.money-icon{
 
    color:#669E4F;
}
.bank-icon{
    color:black;
    cursor: pointer;
}
#cx{
    position :absolute ;
   top:20px;
   left:10px;
}
#td{
    position :absolute ;
   top:20px;
   left:44px;
}
#ue{
    position :absolute ;
   top:20px;
   left:179px;
}
#me{
    position :absolute ;
   top:20px;
   left:279px;
}
#we{
    position :absolute ;
   top:20px;
   left:397px;
}
#ts{
    position :absolute ;
   top:20px;
   left:544px;
}
#tne{
    position :absolute ;
   top:20px;
   left:691px;
}
#at{
    position :absolute ;
   top:20px;
   left:784px;
}
#msg{
    position :absolute ;
   top:20px;
   left:871px;
}
#paid{
    position :absolute ;
   top:15px;
   left:980px;
width: 46px;
display: flex;
justify-content: center;
align-items: center;
}
#dec{
    position :absolute ;
   top:15px;
   left:1038px;
  width: 71px;
  display: flex;
justify-content: center;
align-items: center;
}
`

export const Btn=styled.button`
background-color: ${(props)=>props.bg};
color:white;
border-radius: 38px;
outline:none;
border:none;
width: 225px;
height: 48px;


`