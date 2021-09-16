import styled from 'styled-components'

export const TransactionsContainer=styled.div`

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
height: 663px;
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
.DATE{
    display: flex;
    align-items: center;
   position: absolute;
   top: 20px;
   right: 400px;
   height: 38px;
   width: 314px;
   border: 1px solid #F1F1F5;
  border-radius: 14px;
   img{
       width: 20px;
       height: 20px;
       object-fit: cover;
       margin-right: 10px;
       margin-left: 15px;
   }
}
#datepicker{
 border: none;
 outline: none;
}
`

export const WraperImage=styled.div`
position: relative;
width: 100%;
height: 100px;
display:flex;
align-items: center;
.imageContainer{
    display:flex;
align-items: center;
}
span{
    position: absolute;
    left: 154px;
    top: 66px;
}
img{
    position: absolute;
    left: 30px;
    top: 30px;
    width:100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 24px;
}



`
export const WraperContent=styled.div`

width: 100%;
height: 58px;
margin-top: 30px;
position: relative;
span{
    font-size: 14px;
    font-weight: 700;
    color: #212A54;
}
#te{
    position: absolute;
    left: 31px;
    top: 30px;  
}

#fn{
    position: absolute;
    left: 191px;
    top: 30px;
}

#tne{
    position: absolute;
    left: 346px;
    top: 30px;
}

#tce{
    position: absolute;
    left: 497px;
    top: 30px;
}

#at{
    position: absolute;
    left: 673px;
    top: 30px;
}

#msg{
    position: absolute;
    left: 770px;
    top: 30px;
}

#cdt{
    position: absolute;
    left: 880px;
    top: 30px;
}

#st{
    position: absolute;
    left: 1051px;
    top: 30px;
}



`
export const WraperContentInfo=styled.div`
border: 1px solid #F1F1F5;
width: 100%;
height: 58px;
position: relative;
span{
    font-size: 12px;
    font-weight: 600;
    color: #696974;
}
#te{
    position: absolute;
    left: 31px;
    top: 20px;  
}

#fn{
    position: absolute;
    left: 191px;
    top: 20px;
}

#tne{
    position: absolute;
    left: 346px;
    top: 20px;
}

#tce{
    position: absolute;
    left: 497px;
    top: 20px;
}

#at{
    position: absolute;
    left: 673px;
    top: 20px;
}

#msg{
    position: absolute;
    left: 770px;
    top: 20px;
}

#cdt{
    position: absolute;
    left: 880px;
    top: 20px;
}

#st{
    position: absolute;
    left: 1072px;
    top: 20px;
}

`