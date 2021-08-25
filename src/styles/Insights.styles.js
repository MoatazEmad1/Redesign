import styled from 'styled-components'


export const InsightsContainer=styled.div`
margin: 20px;
flex:0.8;

.rowLineContainer{
    display: flex;
    justify-content: space-between;
    align-items: center;

    
}
.fsChart{
background-color:white ;
border-radius: 10px;
padding: 10px;
margin-top: 10px;
margin-right: 5px;
span{
    font-size: 20px;
    color: #212A54;
    font-weight: bold;
}
}
.MdChart{
    background-color:white ;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    margin-right: 5px;
    span{
        font-size: 20px;
        color: #212A54;
        font-weight: bold;
    }
}
.lsChart{
    background-color:white ;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    margin-right: 5px;
    span{
        font-size: 20px;
        color: #212A54;
        font-weight: bold;
    }
}
#progress{
 position: relative;
    width: 285px;
    height: 285px;
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
        color:white;
    }
}
.lineContainer{
    background-color: white;
    width:200px;
    height: 171px;
    padding:10px;
    border-radius: 10px;
    margin-right:5px;
}
.lineInfo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}
.lineInfoTitle{
    color:black;
    font-size: 16px;
    font-weight:bold ;
}
}



.LfLineChart{
    background-color: white;
    border-radius: 10px;
    margin-top:20px;
    padding:10px;
    width: 60%;

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
    margin-top:5px;
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
    width:35%;
    background-color: white;
    border-radius: 10px;
    margin-top:20px;
    padding:10px;
    display: flex;
    flex-direction: column;
}
.DoughnutChart{
    margin-top:10px;
}
#myBar1{
    width: 40%;
    height: 10px;
    background-color:#FCCC42 ;
    border-radius:10px;

}
#myProgress1{
    width: 100%;
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
    width: 100%;
   
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
    width: 100%;
   
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
    width: 100%;
   
   margin-top: 10px;
   background-color:#FD6A70 ;
 border-radius:10px;

}
.lfBarContainer{
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    width: 35%;
    background-color: white;
    span{
        color: #212A54;
        font-size: 20px;
    }
}
.RtBarContainer{
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    width: 35%;
    background-color: white;
    span{
        color: #212A54;
        font-size: 20px;
    }
}

`

export const Span=styled.span`
font-size: 20px;
font-weight:bold ;
color:${(props)=>props.cl||'black'}!important;

`
