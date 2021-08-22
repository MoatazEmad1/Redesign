import styled from 'styled-components'



export const TransactionContainer=styled.div`
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
export const Button=styled.button`
background-color: ${(props)=>props.bg};
color:white;
padding:10px;
border-radius: 10px;
outline:none;
border:none;
`

export const WraperContent=styled.div`
display: flex;
margin: 10px 0;
justify-content: space-between;

align-items: center;

.content{
    width: 9%;
   
    display:flex;
    align-items: center;
    justify-content: space-between;
    span{
        font-size: 14px;
    }
}
`
export const TransactionReuseContainer=styled.div`
display: flex;

justify-content: space-between;

.content{
    width: 9%;
    
    display:flex;
    align-items: center;
    justify-content:flex-start;
    span{
        font-size: 12px;
    }
}

`