import React,{useState} from 'react'
import {WithdrawalListReuseContainer,Button,Btn} from '../../styles/WithdrawalList.styles'
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import ReuseInputPopUp from '../../utils/popup/ReuseInputPopUp'
import { PopUp} from '../../styles/PopUp.styles';
function WithdrawalListReuse({id,username,mobile,type}) {
    const [display,setDispaly]=useState('none')
    const handelUserPopUp=(e)=>{
        setDispaly('block')
    }
    const handelCloseModel=(e)=>{
        setDispaly('none')
    }
    return (
        <WithdrawalListReuseContainer>
           <div className='wlrc'>
           <input id='cx' type='checkbox'/>
            <span id='td'>{id}</span>
          
           
            <span id='ue'>{username}</span>
          
           
            <span id='me'>{mobile}</span>
          
           
            <span id='we'>{type===1?<AccountBalanceOutlinedIcon onClick={handelUserPopUp} className='bank-icon'/>:<LocalAtmOutlinedIcon className='money-icon'/>}</span>

          
           
            <span id='ts'>3</span>
          
           
            <span id='tne'>3</span>
          
           
            <span id='at'>100 Euro</span>
          
           
            <span id='msg'>Withdraw Money</span>
          
           
                <Button id='paid' bg='#4ECAA5'>Paid</Button>
                <Button id='dec' bg='#FF666A'>Declined</Button>
          
           </div>
          
            <PopUp ht='494' wd='700' showBlockOrNone={display}>
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
                            <Btn bg='#04B4FF'>Export</Btn>
                        </div>
                        <div className='popupModelContentRt'>
                        <ReuseInputPopUp label='Bank Adress' initialVal='damanhour'/>
                        <ReuseInputPopUp label='Bank Account Number' initialVal='Nbe123'/>
                        <ReuseInputPopUp label='Swift code' initialVal='Nbe123'/>
                        <Btn bg='#4ECAA5'>Print</Btn>
                        </div>
                        
                    </div>
                    
                </div>

               </PopUp>
        </WithdrawalListReuseContainer>
    )
}

export default WithdrawalListReuse
