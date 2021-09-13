import React,{useState} from 'react'
import {ReuseIndividualUserComponent} from '../../styles/IndividualUser.styles'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ReuseInputPopUp from '../../utils/popup/ReuseInputPopUp'
import { PopUp} from '../../styles/PopUp.styles';
import {useDispatch} from 'react-redux'
import {SetNewHomeState} from '../../Redux/Actions/HomeActionCreator'
import AdminWhite from '../../images/Iconly/Light outline/AdminWhite.png'
import EventsWhite from '../../images/Iconly/Light outline/EventsWhite.png'
import TransactionsWhite from '../../images/Iconly/Light outline/TransactionsWhite.png'
function ReuseIndividualUser({fs,ls,email,mobile,dob}) {
    const image='https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png'
    const [display,setDispaly]=useState('none')
    const dispatch=useDispatch()
    const handelUserPopUp=(e)=>{
        setDispaly('block')
    }
    const handelCloseModel=(e)=>{
        setDispaly('none')
    }
  
    return (
        <ReuseIndividualUserComponent>
            <div className='IndR'>
            <div onClick={handelUserPopUp} className='InfoUser'>
                            <InfoOutlinedIcon className='accessInfoUser'/>
                        <img src={image} alt=''/>
                   </div>
                    <span id='fs'>{fs}</span>
                    <span id='ls'>{ls}</span>
                    <span id='email'>{email}</span>
                    <span id='mobile'>{mobile}</span>
                    <span id='dob'>{dob}</span>
                            
           
        
                <div className='infoContainer ic1'>
                    <img src={AdminWhite} alt=''/>
                    <span>Childrens</span>
                    
                </div>
          
                <div className='infoContainer ic2'>
                    <img src={EventsWhite} alt=''/>
                    <span>Events</span>
                </div>
          
                <div onClick={()=>dispatch(SetNewHomeState('Transactions'))} className='infoContainer ic3'>
                    <img src={TransactionsWhite} alt=''/>
         
                    <span>Transactions</span>
                </div>
               <div className='infobtnContainer'>
                 <span>Active</span>
               </div >
         
            
            </div>

        
            


                <PopUp showBlockOrNone={display} wd='540' ht='635'>
                <div className='popupModel'>
                    <div className='headerPopUp'>
                    <span id='title'>Account Info</span>  
                    <div id='closeBtn'>
                         <span id='close'  onClick={handelCloseModel}>x</span>
                    </div>
                   
                    </div>
                    <div className='popupModelContent'>
                        <div className='popupModelContentLf'>
                            <div className='popupModelContentLfImage'>
                                <img src={image} alt=''/>
                            </div>
                            <ReuseInputPopUp label='DOB' initialVal='Department'/>
                            <ReuseInputPopUp label='Email' initialVal='moataz@kiweapp.com'/>
                            <ReuseInputPopUp label='Last Seen' initialVal='2 hours ago'/>
                            
                        </div>
                        <div className='popupModelContentRt'>
                        <ReuseInputPopUp label='First name' initialVal='moataz'/>
                        <ReuseInputPopUp label='Last name' initialVal='emad'/>
                        <ReuseInputPopUp label='Number' initialVal='01554477068'/>
                        <ReuseInputPopUp label='Created Date' initialVal='23-10-2020'/>
                      
                        </div>
                        
                    </div>
                    
                </div>

               </PopUp>
                        
        </ReuseIndividualUserComponent>
    )
}

export default ReuseIndividualUser
