import React,{useState} from 'react'
import {Container,LfContainer} from '../styles/LeftSide.styles'
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
import path from '../images/Button/Path.png'
import Ellipse from '../images/Button/Ellipse.png'
import wave from '../images/Button/wave.png'
import pathColor from '../images/Button/PathColor.png'
import EllipseColor from '../images/Button/EllipseColor.png'
import waveColor from '../images/Button/waveColor.png'
import Vector from '../images/Iconly/Light outline/Vector.png'
import VectorWhite from '../images/Iconly/Light outline/VectorWhite.png'
import Admin from '../images/Iconly/Light outline/Admin.png'
import AdminWhite from '../images/Iconly/Light outline/AdminWhite.png'
import People from '../images/Iconly/Light outline/People.png'
import PeopleWhite from '../images/Iconly/Light outline/PeopleWhite.png'
import BusinessUser from '../images/Iconly/Light outline/BusinessUser.png'
import BusinessUserWhite from '../images/Iconly/Light outline/BusinessUserWhite.png'
import WithDrawalType from '../images/Iconly/Light outline/WithDrawalType.png'
import WithDrawalTypeWhite from '../images/Iconly/Light outline/WithDrawalTypeWhite.png'
import WithDrawalList from '../images/Iconly/Light outline/WithDrawalList.png'
import WithDrawalListWhite from '../images/Iconly/Light outline/WithDrawalListWhite.png'
import Transactions from '../images/Iconly/Light outline/Transactions.png'
import TransactionsWhite from '../images/Iconly/Light outline/TransactionsWhite.png'
import TransactionsFees from '../images/Iconly/Light outline/Transactions.png'
import TransactionsFeesWhite from '../images/Iconly/Light outline/TransactionsWhite.png'
import OfferList from '../images/Iconly/Light outline/OfferList.png'
import OfferListWhite from '../images/Iconly/Light outline/OfferListWhite.png'
import Events from '../images/Iconly/Light outline/Events.png'
import EventsWhite from '../images/Iconly/Light outline/EventsWhite.png'
import Contact from '../images/Iconly/Light outline/Contact.png'
import ContactWhite from '../images/Iconly/Light outline/ContactWhite.png'
import Notifications from '../images/Iconly/Light outline/Notifications.png'
import NotificationsWhite from '../images/Iconly/Light outline/NotificationsWhite.png'
function LeftSide() {
    const showIcon=()=>{
        if(lfBg.it1){
            return(
                <div className='IconPS'>
                <div className='iconpsContainer'>
                    <img className='parentImg' src={path} alt=''/>
                    <img className='centerImg' src={wave} alt=''/>
                    <img className='topRightImg' src={Ellipse} alt=''/>
                </div>
                </div>
            )
        }
        else{
            return(
                <div className='IconPS'>
                <div className='iconpsContainer'>
                    <img className='parentImg' src={pathColor} alt=''/>
                    <img className='centerImg' src={waveColor} alt=''/>
                    <img className='topRightImg' src={EllipseColor} alt=''/>
                </div>
                </div>
            )
        }
    }
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
            <LfContainer selected={lfBg.it1}   onClick={(e)=>{
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
                    {showIcon()}
               
             
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
               <div className='IconPS'>
                    <div className='iconpsContainer'>
                        {lfBg.it2?<img className='parentImg' src={VectorWhite} alt=''/>:<img className='parentImg' src={Vector} alt=''/>}
                    </div>
                </div>
              
                <span className='titlePs'>Insights</span>
                <ChevronRightIcon className='arrowPs'/>
            </LfContainer>
            <LfContainer wdIcon={16} htIcon={20} selected={lfBg.it3} onClick={(e)=>{
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
                <div className='IconPS'>
                    <div className='iconpsContainer'>
                        {lfBg.it3?<img className='parentImg' src={AdminWhite} alt=''/>:<img className='parentImg' src={Admin} alt=''/>}
                    </div>
                </div>
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
               <div className='IconPS'>
                    <div className='iconpsContainer'>
                        {lfBg.it4?<img className='parentImg' src={PeopleWhite} alt=''/>:<img className='parentImg' src={People} alt=''/>}
                    </div>
                </div>
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
             <div className='IconPS'>
                    <div className='iconpsContainer'>
                        {lfBg.it5?<img className='parentImg' src={BusinessUserWhite} alt=''/>:<img className='parentImg' src={BusinessUser} alt=''/>}
                    </div>
                </div>
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
                       <div className='IconPS'>
                    <div className='iconpsContainer'>
                        {lfBg.it6?<img className='parentImg' src={TransactionsWhite} alt=''/>:<img className='parentImg' src={Transactions} alt=''/>}
                    </div>
                </div>

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
               <div className='IconPS'>
                    <div className='iconpsContainer'>
                        {lfBg.it7?<img className='parentImg' src={TransactionsFeesWhite} alt=''/>:<img className='parentImg' src={TransactionsFees} alt=''/>}
                    </div>
                </div>
                <span className='titlePs'>Transaction Fees</span>
                <ChevronRightIcon  className='arrowPs'/>
            </LfContainer>
            <LfContainer wdIcon={17.05} htIcon={19.86} selected={lfBg.it8} onClick={(e)=>{
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
              <div className='IconPS'>
                    <div className='iconpsContainer'>
                        {lfBg.it8?<img className='parentImg' src={WithDrawalListWhite} alt=''/>:<img className='parentImg' src={WithDrawalList} alt=''/>}
                    </div>
                </div>
                <span  className='titlePs'>Withdrawal list</span>
                <ChevronRightIcon  className='arrowPs'/>
            </LfContainer>
            <LfContainer selected={lfBg.it9} wdIcon={18} htIcon={20} onClick={(e)=>{
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
             <div className='IconPS'>
                    <div className='iconpsContainer'>
                        {lfBg.it9?<img className='parentImg' src={WithDrawalTypeWhite} alt=''/>:<img className='parentImg' src={WithDrawalType} alt=''/>}
                    </div>
                </div>
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
              <div className='IconPS'>
                    <div className='iconpsContainer'>
                        {lfBg.it10?<img className='parentImg' src={OfferListWhite} alt=''/>:<img className='parentImg' src={OfferList} alt=''/>}
                    </div>
                </div>
                <span className='titlePs'>Offer list</span>
                <ChevronRightIcon className='arrowPs'/>
            </LfContainer>
            <LfContainer wdIcon={18} htIcon={20} selected={lfBg.it11} onClick={(e)=>{
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
          <div className='IconPS'>
                    <div className='iconpsContainer'>
                        {lfBg.it11?<img className='parentImg' src={EventsWhite} alt=''/>:<img className='parentImg' src={Events} alt=''/>}
                    </div>
                </div>
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
               <div className='IconPS'>
                    <div className='iconpsContainer'>
                        {lfBg.it12?<img className='parentImg' src={ContactWhite} alt=''/>:<img className='parentImg' src={Contact} alt=''/>}
                    </div>
                </div>
                <span  className='titlePs'>Content</span>
                <ChevronRightIcon className='arrowPs'/>
            </LfContainer>
            <LfContainer wdIcon={17} htIcon={20} selected={lfBg.it13} onClick={(e)=>{
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
             <div className='IconPS'>
                    <div className='iconpsContainer'>
                        {lfBg.it13?<img className='parentImg' src={NotificationsWhite} alt=''/>:<img className='parentImg' src={Notifications} alt=''/>}
                    </div>
                </div>
                <span className='titlePs'>Notification</span>
                <ChevronRightIcon className='arrowPs'/>
            </LfContainer>
            
                <img src='https://img.freepik.com/free-vector/big-family-meeting_74855-5220.jpg?size=626&ext=jpg' alt=''/>
         
        </Container>
    )
}

export default LeftSide
