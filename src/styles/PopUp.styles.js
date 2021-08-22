import styled from 'styled-components'
export const ReuseInputPopUpConatiner=styled.div`
margin-bottom:20px;

display: flex;
flex-direction: column;
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
}`
export const PopUp=styled.div`

position: absolute;
top:0px;
left:0px;
width: 100vw;
height: 100%;
background-color: rgba(0,0,0,0.3);
display: ${(props)=>props.showBlockOrNone};
.popupModel{

    .popupModelShowUser{
       
            width: 80%;
            margin:0px auto;

           button{
               width: 100%;
               padding:10px;
               color:white;
               background-color: #04B4FF;
               border-radius: 40px;
           }
          
        }
    position: absolute;
    top: 50%;  
    left: 50%; 
    transform: translate(-50%, -50%); 
    background-color: white;
    height: ${(props)=>props.ht?props.ht:50}%;
    width: ${(props)=>props.ht?props.wd:50}%;
    border-radius: 15px;
    .btnsContainer{
            display: flex;
            justify-content: space-between;
    }
    .exportBtn{
        background-color: red !important;
    }
    .headerPopUp{
        display: flex;
        width: 90%;
        margin: 10px auto;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }
    .popupModelContent{
        display: flex;
    
        width: 90%;
        margin: 5px auto;
        justify-content: space-between;
      
       
        .popupModelContentLf{
           
            display: flex;
            flex-direction:column;
            .popupModelContentLfImage{
                width:166px;
                height: 166px;
                img{
                    width: 100%;
                    border-radius:50%;
                    object-fit: cover;
                }
            }
        }
       
        .popupModelContentMd{
            display: flex;
            flex-direction:column;
            
        }
        .popupModelContentRt{
         
            display: flex;
            flex-direction:column;
        }
    }
   
}

`