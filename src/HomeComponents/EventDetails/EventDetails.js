import React from 'react'
import {WraperHeader,EventsDetailsContainer,Wraper} from '../../styles/EventDetails.styles'
import Paginate from '../../utils/Paginate'
function EventsDetails() {
    const image='https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png'

    return (
        <EventsDetailsContainer>
            <span>Event Details</span>
            <Wraper>
                    <WraperHeader>
                        <div className='personInfo'>
                            <img src={image} alt=''/>
                            <span>Mohammed</span>
                        </div>
                        <div className='personContent'> 
                            <div className='section'>
                                <div className='content '>
                                    <span id='fs' className='first'>Event:</span>
                                    <span className='__title1'>Cv Get At</span>
                                </div>
                                <div className='content '>
                                    <span id='fs' className='sc'>Event Date:</span>
                                    <span className='__title2'>16 may 2020</span>
                                </div>
                                <div className='content '>
                                    <span id='fs' className='td'>Created At:</span>
                                    <span className='__title3'>16 may 2020 10PM</span>
                                </div>
                            </div>
                            <div className='section '>
                            <div className='content'>
                                    <span id='fs' className='fh'>Owner:</span>
                                    <span className='__title4'>Mohammed </span>
                                </div>
                                <div className='content '>
                                    <span id='fs' className='fv'>Balance:</span>
                                    <button id='btn'className='__title5'>E1012</button>
                                </div>
                                <div className='content'>
                                    <span id='fs' className='six'>Desdription:</span>
                                   
                                </div>
                            </div>
                        </div>
                    </WraperHeader>
                    <div className='contentInfo'>
                      
                           <span id='pe'>Profile Image</span>
                     
                      
                           <span id='pn'>Profile Name</span>
                     
                      
                           <span id='at'>Amount</span>
                     
                    </div>
                    <div className='reuse-content'>
                   
                          <img id='im' src={image} alt=''/>
                     
                       
                           <span id='pn'>moataz</span>
                     
                       
                           <span id='at'>1322 euro</span>
                     
                    </div>
                    <div className='reuse-content'>
                  
                    <img id='im' src={image} alt=''/>
                     
                       
                     <span id='pn'>moataz</span>
               
                 
                     <span id='at'>1322 euro</span>
                      
                    </div>
                    <div className='reuse-content'>

                
                     
                         <span id='pe'>Not available</span>
                           <span id='pn'>moataz</span>
                     
                    
                           <span id='at'>1322 euro</span>
                  
                      
                    
                      
                    </div>
                    <div className='reuse-content'>
                  
                    <span id='pe'>Not available</span>
                           <span id='pn'>moataz</span>
                     
                    
                           <span id='at'>1322 euro</span>
                  
                       
                    </div>
                    <div className='reuse-content'>
                  
                    <span id='pe'>Not available</span>
                           <span id='pn'>moataz</span>
                     
                    
                           <span id='at'>1322 euro</span>
                  
                       
                    </div>
                    <div className='reuse-content'>
                  
                    <img id='im' src={image} alt=''/>
                     
                       
                     <span id='pn'>moataz</span>
               
                 
                     <span id='at'>1322 euro</span>
                      
                      
                    </div>
            </Wraper>
            <Paginate/>
        </EventsDetailsContainer>
    )
}

export default EventsDetails
