import React from 'react'
import {InsightsContainer,Span} from '../../styles/Insights.styles'
import {Bar,Line,Doughnut,Pie} from 'react-chartjs-2';

import {state,state2,state3,state4,state5,state6,state7,state8,state9,state10,options,options2,options3,options4,options5} from './config'

function Insights() {
  
    return (
        <InsightsContainer >
           
            <div className='rowLineContainer'>
                <div className='lineContainer'>
                <div className='lineInfo'>
                    <span className='lineInfoTitle'>Individual user</span>
                    <Span id='amount' cl='#764ECA'>95K</Span>
                </div>
                <div className='linemd'>
                    <Line data={state} options={options}/>
                </div>
                
                 </div>
                <div className='lineContainer'>
                <div className='lineInfo'>
                    <span className='lineInfoTitle'>Business user</span>
                    <Span id='amount' cl='#FEE877'>95K</Span>
                </div>
                <div className='linemd'>
                <Line data={state2} options={options}/>
                </div>
                 </div>
                <div className='lineContainer'>
                <div className='lineInfo'>
                    <span className='lineInfoTitle'>Child accounts</span>
                    <Span id='amount' cl='#0C9AFE'>95K</Span>
                </div>
                <div className='linemd'>
                <Line data={state3} options={options}/>
                </div>
                 </div>
                <div className='lineContainer'>
                <div className='lineInfo'>
                    <span className='lineInfoTitle'>Events created and money collected in</span>
                    <Span id='amount' cl='#1ECBA2'>95K</Span>
                </div>
                <div className='linemd'>
                <Line data={state4} options={options}/>
                </div>
                 </div>
            </div>
            <div className='rowLineContainer'>
                {/* left side line chart */}
                <div className='LfLineChart'>
                    <div className='LfLineChartHeader'>
                            <div className='LfLineChartHeaderLf'>
                                <div className='LfLineChartHeaderLfContainer hdtitle'><span>Total Amount of Transactions</span></div>
                                <div className='LfLineChartHeaderLfContainer this_month ps_span_home'><span id='fsa'>This Month</span><span id='sca'>Last Month</span></div>
                                <div className='LfLineChartHeaderLfContainer ps_span_home'><Span id='fsa' cl='#04B4FF'>$86,543</Span><Span id='sca'  cl='#04B4FF'>$77,124</Span></div>
                            </div>

                            
                            <div className='LfLineChartHeaderRtContainer last_month'><span>This Month</span><span>Last Month</span></div>
   
                    </div>
                    {/* the chart */}
                    <div className='homeChart'>
                    <Line data={state5} options={options2} />
                    </div>
                    <div>

                    </div>
                </div>

                {/* right side Doughnut chart */}
                <div className='RtDoughnutChart'>
                    <span id='title'>Child Kiwe business fees</span>
                    <div className='DoughnutChart'>
                        <Doughnut data={state6} options={options5}/>
                    </div>
                    <div id='elem1' className='DoughnutChartProgressContainer'>
                        <span >Gole:$100000</span>
                         <div id="myProgress1">
                    <div id="myBar1">{''}</div>
                    </div>
                    </div>
                    <div id='elem2' className='DoughnutChartProgressContainer'>
                        <span>User:$100K</span>
                         <div id="myProgress2">
                    <div id="myBar2">{''}</div>
                    </div>
                    </div>
                    <div id='elem3' className='DoughnutChartProgressContainer'>
                        <span>Retention:90%</span>
                         <div id="myProgress3">
                    <div id="myBar3">{''}</div>
                    </div>
                    </div>
                    <div id='elem4' className='DoughnutChartProgressContainer'>
                        <span>Duration:1 Yr</span>
                         <div id="myProgress4">
                    <div id="myBar4">{''}</div>
                    </div>
                    </div>
                    
                   
                </div>
            </div>
            <div className='rowLineContainer bg'>
              <div className='lfBarContainer'>
              <span>Accepted</span>
            
              <div className='barmod'>
                <Bar data={state7} options={options4}/>
              </div>
               
              </div>
              <div className='RtBarContainer'>
              <span>Declined</span>
              <div className='barmod'>
                <Bar data={state7} options={options4}/>
                </div>
              </div>
            </div>
            <div className='rowLineContainer'>
                <div className='fsChart'>
                    <span>Total Amount Of Business Transactions</span>
                    <div className='d_wraper'>
<Doughnut data={state9} options={options3}/>
                    </div>
                

                   
                </div>
                <div className='MdChart'>
                <span>Total Amount Of Individual Transactions</span>
                 <div className='d_wraper'>
                <Pie data={state8} options={options3}/>
                </div>
                </div>
                <div className='lsChart'>
                <span>Total Amount Of Withdrawals Transactions</span>
                <div id='progress' >
                   
                    <div id='bar'>
                        <span>40%</span>
                    </div>
                </div>
            
                
                </div>
               
            </div>
           
         
            
        </InsightsContainer>
    )
}

export default Insights
