import styled from 'styled-components'

export const NotificationsAddContainer=styled.div`

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
margin-top:13px;
height: 825px;
position: relative;
`
export const WraperHeader=styled.div`


width: 100%;
display: flex;
justify-content: flex-end;

.sort{
position: absolute;
top:30px;
right: 30px;

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
flex-direction:column;
padding:10px;
.contentTop{
    position: absolute;
    left: 163px;
    top:98px
}
.contentBottom{
    position: absolute;
    left: 163px;
    top:177px
}
.fsinput{
    position: absolute;
    left: 163px;
    top:256px
}
.scinput{
    position: absolute;
    left: 163px;
    top:363px;
}
.tdinput{
    position: absolute;
    left: 163px;
    top:470px;
}
.fhinput{
    position: absolute;
    left: 163px;
    top:577px;
}
.fvinput{
    position: absolute;
    left: 163px;
    top:684px;

}
span{
    
font-size: 14px;
}
#content{
label{
    color: #696974;
    font-size: 14px;
    font-weight: 600;
   
}
}
#top{
    margin-bottom: 10px;
}
#bottom{
 display: flex;
 align-items: center;
    label{
        margin-right: 10px;
        margin-top: ;
    }
    
}
#textInput{
    border:1px solid #F1F1F5;
    outline: none;
    border-radius: 14px;
    width: 795px;
    height: 58px;
}


.btcontainer{
    border-radius: 14px;
width: 795px;
height: 58px;
border:1px solid #F1F1F5;
display: flex;
align-items: center;
span{
    font-size: 12px;
    font-weight: 600;
    color: #696974;
    margin-left: 20px;
}
}
.choosefile{
    width: 86px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #04B4FF;
    margin-left: 20px;
    span{
        color: white;
        font-size: 12px;
        font-weight: 600;
       width: 66px;
       margin: 0px auto;
    }
}
.textfile{
    span{
        color: #696974;
        font-size: 12px;
        font-weight: 600;
        margin-left: 10px;
    }
}
`