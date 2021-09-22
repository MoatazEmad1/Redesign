import React from 'react'
import {Container,BottomContainer,LeftDashBoardContainer,RightDashBoardContainer
,UsersDashBoardContainer,UsersDashBoardHeader} from '../../styles/Dashboard.styles'
import ReuseNumberTxt from './ReuseNumberTxt'
import ReuseProfilesP1 from './ReuseProfilesP1'
import ReuseProfilesP2 from './ReuseProfilesP2'
import Paginate from '../../utils/Paginate'
function DashBoard() {
    const image='https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png'
   
    return (
        <Container>
          {/* Top Section  */}


           <div className='Wraper'>
                    <ReuseNumberTxt id='num_txt1' Number={100000} txt={'Individual user'}/>
                    <ReuseNumberTxt id='num_txt2' Number={4921} txt={'Business Users'}/>
                    <ReuseNumberTxt id='num_txt3' Number={269} txt={'Payment Transactions'}/>
                    <ReuseNumberTxt id='num_txt4' Number={15} txt={'Events'}/>
                    <ReuseNumberTxt id='num_txt5' Number={688.43} txt={'Paytabs Commission'}/>
                    <ReuseNumberTxt id='num_txt6' Number={58.52} txt={'Kiwe Commission'}/>
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
                            <span id='Owner'>Owner</span>
                            <span id='Wallet_Name'>Wallet Name</span>
                            <span id='Event_Date'>Event Date</span>
                            <span id='Created_On'>Created On</span>
                        </UsersDashBoardHeader>
                        {/* ReuseDashBoard part 1 */}
                        <ReuseProfilesP1 Owner={{imgsrc:image,name:'Edward'}}Wallet_Name={'Football'}Event_Date={'16 sep 2020'} Created_On={'16 sep 2020'}/>
                        <ReuseProfilesP1 Owner={{imgsrc:image,name:'Edward'}}Wallet_Name={'Football'}Event_Date={'16 sep 2020'} Created_On={'16 sep 2020'}/>
                        <ReuseProfilesP1 Owner={{imgsrc:image,name:'Edward'}}Wallet_Name={'Football'}Event_Date={'16 sep 2020'} Created_On={'16 sep 2020'}/>
                        <ReuseProfilesP1 Owner={{imgsrc:image,name:'Edward'}}Wallet_Name={'Football'}Event_Date={'16 sep 2020'} Created_On={'16 sep 2020'}/>
                        <ReuseProfilesP1 Owner={{imgsrc:image,name:'Edward'}}Wallet_Name={'Football'}Event_Date={'16 sep 2020'} Created_On={'16 sep 2020'}/>
                        <ReuseProfilesP1 Owner={{imgsrc:image,name:'Edward'}}Wallet_Name={'Football'}Event_Date={'16 sep 2020'} Created_On={'16 sep 2020'}/>
                        <ReuseProfilesP1 Owner={{imgsrc:image,name:'Edward'}}Wallet_Name={'Football'}Event_Date={'16 sep 2020'} Created_On={'16 sep 2020'}/>
                        <ReuseProfilesP1 Owner={{imgsrc:image,name:'Edward'}}Wallet_Name={'Football'}Event_Date={'16 sep 2020'} Created_On={'16 sep 2020'}/>
                    </UsersDashBoardContainer>
                <Paginate/>
                </LeftDashBoardContainer>

                <RightDashBoardContainer>
                    <div className='DashBoardTxt'>
                        <span className='InfoTxt'>Latest Transactions</span>
                        <span className='SeeMore'>See More</span>
                    </div>
                    <UsersDashBoardContainer>
                        {/* Header */}
                        <UsersDashBoardHeader>
                            <span id='Owner_Two'>Owner</span>
                            <span id='Transaction_To'>Transaction To</span>
                            <span id='Amount'>Amount</span>
                            <span id='Message'>Message</span>
                            <span id='Created_Date_Time'>Created Date Time</span>
                        </UsersDashBoardHeader>
                        {/* ReuseDashBoard part 2 */}
                        <ReuseProfilesP2 Owner={{imgsrc:image,name:'Edward'}} Transaction_To={{imgsrc:image,name:'Edward'}} Amount={'$100'}Message={'Hello..'}Created_Date_Time={'16 sep 2020 9:11 PM'}/>
                        <ReuseProfilesP2 Owner={{imgsrc:image,name:'Edward'}} Transaction_To={{imgsrc:image,name:'Edward'}} Amount={'$100'}Message={'Hello..'}Created_Date_Time={'16 sep 2020 9:11 PM'}/>
                        <ReuseProfilesP2 Owner={{imgsrc:image,name:'Edward'}} Transaction_To={{imgsrc:image,name:'Edward'}} Amount={'$100'}Message={'Hello..'}Created_Date_Time={'16 sep 2020 9:11 PM'}/>
                        <ReuseProfilesP2 Owner={{imgsrc:image,name:'Edward'}} Transaction_To={{imgsrc:image,name:'Edward'}} Amount={'$100'}Message={'Hello..'}Created_Date_Time={'16 sep 2020 9:11 PM'}/>
                        <ReuseProfilesP2 Owner={{imgsrc:image,name:'Edward'}} Transaction_To={{imgsrc:image,name:'Edward'}} Amount={'$100'}Message={'Hello..'}Created_Date_Time={'16 sep 2020 9:11 PM'}/>
                        <ReuseProfilesP2 Owner={{imgsrc:image,name:'Edward'}} Transaction_To={{imgsrc:image,name:'Edward'}} Amount={'$100'}Message={'Hello..'}Created_Date_Time={'16 sep 2020 9:11 PM'}/>
                        <ReuseProfilesP2 Owner={{imgsrc:image,name:'Edward'}} Transaction_To={{imgsrc:image,name:'Edward'}} Amount={'$100'}Message={'Hello..'}Created_Date_Time={'16 sep 2020 9:11 PM'}/>
                        <ReuseProfilesP2 Owner={{imgsrc:image,name:'Edward'}} Transaction_To={{imgsrc:image,name:'Edward'}} Amount={'$100'}Message={'Hello..'}Created_Date_Time={'16 sep 2020 9:11 PM'}/>
                    </UsersDashBoardContainer>
                    <Paginate/>
                </RightDashBoardContainer>

            </BottomContainer>
           </div>
            

        </Container>
    )
}

export default DashBoard
