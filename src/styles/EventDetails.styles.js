import styled from 'styled-components'

export const EventsDetailsContainer=styled.div`



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
.contentInfo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
}
.info{
    width: 10%;
   span{
       font-size: 14px;
   }
}
.reuse-content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
}
.reuseinfo{
    width: 10%;
img{
    width: 38px;
    object-fit: cover;
    border-radius: 50%;
}
span{
    font-size: 12px;
}
}
`

export const WraperHeader=styled.div`

display: flex;
align-items: center;
justify-content: space-between;
.personInfo{
    display: flex;
align-items: center;

img{
    width:100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-right:5px;
}
}
.personContent{
    display: flex;
    flex-direction: column;
    
    span{
        font-size: 14px;
    }

}
.section{
    display: flex;
align-items: center;
margin-bottom: 5px;
span{
    margin-right: 5px;
}
}
.content{
    display: flex;
align-items: center;
margin-right:20px;
}
#fs{
color: #29DDBB;
}
#btn{
    background-color:#0561FC;
      padding:5px 20px;
      border-radius:10px;
      border:none;
      color:white;
      cursor: pointer;
}
`