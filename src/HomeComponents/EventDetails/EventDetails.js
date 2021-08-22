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
                                <div className='content'>
                                    <span id='fs'>Event:</span>
                                    <span>Cv Get At</span>
                                </div>
                                <div className='content'>
                                    <span id='fs'>Event Date:</span>
                                    <span>16 may 2020</span>
                                </div>
                                <div className='content'>
                                    <span id='fs'>Created At:</span>
                                    <span>16 may 2020 10PM</span>
                                </div>
                            </div>
                            <div className='section'>
                            <div className='content'>
                                    <span id='fs'>Owner:</span>
                                    <span>Mohammed Khalifa</span>
                                </div>
                                <div className='content'>
                                    <span id='fs'>Balance:</span>
                                    <button id='btn'>E1012</button>
                                </div>
                                <div className='content'>
                                    <span id='fs'>Desdription:</span>
                                   
                                </div>
                            </div>
                        </div>
                    </WraperHeader>
                    <div className='contentInfo'>
                        <div className='info'>
                           <span>Profile Image</span>
                        </div>
                        <div className='info'>
                           <span>Profile Name</span>
                        </div>
                        <div className='info'>
                           <span>Amount</span>
                        </div>
                    </div>
                    <div className='reuse-content'>
                    <div className='reuseinfo'>
                          <img src={image} alt=''/>
                        </div>
                        <div className='reuseinfo'>
                           <span>moataz</span>
                        </div>
                        <div className='reuseinfo'>
                           <span>1322 euro</span>
                        </div>
                    </div>
                    <div className='reuse-content'>
                    <div className='reuseinfo'>
                          <img src={image} alt=''/>
                        </div>
                        <div className='reuseinfo'>
                           <span>moataz</span>
                        </div>
                        <div className='reuseinfo'>
                           <span>1322 euro</span>
                        </div>
                    </div>
                    <div className='reuse-content'>
                    <div className='reuseinfo'>
                    <span>Not available</span>
                        </div>
                        <div className='reuseinfo'>
                           <span>moataz</span>
                        </div>
                        <div className='reuseinfo'>
                           <span>1322 euro</span>
                        </div>
                    </div>
                    <div className='reuse-content'>
                    <div className='reuseinfo'>
                    <span>Not available</span>
                        </div>
                        <div className='reuseinfo'>
                           <span>moataz</span>
                        </div>
                        <div className='reuseinfo'>
                           <span>1322 euro</span>
                        </div>
                    </div>
                    <div className='reuse-content'>
                    <div className='reuseinfo'>
                    <span>Not available</span>
                        </div>
                        <div className='reuseinfo'>
                           <span>moataz</span>
                        </div>
                        <div className='reuseinfo'>
                           <span>1322 euro</span>
                        </div>
                    </div>
                    <div className='reuse-content'>
                    <div className='reuseinfo'>
                          <img src={image} alt=''/>
                        </div>
                        <div className='reuseinfo'>
                           <span>moataz</span>
                        </div>
                        <div className='reuseinfo'>
                           <span>1322 euro</span>
                        </div>
                    </div>
            </Wraper>
            <Paginate/>
        </EventsDetailsContainer>
    )
}

export default EventsDetails
