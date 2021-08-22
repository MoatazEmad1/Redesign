import styled from 'styled-components'

export const Container =styled.div`
background-color: white;
flex:0.2;
margin-top:1px;

display: flex;
flex-direction: column;
justify-content: space-evenly;
.LfImageContainer{
    width: 80%;
   
    bottom: 0;
    margin: 5px auto;
    img{
        width: 100%;
        object-fit: cover;
    }
}
.dashboard{
  color: black;
    cursor: pointer;
    background-color:${(props)=>props.selected?'#04B4FF':'white'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius:10px;
    padding: 10px;
    margin: 10px 5px;
}
`
export const LfContainer=styled.div`
cursor: pointer;
display: flex;
border-radius:10px;
background-color:${(props)=>props.selected?'#04B4FF':'white'};
justify-content: space-between;
color:${(props)=>props.selected?'white':'black'} ;

margin: 10px 5px;
padding: 10px;

`
export const InfoLfContainer=styled.span`



`