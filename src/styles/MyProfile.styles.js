import styled from 'styled-components'


export const MyProfileContainer=styled.div`

margin: 20px;
flex:0.8;

span{
    color:#212A54;
    font-size: 20px;
    font-weight:bold ;
}

`


export const Wraper=styled.div`

.language{
    display: flex;
    align-items: center;
    margin-top: 10px;
    span{
        font-size: 14px;
    }
}
background-color:white;
border-radius:10px;
padding:10px;
margin-top:20px;
`
export const WraperHeader=styled.div`
width: 100%;
display: flex;
justify-content: space-between;


.ImageContainer{
width:25%;
img{
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
}
}
.Btns{
   button{
       margin-right: 10px;
   }
}
#save{
    background-color: #4ECAA5;
 padding:10px;
border-radius: 10px;
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
border-radius: 10px;
color:white;
border:none;
outline:none;
margin-right: 10px;
width: 150px;
font-size: 12px;
}
#remove{

padding:10px;
border-radius: 10px;
border:1px solid #FF666A;
color:#FF666A;
background-color: white;
outline:none;
}
#upload{
    margin-bottom: 10px;
}
#inputcontainer{
    display: flex;
flex-direction: column;
margin-bottom: 10px;
input{
    width: 70%;
    padding:10px;
    border:1px solid gray;
    border-radius: 10px;
}


}
`