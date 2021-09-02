import React from 'react'
import {Container,BottomContainer,LeftDashBoardContainer,RightDashBoardContainer
,UsersDashBoardContainer,UsersDashBoardHeader} from '../../styles/Dashboard.styles'
import ReuseImgTxt from './ReuseImgTxt'
import ReuseNumberTxt from './ReuseNumberTxt'
import ReuseProfilesP1 from './ReuseProfilesP1'
import ReuseProfilesP2 from './ReuseProfilesP2'
function DashBoard() {
    const image='https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png'
    const imageArr=['https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png',
    'https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png',
    'https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png',
    'https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png',]
    
    return (
        <Container>
          {/* Top Section  */}


           <div className='Wraper'>

                    <ReuseImgTxt id='img_txt1' imgsrc={imageArr} text={'Individual user'}/>
                    <ReuseImgTxt  id='img_txt2' imgsrc={imageArr} text={'Business Users'}/>
                    <ReuseNumberTxt id='num_txt1' Number={269} txt={'Payment Transactions'}/>
              
                <ReuseNumberTxt id='num_txt2' Number={15} txt={'Events'}/>
                <ReuseNumberTxt id='num_txt3' Number={688.43} txt={'Paytabs Commission'}/>
                <ReuseNumberTxt id='num_txt4' Number={58.52} txt={'Kiwe Commission'}/>

    
              
                   


            {/* Bottom Section */}
            <BottomContainer>

                <LeftDashBoardContainer>
                    <div className='DashBoardTxt'>
                        <span className='InfoTxt'>Latest Events</span>
                        <span className='SeeMore'>See More</span>
                    </div>
                    <UsersDashBoardContainer>
                        {/* Header */}
                        <UsersDashBoardHeader>
                            <span id='tit1'>Owner</span>
                            <span id='tit2'>Wallet Name</span>
                            <span id='tit3'>Event Date</span>
                            <span id='tit4'>Created On</span>
                        </UsersDashBoardHeader>
                        {/* ReuseDashBoard part 1 */}
                        <ReuseProfilesP1 owner={{imgsrc:image,name:'Edward'}} wn={'Football'} ed={'16 sep 2020'} co={'16 sep 2020'}/>
                        <ReuseProfilesP1 owner={{imgsrc:image,name:'Edward'}} wn={'Football'} ed={'16 sep 2020'} co={'16 sep 2020'}/>
                        <ReuseProfilesP1 owner={{imgsrc:image,name:'Edward'}} wn={'Football'} ed={'16 sep 2020'} co={'16 sep 2020'}/>
                        <ReuseProfilesP1 owner={{imgsrc:image,name:'Edward'}} wn={'Football'} ed={'16 sep 2020'} co={'16 sep 2020'}/>
                        <ReuseProfilesP1 owner={{imgsrc:image,name:'Edward'}} wn={'Football'} ed={'16 sep 2020'} co={'16 sep 2020'}/>
                        <ReuseProfilesP1 owner={{imgsrc:image,name:'Edward'}} wn={'Football'} ed={'16 sep 2020'} co={'16 sep 2020'}/>
                        <ReuseProfilesP1 owner={{imgsrc:image,name:'Edward'}} wn={'Football'} ed={'16 sep 2020'} co={'16 sep 2020'}/>
                        <ReuseProfilesP1 owner={{imgsrc:image,name:'Edward'}} wn={'Football'} ed={'16 sep 2020'} co={'16 sep 2020'}/>
                    </UsersDashBoardContainer>

                </LeftDashBoardContainer>

                <RightDashBoardContainer>
                    <div className='DashBoardTxt'>
                        <span className='InfoTxt'>Latest Transactions</span>
                        <span className='SeeMore'>See More</span>
                    </div>
                    <UsersDashBoardContainer>
                        {/* Header */}
                        <UsersDashBoardHeader>
                            <span id='rttit1'>Owner</span>
                            <span id='rttit2'>Transaction To</span>
                            <span id='rttit3'>Amount</span>
                            <span id='rttit4'>Message</span>
                            <span id='rttit5'>Created Date Time</span>
                        </UsersDashBoardHeader>
                        {/* ReuseDashBoard part 2 */}
                        <ReuseProfilesP2 owner={{imgsrc:image,name:'Edward'}} transactionto={{imgsrc:image,name:'Edward'}} at={'$100'} me={'Hello..'} ct={'16 sep 2020 9:11 PM'}/>
                        <ReuseProfilesP2 owner={{imgsrc:image,name:'Edward'}} transactionto={{imgsrc:image,name:'Edward'}} at={'$100'} me={'Hello..'} ct={'16 sep 2020 9:11 PM'}/>
                        <ReuseProfilesP2 owner={{imgsrc:image,name:'Edward'}} transactionto={{imgsrc:image,name:'Edward'}} at={'$100'} me={'Hello..'} ct={'16 sep 2020 9:11 PM'}/>
                        <ReuseProfilesP2 owner={{imgsrc:image,name:'Edward'}} transactionto={{imgsrc:image,name:'Edward'}} at={'$100'} me={'Hello..'} ct={'16 sep 2020 9:11 PM'}/>
                        <ReuseProfilesP2 owner={{imgsrc:image,name:'Edward'}} transactionto={{imgsrc:image,name:'Edward'}} at={'$100'} me={'Hello..'} ct={'16 sep 2020 9:11 PM'}/>
                        <ReuseProfilesP2 owner={{imgsrc:image,name:'Edward'}} transactionto={{imgsrc:image,name:'Edward'}} at={'$100'} me={'Hello..'} ct={'16 sep 2020 9:11 PM'}/>
                        <ReuseProfilesP2 owner={{imgsrc:image,name:'Edward'}} transactionto={{imgsrc:image,name:'Edward'}} at={'$100'} me={'Hello..'} ct={'16 sep 2020 9:11 PM'}/>
                        <ReuseProfilesP2 owner={{imgsrc:image,name:'Edward'}} transactionto={{imgsrc:image,name:'Edward'}} at={'$100'} me={'Hello..'} ct={'16 sep 2020 9:11 PM'}/>
                    </UsersDashBoardContainer>
                </RightDashBoardContainer>

            </BottomContainer>
           </div>
            

        </Container>
    )
}

export default DashBoard
