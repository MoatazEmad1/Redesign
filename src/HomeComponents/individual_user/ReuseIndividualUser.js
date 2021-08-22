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
            
            <div className='WraperContentLf'>
                    <div onClick={handelUserPopUp} className='InfoUser'>
                            <InfoOutlinedIcon className='accessInfoUser'/>
                        <img src={image} alt=''/>
                   </div>
                       
                           <div className='WraperContentContainer'>

                                    <span className='WraperContentLfSpan'>{fs}</span>
                        
                                    <span className='WraperContentLfSpan'>{ls}</span>
                                
                                    <span className='WraperContentLfSpan'>{email}</span>
                           </div>
                     
                    
                     </div>
            
               
                        <div className='WraperContentRt'>
                            <span>{mobile}</span>
                    
                            <span>{dob}</span>
                       
           
        
                <div className='infoContainer'>
                    <PermIdentityIcon /> 
                    <span>Childrens</span>
                    
                </div>
          
                <div className='infoContainer'>
                    <EventNoteIcon/> 
                    <span>Events</span>
                </div>
          
                <div onClick={()=>dispatch(SetNewHomeState('Transactions'))} className='infoContainer'>
                    <ImportExportIcon/> 
                    <span>Transactions</span>
                </div>
               <div className='infobtnContainer'>
                 <span>Active</span>
               </div >
            

                </div>
                <PopUp showBlockOrNone={display}>
                <div className='popupModel'>
                    <div className='headerPopUp'>
                    <span>Account Info</span>  
                    <span onClick={handelCloseModel}>X</span>
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
