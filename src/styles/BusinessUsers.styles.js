import styled from 'styled-components'



export const BusinessUsersContainer=styled.div`
margin-top: 30px;
margin-left: 30px;
width: 1184px;
height: 696px;

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
    color:#212A54;
    font-weight: 700;
    font-size:14px;
}

#pe{
    position:absolute;
    left:30px;
    top:20px;
}
#username{
    position:absolute;
    left:168px;
    top:20px;
}
#bank{
    position:absolute;
    left:291px;
    top:20px;
}
#be{
    position:absolute;
    left:371px;
    top:20px;
}
#mobile{
    position:absolute;
    left:531px;
    top:20px;
}
#email{
    position:absolute;
    left:665px;
    top:20px;
}
#ts{
    position:absolute;
    left:846px;
    top:20px;
}
#as{
    position:absolute;
    left:1028px;
    top:20px;
}


`

export const BusinessUsersReuseContainer=styled.div`
 .burc{
         position: relative;
      height: 58px;
      width: 100%;
  }
border: 1px solid #F1F1F5;
span{
    font-size: 12px;
    color:#696974;
    font-weight: 600;
}

.bankIcon{
    cursor: pointer;
    position: absolute;
    top:20px;
    left:295px;
}

.InfoUser{
    position: absolute;
    cursor: pointer;
    top:10px;
    left:30px;
    display: flex;
    align-items: center;
    img{
        width:38px;
        height:38px;
        border-radius: 50%;
        object-fit: cover;
    }
}
.accessInfoUser{
    color:#D9D9DE;
    margin-right: 6.33px;
    width: 13.33px;
    height: 13.33px;
}


.BtnContainer{
   cursor: pointer;
    display: flex;
    align-items: center;
   
    width: 118px;
    height: 38px;
    position: absolute;
    top:10px;
    left: 846px;
    color:white;
    background-color: #639DFF;
    span{
        color:white;
        width: 75px;
        margin-left: 6.75px;
    }
    img{
        margin-left: 12px;
    }
   border-radius:8px;
}
.BtnContainerActive{
    position: absolute;
    top:10px;
    left: 1027px;

    width: 67px;
    height: 38px;
   border-radius:8px;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4ECAA5;
    span{
        color:white;
    }
    cursor: pointer;

}
#username{
    position: absolute;
    top:20px;
    left:168px;
}

#be{
    position: absolute;
    top:20px;
    left:371px;
}
#mobile{
    position: absolute;
    top:20px;
    left:531px;
}
#email{
    position: absolute;
    top:20px;
    left:665px;
}

`

export const Button=styled.button`
border-radius: 38px;
color:white;
background-color: ${(props)=>props.bg};
border:none;
outline:none;
height: 48px;
width: 255px;
`