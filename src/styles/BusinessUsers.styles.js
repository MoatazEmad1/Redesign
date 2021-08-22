import styled from 'styled-components'



export const BusinessUsersContainer=styled.div`
margin: 20px;
flex:0.8;

span{
    color:#212A54;
    font-size: 20px;
    font-weight:bold ;
}


`

export const Wraper=styled.div`

background-color:white;
border-radius:10px;
padding:10px;
margin-top:20px;

`
export const WraperHeader=styled.div`

width: 100%;
display: flex;
justify-content: space-between;
.search{

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
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 2px solid #F1F1F5;
padding:10px;
span{
    
font-size: 14px;
}
.WraperContentLf{
    width:55%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.WraperContentRt{
    width:40%;
    display: flex;
    align-items: center;
   justify-content: flex-end;
   
span{
  margin-left: 20px;
}
}


`

export const BusinessUsersReuseContainer=styled.div`
display: flex;
padding:10px;
align-items: center;
justify-content: space-between;
border-bottom: 2px solid #F1F1F5;
.bankIcon{
    cursor: pointer;
}
span{
    
    font-size: 14px;
    }
.InfoUser{
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    img{
        width:38px;
        border-radius: 50%;
        object-fit: cover;
        margin-left: 2px;
    }
}
.accessInfoUser{
    color:#D9D9DE;
}
.WraperContentLf{
    width:66.5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}
.WraperContentRt{
    width:15%;
    display: flex;
    align-items: center;
   justify-content: flex-end;
}
.BtnContainer{
   cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:white;
    background-color: #639DFF;
    span{
        color:white;
    }
    padding:5px;
   border-radius:10px;
}
.BtnContainerActive{
    margin-left: 20px;
    color:white;
    background-color: #4ECAA5;
    span{
        color:white;
    }
    cursor: pointer;
    padding:5px;
   border-radius:10px;
}
`

export const Button=styled.button`
padding:10px;
border-radius: 10px;
color:white;
background-color: ${(props)=>props.bg};
border:none;
outline:none;
margin: 0 10px;
width: 255px;
`