import styled from 'styled-components'

export const TransactionsContainer=styled.div`

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

export const WraperImage=styled.div`
margin-top: 15px;
display:flex;
align-items: center;
.imageContainer{
    display:flex;
align-items: center;
}
img{
    width:100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
}



`
export const WraperContent=styled.div`
 display:flex;
align-items: center;
justify-content: space-between;
margin: 10px 0;
border-bottom: 2px solid #F1F1F5;

.Info{
    span{  
  font-size: 12px;
}
display: flex;
    justify-content: center;
width:12%;
}
`
export const WraperContentInfo=styled.div`
 display:flex;
align-items: center;
border-bottom: 2px solid #F1F1F5;
padding: 10px;
justify-content: space-between;
margin-top:10px;

.Info{
    span{  
        font-size: 12px;
        color: #696974;

    }
    display: flex;
    justify-content: center;
width:12%;
}


`