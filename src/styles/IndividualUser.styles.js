import styled from 'styled-components'

export const IndividualUserContainer=styled.div`


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
border-bottom:2px solid  #F1F1F5;
span{
    color:#212A54;
    font-weight: bold;
    font-size:14px;
}

.WraperContentLf{
width:35%;
display: flex;
align-items: center;
justify-content: space-between;
}
.WraperContentRt{
width:60%;
display: flex;
align-items: center;
justify-content: space-evenly;
}
`

export const ReuseIndividualUserComponent=styled.div`
    span{
        font-size: 12px;
        color: #696974;
        
    }
    padding: 10px;
    border-bottom:2px solid  #F1F1F5;

    .WraperContentLf{
        width:35%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }
    .WraperContentLfSpan{
        margin-right:30px;
    }
    .WraperContentContainer{
      
        
        display: flex;
        align-items: center;
        justify-content: space-between;
      margin-left: 70px;
    }
    .WraperContentRt{
        width:60%;
display: flex;
align-items: center;
justify-content: space-evenly;
    }
    .infoContainer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #639DFF;
        padding:5px;
        border-radius: 10px;
        cursor: pointer;
        color:white;
        span{
            color:white;
        }

    }
    .infobtnContainer{
        background-color: #4ECAA5;
        padding:5px 10px;
        border-radius: 10px;
        span{
            color:white;
        }

    }
   display: flex;
   align-items: center;
   justify-content: space-between;
  .InfoUser{
    display: flex;
   align-items: center;
   justify-content: space-between;
   cursor: pointer;
   .accessInfoUser{
       color: #D9D9DE;
   }
    img{
        width:38px;
        border-radius: 50%;
        object-fit: cover;
        margin-left: 2px;
    }
  }
    
    
`
export const Button=styled.button`

background-color: ${(props)=>props.bg};
padding:10px;
border:none;
outline: none;
color:white;
border-radius:10px;

`