import React,{useState} from 'react'
import {Container,LfContainer,InfoLfContainer} from '../styles/LeftSide.styles'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PersonIcon from '@material-ui/icons/Person';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import {useDispatch} from 'react-redux'
import {SetNewHomeState} from '../Redux/Actions/HomeActionCreator'
function LeftSide() {
    const dispatch=useDispatch()
    const [lfBg,setlfBg]=useState({
        it1:true,
        it2:false,
        it3:false,
        it4:false,
        it5:false,
        it6:false,
        it7:false,
        it8:false,
        it9:false,
        it10:false,
        it11:false,
        it12:false,
        it13:false, 
    })  
   console.log(lfBg.it1)
    return (
        <Container>
            <LfContainer selected={lfBg.it1}  onClick={(e)=>{
                setlfBg({
                    it1:true,
                    it2:false,
                    it3:false,
                    it4:false,
                    it5:false,
                    it6:false,
                    it7:false,
                    it8:false,
                    it9:false,
                    it10:false,
                    it11:false,
                    it12:false,
                    it13:false, 
                })
                dispatch(SetNewHomeState('Dashboard'))
                }}>
           
           <DashboardOutlinedIcon/>
            <span >Dashboard</span>
            <ArrowRightIcon className='ArrowLfContainer'/>
            </LfContainer>
            <LfContainer selected={lfBg.it2} onClick={(e)=>{
                setlfBg({
                    it1:false,
                    it2:true,
                    it3:false,
                    it4:false,
                    it5:false,
                    it6:false,
                    it7:false,
                    it8:false,
                    it9:false,
                    it10:false,
                    it11:false,
                    it12:false,
                    it13:false, 
                })
                dispatch(SetNewHomeState('Insights'))
                }}>
              <AssessmentIcon/>
                <InfoLfContainer>Insights</InfoLfContainer>
                <ArrowRightIcon className='ArrowLfContainer'/>
            </LfContainer>
            <LfContainer selected={lfBg.it3} onClick={(e)=>{
                setlfBg({
                    it1:false,
                    it2:false,
                    it3:true,
                    it4:false,
                    it5:false,
                    it6:false,
                    it7:false,
                    it8:false,
                    it9:false,
                    it10:false,
                    it11:false,
                    it12:false,
                    it13:false, 
                })
               dispatch(SetNewHomeState('Admin'))
                }}>
              <PersonIcon/>
                <InfoLfContainer>Admin</InfoLfContainer>
                <ArrowRightIcon className='ArrowLfContainer'/>
            </LfContainer>
            <LfContainer selected={lfBg.it4} onClick={(e)=>{
                setlfBg({
                    it1:false,
                    it2:false,
                    it3:false,
                    it4:true,
                    it5:false,
                    it6:false,
                    it7:false,
                    it8:false,
                    it9:false,
                    it10:false,
                    it11:false,
                    it12:false,
                    it13:false, 
                })
                dispatch(SetNewHomeState('Individual user'))
                }}>
              <PeopleAltIcon/>
                <InfoLfContainer>Individual user</InfoLfContainer>
                <ArrowRightIcon className='ArrowLfContainer'/>
            </LfContainer>
            <LfContainer selected={lfBg.it5} onClick={(e)=>{
                setlfBg({
                    it1:false,
                    it2:false,
                    it3:false,
                    it4:false,
                    it5:true,
                    it6:false,
                    it7:false,
                    it8:false,
                    it9:false,
                    it10:false,
                    it11:false,
                    it12:false,
                    it13:false, 
                })
               dispatch(SetNewHomeState('Business user'))
                }}>
              <LocalMallOutlinedIcon/>
                <InfoLfContainer>Business user</InfoLfContainer>
                <ArrowRightIcon className='ArrowLfContainer'/>
            </LfContainer>
            <LfContainer selected={lfBg.it6} onClick={(e)=>{
                setlfBg({
                    it1:false,
                    it2:false,
                    it3:false,
                    it4:false,
                    it5:false,
                    it6:true,
                    it7:false,
                    it8:false,
                    it9:false,
                    it10:false,
                    it11:false,
                    it12:false,
                    it13:false, 
                })
                dispatch(SetNewHomeState('Transaction'))
                }}>
              <ImportExportOutlinedIcon/>
                <InfoLfContainer>Transaction</InfoLfContainer>
                <ArrowRightIcon className='ArrowLfContainer'/>
            </LfContainer>
            <LfContainer selected={lfBg.it7} onClick={(e)=>{
                setlfBg({
                    it1:false,
                    it2:false,
                    it3:false,
                    it4:false,
                    it5:false,
                    it6:false,
                    it7:true,
                    it8:false,
                    it9:false,
                    it10:false,
                    it11:false,
                    it12:false,
                    it13:false, 
                })
                dispatch(SetNewHomeState('Transaction Fees'))
                }}>
              <ImportExportOutlinedIcon/>
                <InfoLfContainer>Transaction Fees</InfoLfContainer>
                <ArrowRightIcon className='ArrowLfContainer'/>
            </LfContainer>
            <LfContainer selected={lfBg.it8} onClick={(e)=>{
                setlfBg({
                    it1:false,
                    it2:false,
                    it3:false,
                    it4:false,
                    it5:false,
                    it6:false,
                    it7:false,
                    it8:true,
                    it9:false,
                    it10:false,
                    it11:false,
                    it12:false,
                    it13:false, 
                })
                dispatch(SetNewHomeState('Withdrawal list'))
                }}>
              <DescriptionOutlinedIcon/>
                <InfoLfContainer>Withdrawal list</InfoLfContainer>
                <ArrowRightIcon className='ArrowLfContainer'/>
            </LfContainer>
            <LfContainer selected={lfBg.it9} onClick={(e)=>{
                setlfBg({
                    it1:false,
                    it2:false,
                    it3:false,
                    it4:false,
                    it5:false,
                    it6:false,
                    it7:false,
                    it8:false,
                    it9:true,
                    it10:false,
                    it11:false,
                    it12:false,
                    it13:false, 
                })
                dispatch(SetNewHomeState('Withdrawal type'))
                }}>
              <AssignmentOutlinedIcon/>
                <InfoLfContainer>Withdrawal type</InfoLfContainer>
                <ArrowRightIcon className='ArrowLfContainer'/>
            </LfContainer>
            <LfContainer selected={lfBg.it10} onClick={(e)=>{
                setlfBg({
                    it1:false,
                    it2:false,
                    it3:false,
                    it4:false,
                    it5:false,
                    it6:false,
                    it7:false,
                    it8:false,
                    it9:false,
                    it10:true,
                    it11:false,
                    it12:false,
                    it13:false, 
                })
                dispatch(SetNewHomeState('Offer list'))
                }}>
              <LocalOfferOutlinedIcon/>
                <InfoLfContainer>Offer list</InfoLfContainer>
                <ArrowRightIcon className='ArrowLfContainer'/>
            </LfContainer>
            <LfContainer selected={lfBg.it11} onClick={(e)=>{
                setlfBg({
                    it1:false,
                    it2:false,
                    it3:false,
                    it4:false,
                    it5:false,
                    it6:false,
                    it7:false,
                    it8:false,
                    it9:false,
                    it10:false,
                    it11:true,
                    it12:false,
                    it13:false, 
                })
                dispatch(SetNewHomeState('Events'))
                }}>
              <EventNoteOutlinedIcon/>
                <InfoLfContainer>Events</InfoLfContainer>
                <ArrowRightIcon className='ArrowLfContainer'/>
            </LfContainer>
            <LfContainer selected={lfBg.it12} onClick={(e)=>{
                setlfBg({
                    it1:false,
                    it2:false,
                    it3:false,
                    it4:false,
                    it5:false,
                    it6:false,
                    it7:false,
                    it8:false,
                    it9:false,
                    it10:false,
                    it11:false,
                    it12:true,
                    it13:false, 
                })
                dispatch(SetNewHomeState('Contact'))
                }}>
              <PhoneOutlinedIcon/>
                <InfoLfContainer>Contact</InfoLfContainer>
                <ArrowRightIcon className='ArrowLfContainer'/>
            </LfContainer>
            <LfContainer selected={lfBg.it13} onClick={(e)=>{
                setlfBg({
                    it1:false,
                    it2:false,
                    it3:false,
                    it4:false,
                    it5:false,
                    it6:false,
                    it7:false,
                    it8:false,
                    it9:false,
                    it10:false,
                    it11:false,
                    it12:false,
                    it13:true, 
                })
                dispatch(SetNewHomeState('Notification'))
                }}>
              <NotificationsNoneOutlinedIcon/>
                <InfoLfContainer>Notification</InfoLfContainer>
                <ArrowRightIcon className='ArrowLfContainer'/>
            </LfContainer>
            <div className='LfImageContainer'>
                <img src='https://img.freepik.com/free-vector/big-family-meeting_74855-5220.jpg?size=626&ext=jpg' alt=''/>
            </div>
        </Container>
    )
}

export default LeftSide
