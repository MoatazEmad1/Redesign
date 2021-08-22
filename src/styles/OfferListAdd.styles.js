import styled from 'styled-components'

export const OfferListAddContainer=styled.div`


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
justify-content: flex-end;

.btn{
    margin-right:20px;
  
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
margin-right:5px;

`
export const WraperContent=styled.div`

display: flex;
flex-direction:column;
justify-content: center;
span{
    font-size:12px;
    margin: 15px 0;
}
#input-name{
    border:1px solid gray;
    border-radius:10px;
    outline: none;
    padding: 10px;
}
#file{
  color: #696974;
}
`