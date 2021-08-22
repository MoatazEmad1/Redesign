import styled from "styled-components";


export const AdminContainer=styled.div`
margin: 20px;
flex:0.8;

span{
    color:#212A54;
    font-size: 20px;
    font-weight:bold ;
}

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
border-bottom:2px solid  #F1F1F5;;
span{
    color:#212A54;
    font-weight: bold;
    font-size:14px;
}
`
export const Wraper=styled.div`
background-color:white;
border-radius:10px;
padding:10px;
margin-top:20px;
`
export const AdminReuse=styled.div`
display: flex;
justify-content: space-between;
border-bottom: 2px solid #F1F1F5;
align-items: center;
span{
    font-size: 12px;
    color:#696974;
    font-weight: bold;
}
.accesstimeIcon{
    color:#D9D9DE;
}
.timeToUser{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.adminBtns{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
   
margin: 10px;
    
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

export const PopUp=styled.div`

position: absolute;
top:0px;
left:0px;
width: 100vw;
height: 100%;
background-color: rgba(0,0,0,0.3);
display: ${(props)=>props.showBlockOrNone};
.popupModel{
    .popupModelAddContact{
       
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
    width: 40%;
    height: 55%;
    border-radius: 15px;
    .headerPopUp{
        display: flex;
        width: 80%;
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
        align-items: center;
       
        .popupModelContentLf{
            width:45%;
            display: flex;
            flex-direction:column;
            .popupModelContentLfImage{
                width: 100%;
                height: 166px;
                img{
                    width: 100%;
                    border-radius:50%;
                    object-fit: cover;
                }
            }
        }
        .popupModelContentRt{
            width:45%;
            display: flex;
            flex-direction:column;
        }
    }
   
}

`
export const AdminReuseInputFieldContainer=styled.div`
margin-bottom:20px;


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
}

`