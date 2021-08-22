import React from 'react'
import {Container,TopDashBoardContainer,BottomContainer,LeftDashBoardContainer,RightDashBoardContainer
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
            <TopDashBoardContainer>
                <div className='top'>
                    <ReuseImgTxt imgsrc={imageArr} text={'Individual user'}/>
                    <ReuseImgTxt imgsrc={imageArr} text={'Business Users'}/>
                    <ReuseNumberTxt Number={269} txt={'Payment Transactions'}/>
                   
                </div>
                
                <div className='bottom'>
                <ReuseNumberTxt Number={15} txt={'Events'}/>
                <ReuseNumberTxt Number={688.43} txt={'Paytabs Commission'}/>
                <ReuseNumberTxt Number={58.52} txt={'Kiwe Commission'}/>
                </div>
            </TopDashBoardContainer>


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
                            <span>Owner</span>
                            <span>Wallet Name</span>
                            <span>Event Date</span>
                            <span>Created On</span>
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
                            <span>Owner</span>
                            <span>Transaction To</span>
                            <span>Amount</span>
                            <span>Message</span>
                            <span>Created Date Time</span>
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

        </Container>
    )
}

export default DashBoard
