import styled from 'styled-components'

export const IndividualUserContainer=styled.div`
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
height: 58px;
position: relative;
width: 100%;

.search{
    position: absolute;
left: 30px;
bottom: 0px;
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
    position: absolute;
right: 30px;
bottom: 0px;
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

width: 100%;
height: 58px;
position: relative;
span{
    color:#212A54;
    font-weight: 700;
    font-size:14px;
}

#pe{
position: absolute;
top:20px;
left:29px;
}
#fs{
    position: absolute;
top:20px;
left:160px;

}
#le{
    position: absolute;
top:20px;  
left:256px;
}
#email{
    position: absolute;
top:20px;
left:353px;
}
#mobile{
    position: absolute;
top:20px;
left:504px;
}
#dob{
    position: absolute;
top:20px;
left:608px;
}
#childrens{
    position: absolute;
top:20px;
left:687px;
}
#events{
    position: absolute;
top:20px;
left:799px;
}
#ts{
    position: absolute;
top:20px;
left:894px;
}
#an{
    position: absolute;
top:20px;
left:1026px;

}
`

export const ReuseIndividualUserComponent=styled.div`
  .IndR{
         position: relative;
      height: 58px;
      width: 100%;
  }
 
   
 
border: 1px solid #F1F1F5;

  span{
        font-size: 12px;
        color: #696974;
        font-weight: 600;
        
    }
   
    .infoContainer{
        background-color: #639DFF;
        width: 98px;
        display: flex;
        align-items: center;
        height: 38px;
        border-radius: 8px;
        cursor: pointer;
        color:#FFFFFF;
        span{
            color:#FFFFFF;
            margin-left: 8px;
        }

    }
    .infobtnContainer{
        background-color: #4ECAA5;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        width: 67px;
        height: 38px;
        span{
            color:#FFFFFF;
           
        }
        position: absolute;
        top:10px;
        left:1026px;
    }
  
  .InfoUser{
 position: absolute;
 top:10px;
 left:30px;
 display: flex;
 align-items: center;
   cursor: pointer;
   .accessInfoUser{
    color:#D9D9DE;
    margin-right: 6.33px;
    width: 13.33px;
    height: 13.33px;
   }
    img{
        width:38px;
        height:38px;
        border-radius: 50%;
        object-fit: cover;
      
    }
  }
    #fs{
        position: absolute;
        top:20px;
        left:160px;
    }
    #ls{
        position: absolute;
        top:20px;
        left:256px;
    }
    #email{
        position: absolute;
        top:20px;
        left:353px;
    }
    #mobile{
        position: absolute;
        top:20px;
        left:504px;
    }
    #dob{
        position: absolute;
        top:20px;
        left:608px;
    }
    .ic1{
        position: absolute;
        bottom:10px;
        left:687px;
        width: 98px;
    }
    .ic2{
        position: absolute;
        bottom:10px;
        left:799px;
        width: 82px;
    }
    .ic3{
        position: absolute;
        bottom:10px;
        left:894px;
        width: 118px;
  
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