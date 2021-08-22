import styled from 'styled-components'


export const Container=styled.div`

display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
padding: 10px 0;
position: relative;
`

export const ImageContainer=styled.div`
cursor: pointer;
margin-left:75px;
display: flex;
align-items: center;
img{
    width:38px;
}
span{
   font-size:24px;
   color:#212A54;
   font-weight: bold;
}

`

export const AdminContainer=styled.div`

display: flex;
align-items: center;
padding: 0 50px;
img{
    width:40px;
}
cursor: pointer;
.adminInfo{
    display: flex;
    flex-direction:column;
    margin:0 10px;
    .adminName{
        font-size:14px;
        color:#212A54;
        font-weight: bold;
    }
    .Admin{
        font-size: 13px;
        color:#808191;
    }
}
.drobdown{
   
}

.settings{
    position: absolute;
    display: ${(props)=>props.option};
    top: 62px;

   

}

#opt1{
    width:256px;
    display: flex;
    align-items: center;
    padding: 10px;
   background-color: white;
  span{
      margin-right: 30px;
  }
}
#opt2{
    width:256px;
    display: flex;
    align-items: center;
    padding: 10px;
   background-color: #04B4FF;
   color:white;
  span{
      margin-right: 30px;
  }
}
`