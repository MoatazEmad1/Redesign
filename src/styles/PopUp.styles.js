import styled from 'styled-components'
export const ReuseInputPopUpConatiner=styled.div`
margin-bottom:20px;

display: flex;
flex-direction: column;
span{
color:#212A54;
font-size:14px;
font-weight:700;
margin-bottom: 16px;
}
input{
padding:15px 16px 15px 16px;
border:1px solid #F1F1F5;
border-radius: 14px;
outline: none;
}`
export const PopUp=styled.div`

position: absolute;
top:0px;
z-index: 999;
left:0px;
width: 1440px;
height: 1040px;
background-color: rgba(0,0,0,0.2);
display: ${(props)=>props.showBlockOrNone};
.popupModel{
  
    display: flex;
    flex-direction: column;
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
    height: ${(props)=>props.ht?props.ht:500}px;
    width: ${(props)=>props.ht?props.wd:500}px;
    border-radius: 10px;
    .btnsContainer{
        width: 90%;
        margin:0px auto;
            display: flex;
            justify-content: space-between;
    }
    .exportBtn{
        background-color: red !important;
    }
    .headerPopUp{
        display: flex;
        width: 90%;
        margin: 0px auto;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        margin-top: 31px;
        margin-bottom: 34px;
    }
    #title{
        font-size: 20px;
        font-weight: 600;
        color: #212A54;
    }
    #close{
          margin-bottom: 3px;
         font-size: 16px;
          color: #262F56;
    }
    .BS_Bank{
        padding-bottom: 18px;
        border-bottom: 1px solid #212A54;
    }
    .BS_Bank_Title{
        margin-left: 175px;
    }
    #closeBtn{
        width: 30px;
        height: 30px;
        background-color: #F1F1F5;
        border-radius: 50%;
       display: flex;
       justify-content: center;
       align-items: center;
    }
    .popupModelContent{
        display: flex;
    
        width: 90%;
        margin: 0px auto;
        justify-content: space-between;
      
      
        .popupModelContentLf{
           
            display: flex;
            flex-direction:column;
           
               
                img{
                    width:166px;
                   height: 166px;
                     margin-bottom: 44px;
                    border-radius:50%;
                    object-fit: cover;
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
    .popupModelAddContact{
        width: 90%;
        margin: 0px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 48px;
        border-radius: 38px;
        background-color: #04B4FF;
        span{
            font-size: 14px;
            font-weight: 600;
            color: #FFFFFF;
        }
    }
   
}

.Role{
    display: flex;
    flex-direction: column;
    margin-bottom:20px;
    label{
        font-size: 14px;
        color: #212A54;
        font-weight: 700;
        margin-bottom: 16px;
    }
    select{
        width:100px;
        padding:15px 16px 15px 16px;
        border:1px solid #F1F1F5;
        border-radius: 14px;
        outline: none;
    }
}

`