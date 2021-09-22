import styled from 'styled-components'



export const SearchContainer=styled.div`
position: absolute;
z-index: 999;
display: flex;
flex-direction: column;
top:65px;
left:290px;
border: 1px solid rgba(241, 241, 245, 1);
display: ${(props)=>props.dispaly};
background-color: white;
width:600px;
#btn{
    width: 30%;
  margin-left: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
    background-color: #639DFF;
      padding:10px;
      border-radius:14px;
      border:none;
      color:white;
      cursor: pointer;
}
`