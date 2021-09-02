import styled from 'styled-components'


export const InsightsContainer=styled.div`






width: 1184px;
span{
    color:#212A54;
    font-size: 20px;
    font-weight:600 ;
}
.rowLineContainer{
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-left: 30px;
    width: 1122px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
   
    
}
.fsChart{
    width: 354px;
    height: 416px;
background-color:white ;
border-radius: 20px;
position: relative;

span{
    position:absolute;
        top:30px;
        left:30px;
    font-size: 20px;
    color: #212A54;
    font-weight: bold;
}
}
.MdChart{
    position: relative;
    width: 354px;
    height: 416px;
    background-color:white ;
    border-radius: 20px;
   
    span{
        position:absolute;
        top:30px;
        left:30px;
        font-size: 20px;
        color: #212A54;
        font-weight: bold;
    }
}
.lsChart{
    position: relative;
    width: 354px;
    height: 416px;
    background-color:white ;
    border-radius: 20px;
  
    span{
        position:absolute;
        top:30px;
        left:30px;
        font-size: 20px;
        color: #212A54;
        font-weight: bold;
    }
}
#progress{
    position: absolute;
    top:104px;
    left:37px;

    width: 185px;
    height: 185px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 20px solid #FD2227;
    border-left: 20px solid #FFE5D3;
    border-radius: 50%;
   
}

#bar{
    background-color:#FD2227;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        position: absolute;
        top:80px;
          left:77px;
        color:white;
    }
}
.lineContainer{
    background-color: white;
    width:258px;
    height: 171px;
   
    border-radius: 20px;
    position: relative;
}
.lineInfo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}
.linemd{
   
    position: absolute;
    top: 60px;
    width: 218px;
    height: 61px;
}
#amount{
    position: absolute;
    top: 20px;
  right: 20px;
}
.lineInfoTitle{
   position: absolute;
   top:20px;
   left:20px;
    color:#212A54;
    width: 155px;
    font-size: 16px;
    font-weight:700 ;
}
}



.LfLineChart{
    background-color: white;
    border-radius: 20px;
    position: relative;
    width: 738px;
    height: 537px;
    margin-right: 30px;
}
.LfLineChartHeader{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.LfLineChartHeaderLf{
    display: flex;
    flex-direction: column;
    width: 40%;
}
.LfLineChartHeaderLfContainer{
    display: flex;
    justify-content: space-between;
    margin-top:20px;
    margin-left: 20px;
   
}
.hdtitle{
    span{
        color: #212A54;
        font-size: 16px;
        font-weight: 700;
    }
}
.this_month{
    span{
        font-size: 14px;
        color: #696974;
        font-weight: 400;
    }
}
.last_month{
    position: absolute;
    top:20px;
    left:518px;

    span{
        margin-right: 30px;
        font-size: 14px;
        color: #808191;
        font-weight: 400;
    }
}
.LfLineChartHeaderRt{
    display: flex;
    flex-direction: column;
    width: 40%;
}
.LfLineChartHeaderRtContainer{
    display: flex;
    justify-content: space-between;
    margin-top:5px;
}
.RtDoughnutChart{
    width:354px;
    height:537px;
    background-color: white;
    border-radius: 20px;
    position: relative;

    span{
        color: #000000;
        font-size: 14px;
        font-weight: 400;
    }
    display: flex;
    flex-direction: column;
}

#title{
    color: #212A54;
    position: absolute;
left:30px;
top:30px;
        font-size: 16px;
        font-weight: 700;
}
#elem1{
    position: absolute;
left:30px;
top:313px;
}
#elem2{
    position: absolute;
left:30px;
top:365px;
}
#elem3{
    position: absolute;
left:30px;
top:419px;
}
#elem4{
    position: absolute;
left:30px;
top:473px;
}

.DoughnutChart{
position: absolute;
left:77px;
top:90px;
width: 178px;
height: 178px;
}
#myBar1{
    width: 40%;
    height: 10px;
    background-color:#FCCC42 ;
    border-radius:10px;

}
#myProgress1{
    width: 294px;
   margin-top: 10px;
   background-color:#FEE877 ;
 border-radius:10px;

}
#myBar2{
    width: 60%;
    height: 10px;
    background-color:#12B886  ;
    border-radius:10px;

}
#myProgress2{
    width: 294px;
   
   margin-top: 10px;
   background-color:#29DDBB ;
 border-radius:10px;

}
#myBar3{
    width: 55%;
    height: 10px;
    background-color:#0561FC ;
    border-radius:10px;

}
#myProgress3{
    width: 294px;
   
   margin-top: 10px;
   background-color:#0C9AFE ;
 border-radius:10px;

}
#myBar4{
    width: 20%;
    height: 10px;
    background-color:#FD2227  ;
    border-radius:10px;

}
#myProgress4{
    width: 294px;
   
   margin-top: 10px;
   background-color:#FD6A70 ;
 border-radius:10px;

}
.lfBarContainer{
    border-radius: 16px;
    width:516px;
    border: 1px solid #E2E2EA;
    height: 327px;
    margin-right: 30px;
    margin-left: 30px;
    background-color: white;
    span{
        position: absolute;
        top:20px;
        color: #212A54;
        font-size: 20px;
        font-weight: 700;
        margin-left: 20px;
    }
    position: relative;
}
.barmod{

    height: 219px;
    width: 100%;
  position: absolute;
  bottom: 50px;
}
.RtBarContainer{
    position: relative;
    border: 1px solid #E2E2EA;
    width:516px;
    height: 327px;
    border-radius: 16px;
    background-color: white;
    span{
        position: absolute;
        top:20px;
        color: #212A54;
        font-size: 20px;
      
        margin-left: 20px;
        font-weight: 700;
    }
}

.bg{
    background-color: white;
   width: 1122px;
   height: 387px;
   border-radius: 20px;
}
.homeChart{
    height: 400px;
  margin-top: 30px;
}
.ps_span_home{
    position: relative;
}
#fsa{
position: absolute;
}
#sca{
    position: absolute;
    left:123px;
}
.d_wraper{
    position: absolute;
    top:104px;
    left:61px;
    width: 232px;
    height: 232px;
}
`

export const Span=styled.span`
font-size: 16px !important;
font-weight:600 ;
color:${(props)=>props.cl||'black'}!important;

`
