import styled from 'styled-components'

export const EventsContainer=styled.div`

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

`
export const WraperHeader=styled.div`
width: 100%;
height: 58px;
position: relative;

.search{
    width: 314px;
    height: 34px;
    border-radius: 10px;
    border:1px solid #F1F1F5;
    position: absolute;
    left: 30px;
    bottom: 0px;
    display: flex;
    align-items: center;

.searchIcon{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 38px;
  border-right: 1px solid #F1F1F5;
}
input{
    
    border:none;
    outline: none;
    width: 250px;
   padding-left: 20px;
    height: 30px;
}
}
.sort{
    position: absolute;
right: 30px;
bottom: 0px;
display: flex;
align-items: center;
.sortUsers{
    border:1px solid  #F1F1F5;
    border-radius: 10px;
    width: 200px;
    height: 38px;
    position: relative;
}
span{
    color:#696974;
    font-size:14px;
    font-weight: 400;
}
.sortby{
    position: absolute;
    top:10px;
    left:12px;
}
.default{
    position: absolute;
    top:10px;
    left:64px;
    color: #44444F;
}

.downarrowContainer{
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
   height: 38px;
   width: 28px;

   border-left: 1px solid #F1F1F5;
   color: #04B4FF;
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

width: 100%;
height: 58px;
position: relative;
span{
    font-size: 14px;
    font-weight: 700;
    color: #212A54;
}
#cx{
    position: absolute;
    top:20px;
    left:10px;
}
#ed{
    position: absolute;
    top:20px;
    left:44px;
}
#us{
    position: absolute;
    top:20px;
    left:132px;
}
#or{
    position: absolute;
    top:20px;
    left:206px;
}
#et{
    position: absolute;
    top:20px;
    left:311px;
}
#ete{
    position: absolute;
    top:20px;
    left:438px;
}
#el{
    position: absolute;
    top:20px;
    left:566px;
}
#cs{
    position: absolute;
    top:20px;
    left:673px;
}
#ts{
    position: absolute;
    top:20px;
    left:825px;
}
#ct{
    position: absolute;
    top:20px;
    left:978px;
    
}
`

export const EventsReuseContainer=styled.div`

border: 1px solid #F1F1F5;
position: relative;
height: 58px;
span{
    font-size: 12px;
    color:#696974;
    font-weight: 600;
}


.info1{
    display: flex;
    align-items: center;
    background-color: #639DFF;
 
    border-radius:8px;
    color:white;
    width: 117px;
    height: 38px;
    span{
    font-size: 12px;
    color:white;
    font-weight: 600;
    margin-left: 8px;
   
}
img{
        margin-left: 13px;
    }
}
.info2{
    display: flex;
    align-items: center;
    background-color: #639DFF;
  
    border-radius:8px;
    color:white;
    width: 117px;
    height: 38px;
    span{
    font-size: 12px;
    color:white;
    font-weight: 600;
    margin-left: 8px;
    }
    img{
        margin-left: 13px;
    }
}
#cx{
    position: absolute;
    top:20px;
    left:10px;
}
#ed{
    position: absolute;
    top:20px;
    left:44px;
}
#us{
    position: absolute;
    top:20px;
    left:132px;
}
#or{
    position: absolute;
    top:20px;
    left:206px;
}
#et{
    position: absolute;
    top:20px;
    left:311px;
}
#ete{
    position: absolute;
    top:20px;
    left:438px;
}
#el{
    position: absolute;
    top:20px;
    left:566px;
}
#cs{
    position: absolute;
    top:10px;
    left:673px;
}
#ts{
    position: absolute;
    top:10px;
    left:825px;
}
#ct{
    position: absolute;
    top:20px;
    left:978px;
    word-spacing: 5px;
}
`

