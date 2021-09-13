import styled from 'styled-components'

export const Container =styled.div`
background-color: white;
width: 256px;
height: 830px;
position: relative;
border-right: 1px solid #F3F4F6;
border-bottom: 1px solid #F3F4F6;
padding-top: 30px;
    img{
        width: 103px;
         height: 92px;
         position: absolute;
         bottom:0;
        left: 76px;
        right: 76px;
        object-fit: cover;
    }

.dashboard{
  color: black;
    cursor: pointer;
    background-color:${(props)=>props.selected?'#04B4FF':'white'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius:10px;
    padding: 10px;
    margin: 10px 5px;
}

`
export const LfContainer=styled.div`
width: 216px;
height: 56px;
cursor: pointer;

border-radius:12px;
background-color:${(props)=>props.selected?'#04B4FF':'white'};

color:${(props)=>props.selected?'#FFFFFF':'#212A54'} ;
position: relative;
margin-right:20px;
margin-left:20px;


.IconPS{
position: absolute;
top: 18px;
left: 22.78px;
bottom: 18px;
width: 18px;
height: 18px;
right: 174.86;

}
.iconpsContainer{
    position: relative;
    width: ${(props)=>props.wdIcon?props.wdIcon:18}px;
    height: ${(props)=>props.wdIcon?props.htIcon:18}px;
   
 
}
.parentImg{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
   

}
.centerImg{
    position: absolute;
    width: 10px;
    height: 5px;
    top: 6px;
    left: 4px;
   
 
}
.topRightImg{
    position: absolute;
    width: 4px;
    height: 4px;
    top: 0px;
    left: 14px;
    
}
.titlePs{
    position: absolute;
    left: 60px;
    top: 18px;
    bottom: 18px;
    right:81px;
    line-height: 20px;
    
   font-size: 14px;
   font-weight: 600;
   width: 114px;
}
.arrowPs{
    color: white ;
    position: absolute;
    top: 18px;
    bottom: 18px;
    left:182px;

}
`
