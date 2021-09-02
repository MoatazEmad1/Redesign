import React,{useState} from 'react'
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import {BusinessUsersReuseContainer,Button} from '../../styles/BusinessUsers.styles'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import ReuseInputPopUp from '../../utils/popup/ReuseInputPopUp'
import {PopUp} from '../../styles/PopUp.styles'
import {useDispatch} from 'react-redux'
import {SetNewHomeState} from '../../Redux/Actions/HomeActionCreator'
function BusinessUsersReuse({user_name,business_name,mobile,email}) {
    const image='https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png'
    const [display,setDispaly]=useState('none')
    const [displayDetails,setdisplayDetails]=useState('none')
    const dispatch=useDispatch()
    const handelUserPopUp=(e)=>{
        setDispaly('block')
    }
    const handelCloseModel=(e)=>{
        setDispaly('none')
    }
  const handelDetailsPopUp=()=>{
    setdisplayDetails('block')
  }
  const handelCloseDetails=()=>{
    setdisplayDetails('none')
  }
    return (
        <BusinessUsersReuseContainer>
           <div className='burc'>
           <div className='InfoUser' onClick={handelDetailsPopUp}>
                <InfoOutlinedIcon className='accessInfoUser'/>
                <img src={image} alt=''/>
               </div>
               <span id='username'>{user_name}</span>
               <AccountBalanceOutlinedIcon className='bankIcon' onClick={handelUserPopUp}/>
               <span id='be'>{business_name}</span>
               <span id='mobile'>{mobile}</span>
               <span id='email'>{email}</span>
          
           
            <div onClick={(e)=>dispatch(SetNewHomeState('Transactions'))} className='BtnContainer'>
            <ImportExportOutlinedIcon/>
            <span>Transactions</span>
            </div>
            <div className='BtnContainerActive'>
           
            <span>Active</span>
            </div>
           </div>
                  

            
            <PopUp showBlockOrNone={display} wd='700' ht='494'>
                <div className='popupModel'>
                    <div className='headerPopUp BS_Bank'>
                    <span id='title' className='BS_Bank_Title'>Motaz Emad G.Bank Account</span>  
                    <div id='closeBtn'>
                         <span id='close'  onClick={handelCloseModel}>x</span>
                    </div>
                    </div>
                    <div className='popupModelContent'>
                        <div className='popupModelContentLf'>
                            
                            <ReuseInputPopUp label='Bank Name' initialVal='MBE'/>
                            <ReuseInputPopUp label='Bank Account Name' initialVal='19019'/>
                            <ReuseInputPopUp label='Bank Account Number' initialVal='Nbe123'/>
                            <Button bg='#04B4FF'>Export</Button>
                        </div>
                        <div className='popupModelContentRt'>
                        <ReuseInputPopUp label='Bank Adress' initialVal='damanhour'/>
                        <ReuseInputPopUp label='Bank Account Number' initialVal='Nbe123'/>
                        <ReuseInputPopUp label='Swift code' initialVal='Nbe123'/>
                        <Button bg='#4ECAA5'>Print</Button>
                        </div>
                        
                    </div>
                    
                </div>

               </PopUp>

               <PopUp showBlockOrNone={displayDetails} wd='775' ht='590'>
               <div className='popupModel'>
                    <div className='headerPopUp BS_Bank'>
                    <span id='title' className='BS_Bank_Title'>Ramadan Bags | kiwe Business Details</span>  
                    <div id='closeBtn'>
                         <span id='close'  onClick={handelCloseDetails}>x</span>
                    </div>
                    </div>
                    <div className='popupModelContent'>
                        <div className='popupModelContentLf'>
                            
                            <ReuseInputPopUp label='Business' initialVal='Mohammed Khalifa'/>
                            <ReuseInputPopUp label='Email' initialVal='moataz@gmail.com'/>
                            <ReuseInputPopUp label='User ID' initialVal='(406) 555-0120'/>
                            <ReuseInputPopUp label='Commercial Register' initialVal='(406) 555-0120'/>
                           
                        </div>
                        <div className='popupModelContentMd'>
                        <ReuseInputPopUp label='Business Description' initialVal='155532428'/>
                        <ReuseInputPopUp label='Mobile Number' initialVal='01554477068'/>
                        <ReuseInputPopUp label='Website' initialVal='kiwe.com'/>
                        <ReuseInputPopUp label='Tax Id' initialVal='126644746'/>
                       
                        </div>
                        <div className='popupModelContentRt'>
                        <ReuseInputPopUp label='Adress' initialVal='damanhour'/>
                        <ReuseInputPopUp label='Person In charge' initialVal='some charge'/>
                        <ReuseInputPopUp label='Status' initialVal='Active'/>
                        
                        </div>
                      
                    </div>
                    <div className='btnsContainer'>
                        <Button bg='#04B4FF'>Close</Button>
                        <Button bg='#4ECAA5'>Print</Button>
                    </div>
                   
                </div>
               </PopUp> 
                       
        </BusinessUsersReuseContainer>
    )
}

export default BusinessUsersReuse
