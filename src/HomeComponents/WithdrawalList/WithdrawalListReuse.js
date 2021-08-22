import React,{useState} from 'react'
import {WithdrawalListReuseContainer,Button} from '../../styles/WithdrawalList.styles'
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
            <div className='contentInfo'>
            <input type='checkbox'/>
            <span>{id}</span>
            </div>
            <div className='contentInfo'>
            <span>{username}</span>
            </div>
            <div className='contentInfo'>
            <span>{mobile}</span>
            </div>
            <div className='contentInfo'>
            <span>{type===1?<AccountBalanceOutlinedIcon onClick={handelUserPopUp} className='bank-icon'/>:<LocalAtmOutlinedIcon className='money-icon'/>}</span>

            </div>
            <div className='contentInfo'>
            <span>3</span>
            </div>
            <div className='contentInfo'>
            <span>3</span>
            </div>
            <div className='contentInfo'>
            <span>100 Euro</span>
            </div>
            <div className='contentInfo'>
            <span>Withdraw Money</span>
            </div>
            <div className='contentInfo'>
                <Button bg='#4ECAA5'>Paid</Button>
                <Button bg='#FF666A'>Declined</Button>
            </div>
            <PopUp ht={40} wd={60} showBlockOrNone={display}>
                <div className='popupModel'>
                    <div className='headerPopUp'>
                    <span>Motaz Emad G.Bank Account</span>  
                    <span onClick={handelCloseModel}>X</span>
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
        </WithdrawalListReuseContainer>
    )
}

export default WithdrawalListReuse
