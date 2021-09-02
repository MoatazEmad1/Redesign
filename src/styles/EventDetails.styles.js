import styled from 'styled-components'

export const EventsDetailsContainer=styled.div`


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


border-radius:10px;
border:1px solid #F1F1F5;
background-color: #FFFFFF;
width:1122px;
margin-top:30px;
.contentInfo{
   position: relative;
   height: 58px;
   width: 100%;
   span{
       font-size: 14px;
       font-weight: 700;
   }
}

#pe{
position: absolute;
top:20px;
left:31px;
}

#pn{
    position: absolute;
top:20px;
left:514px;
}

#at{
    position: absolute;
top:20px;
left:968px;
}
#im{
    position: absolute;
top:10px;
left:31px;
}


.reuse-content{
    border-top: 1px solid #F1F1F5;
   position: relative;
   height: 58px;
   width: 100%;
   img{
    width: 38px;
    height: 38px;
    object-fit: cover;
    border-radius: 50%;
    }
    span{
    font-size: 12px;
    color: #696974;
    font-weight: 600;
    }
}




`

export const WraperHeader=styled.div`

position: relative;

width: 100%;
height: 144px;
.personInfo{
    position: absolute;
    top:30px;
    left:31px;
    display: flex;
align-items: center;
span{
    font-size: 20px;
    font-weight:600;
}
img{
    width:100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-right:24px;
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
  

}
.first{
    position: absolute;
    top:48px;
    left:314px;
}
.sc{
    position: absolute;
    top:48px;
    left:512px;
}
.td{
    position: absolute;
    top:48px;
    left:757px;
}
.fh{
    position: absolute;
    top:84px;
    left:314px;
}
.fv{
    position: absolute;
    top:84px;
    left:512px;
}
.six{
    position: absolute;
    top:84px;
    left:757px;
}
.__title1{
    position: absolute;
    top:48px;
    left:378px;
}
.__title2{
    position: absolute;
    top:48px;
    left:613px;
}
.__title3{
    position: absolute;
    top:48px;
    left:856px;
}
.__title4{
    position: absolute;
    top:84px;
    left:378px;
}
.__title5{
    position: absolute;
    top:76px;
    left:613px;
}
.__title6{
    position: absolute;
    top:84px;
    left:856px;
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
    background: linear-gradient(133.32deg, #0C9AFE , #0561FC );
      padding:10px;
      border-radius:8px;
      border:none;
      color:white;
      cursor: pointer;
}
`