import styled from 'styled-components'


export const MyProfileContainer=styled.div`

margin-top: 30px;
margin-left: 30px;
width: 1184px;

span{
    color:#212A54;
    font-size: 20px;
    font-weight:600 ;
}

`


export const Wraper=styled.div`
position: relative;
.language{
    display: flex;
    align-items: center;
    margin-top: 10px;
    span{
        font-size: 14px;
        font-weight: 700;
    }
}
border-radius:10px;
border:1px solid #F1F1F5;
background-color: #FFFFFF;
width:1122px;
height: 626px;
margin-top:30px;

`
export const WraperHeader=styled.div`
width: 100%;
display: flex;
justify-content: space-between;



img{
    position: absolute;
    top:30px;
    left:103px;
    width: 166px;
    height: 166px;
    object-fit: cover;
    border-radius: 50%;
}

.Btns{
    position: absolute;
    top:30px;
    right: 30px;
   button{
      
   }
}
#save{
    background-color: #4ECAA5;
 padding:10px;
border-radius: 10px;
margin-right: 20px;
color:white;
border:none;
outline:none;

}
#cancel{
    background-color: #FF666A;
padding:10px;
border-radius: 10px;
color:white;
border:none;
outline:none;

}
`
export const WraperContent=styled.div`
margin-top: 10px;
display: flex;
flex-direction: column;

#photoAndChange{
    background-color: #04B4FF;
padding:10px;
border-radius: 8px;
color:white;
border:none;
outline:none;
margin-right: 5px;
width: 125px;
height: 38px;
font-size: 12px;
span{
       font-size: 12px;
       font-weight: 600;
       color: white;
   }
}
#remove{

padding:10px;
border-radius: 8px;
border:1px solid #FF666A;
color:#FF666A;
background-color: white;
outline:none;
height: 38px;
span{
    font-size: 12px;
       font-weight: 600;
       color: #FF666A;
}
}
#upload{
    position: absolute;
    left:103px;
    top:226px;
    margin-bottom: 10px;
}
#inputcontainer{
    
    display: flex;
flex-direction: column;

input{
    width: 795px;
   height: 58px;
    border:1px solid #F1F1F5;
    border-radius: 14px;
}
label{
    margin-bottom: 10px;
    color: #212A54;
    font-size: 14px;
    font-weight: 700;
}
}
.fsinput{
    position: absolute;
    left:103px;
    top:292px;
}
.scinput{
    position: absolute;
    left:103px;
    top:401px;
}
#btnChange{
    position: absolute;
    left:103px;
    top:508px;
  
}
.language{
    position: absolute;
    left:103px;
    top:576px; 
    label{
        color: #696974;
        font-weight: 600;
        font-size: 14px;
    } 
}
`