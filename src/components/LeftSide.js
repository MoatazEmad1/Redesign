import React,{useState} from 'react'
import {Container,LfContainer} from '../styles/LeftSide.styles'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
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
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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
         
                <DashboardOutlinedIcon className='IconPS'/>
                <span className='titlePs'>Dashboard</span>

          
         
            <ChevronRightIcon className='arrowPs'/>
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
              <InsertChartOutlinedIcon className='IconPS'/>
                <span className='titlePs'>Insights</span>
                <ChevronRightIcon className='arrowPs'/>
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
              <PersonOutlineOutlinedIcon className='IconPS'/>
                <span className='titlePs'>Admin</span>
                <ChevronRightIcon className='arrowPs'/>
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
              <PeopleAltOutlinedIcon  className='IconPS'/>
                <span className='titlePs'>Individual user</span>
                <ChevronRightIcon className='arrowPs'/>
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
              <LocalMallOutlinedIcon className='IconPS'/>
                <span className='titlePs'>Business user</span>
                <ChevronRightIcon className='arrowPs'/>
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
              <ImportExportOutlinedIcon className='IconPS'/>
                <span className='titlePs'>Transaction</span>
                <ChevronRightIcon className='arrowPs'/>
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
              <ImportExportOutlinedIcon className='IconPS'/>
                <span className='titlePs'>Transaction Fees</span>
                <ChevronRightIcon  className='arrowPs'/>
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
              <DescriptionOutlinedIcon className='IconPS'/>
                <span  className='titlePs'>Withdrawal list</span>
                <ChevronRightIcon  className='arrowPs'/>
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
              <AssignmentOutlinedIcon className='IconPS'/>
                <span className='titlePs'>Withdrawal type</span>
                <ChevronRightIcon className='arrowPs'/>
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
              <LocalOfferOutlinedIcon className='IconPS'/>
                <span className='titlePs'>Offer list</span>
                <ChevronRightIcon className='arrowPs'/>
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
              <EventNoteOutlinedIcon className='IconPS'/>
                <span  className='titlePs'>Events</span>
                <ChevronRightIcon  className='arrowPs'/>
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
              <PhoneOutlinedIcon className='IconPS'/>
                <span  className='titlePs'>Contact</span>
                <ChevronRightIcon className='arrowPs'/>
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
              <NotificationsNoneOutlinedIcon className='IconPS'/>
                <span className='titlePs'>Notification</span>
                <ChevronRightIcon className='arrowPs'/>
            </LfContainer>
            
                <img src='https://img.freepik.com/free-vector/big-family-meeting_74855-5220.jpg?size=626&ext=jpg' alt=''/>
         
        </Container>
    )
}

export default LeftSide
