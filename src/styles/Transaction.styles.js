import styled from 'styled-components'



export const TransactionContainer=styled.div`
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
#add{
    position: absolute;
    top:25px;
    left:367px;
}

#send{
    position: absolute;
    top:25px;
    left:444px;
}

#pay{
    position: absolute;
    top:25px;
    left:528px;
}

#req{
    position: absolute;
    top:25px;
    left:603px;
}

#all{
    position: absolute;
    top:25px;
    left:709px;
}
`
export const Button=styled.button`
background-color: ${(props)=>props.bg};
color:white;
padding:7px 20px 7px 20px;
border-radius: 10px;
outline:none;
border:none;
`

export const WraperContent=styled.div`

width: 100%;
height: 58px;
position: relative;

span{
    color:#212A54;
    font-weight: 700;
    font-size:14px;
}
#cx{
   position: absolute;
   top:20px;
   left:10px;
}
#td{
    position: absolute;
   top:20px;
   left:44px;
}
#te{
    position: absolute;
   top:20px;
   left: 161px;
}
#fn{
    position: absolute;
   top:20px;
   left: 296px;
}
#tn{
    position: absolute;
   top:20px;
   left: 400px;
}
#tne{
    position: absolute;
   top:20px;
   left: 484px;
}
#tce{
    position: absolute;
   top:20px;
   left: 610px;
}
#at{
    position: absolute;
   top:20px;
   left: 761px;
}
#me{
    position: absolute;
   top:20px;
   left: 833px;
}
#cdt{
    position: absolute;
   top:20px;
   left: 918px;
}
#ss{
    position: absolute;
   top:20px;
   left: 1063px;
}
`
export const TransactionReuseContainer=styled.div`
height: 58px;
position: relative;
border: 1px solid #F1F1F5;
span{
    color:#696974;
    font-size: 12px;
    font-weight:600 ;
}
#cx{
   position: absolute;
   top:20px;
   left:10px;
}
#td{
    position: absolute;
   top:20px;
   left:44px;
}
#te{
    position: absolute;
   top:20px;
   left: 161px;
}
#fn{
    position: absolute;
   top:20px;
   left: 296px;
}
#tn{
    position: absolute;
   top:20px;
   left: 400px;
}
#tne{
    position: absolute;
   top:20px;
   left: 528px;
}
#tce{
    position: absolute;
   top:20px;
   left: 667px;
}
#at{
    position: absolute;
   top:20px;
   left: 776px;
}
#me{
    position: absolute;
   top:20px;
   left: 847px;
}
#cdt{
    position: absolute;
   top:20px;
   left: 918px;
}
#ss{
    position: absolute;
   top:20px;
   left: 1083px;
}
`