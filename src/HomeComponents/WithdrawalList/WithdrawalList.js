import React,{useState} from 'react'
import {Btn,WraperContent,WithdrawalListContainer,Wraper,WraperHeader,Button} from '../../styles/WithdrawalList.styles'
import SearchIcon from '@material-ui/icons/Search';
import WithdrawalListReuse from './WithdrawalListReuse'
import Paginate from '../../utils/Paginate'
import ReuseInputPopUp from '../../utils/popup/ReuseInputPopUp'
import { PopUp} from '../../styles/PopUp.styles';
function WithdrawalList() {
    const [display,setDispaly]=useState('none')
    const handelUserPopUp=(e)=>{
       
        setDispaly('block')
    }
    const handelCloseModel=(e)=>{
        setDispaly('none')
    }
  
    return (
        <WithdrawalListContainer>
           <span>Withdrawal List</span>

           <Wraper>
               <WraperHeader>
               <div className='search'>
                <SearchIcon className='searchIcon'/>
                <input type='text' placeholder='Search...'/>
                </div>
                <Button bg='#639DFF'>Bank Transfer</Button>
                <Button bg='#4ECAA5'>Cash Delivery</Button>
                <div className='sort'>

              
                <div className='sortUsers'> 
                 <span>Sort By:</span>
                    <select>
                    <option value="Default">Default</option>
                    </select>
                </div>
               
                <div className='btn'>
               <button onClick={handelUserPopUp}>Export</button>
               </div>
               </div>
                </WraperHeader>
                <WraperContent>
                    <div className='contentInfo'>
                    <input type='checkbox'/>
                    <span>Transaction Id</span>
                    </div>
                    <div className='contentInfo'>
                    <span>User Name</span>
                    </div>
                    <div className='contentInfo'>
                    <span>Mobile</span>
                    </div>
                    <div className='contentInfo'>
                    <span>Withdrawal Type</span>
                    </div>
                    <div className='contentInfo'>
                    <span>Transaction Fees</span>
                    </div>
                    <div className='contentInfo'>
                    <span>Transaction Charge</span>
                    </div>
                    <div className='contentInfo'>
                    <span>Amount</span>
                    </div>
                    <div className='contentInfo'>
                    <span>Message</span>
                    </div>
                    <div className='contentInfo'>
                    <span>Action</span>
                    </div>
                </WraperContent>
                {/* ReuseSection */}
                <WithdrawalListReuse id='555-21333' username='moataz' mobile='01554477068' type={1}/>
                <WithdrawalListReuse id='555-21333' username='moataz' mobile='01554477068' type={2}/>
              
                <WithdrawalListReuse id='555-21333' username='moataz' mobile='01554477068' type={1}/>
                <WithdrawalListReuse id='555-21333' username='moataz' mobile='01554477068' type={2}/>
              
                <WithdrawalListReuse id='555-21333' username='moataz' mobile='01554477068' type={1}/>
                <WithdrawalListReuse id='555-21333' username='moataz' mobile='01554477068' type={2}/>
              
                
           </Wraper>
           <PopUp ht={70} wd={60} showBlockOrNone={display}>
                <div className='popupModel'>
                    <div className='headerPopUp'>
                    <span>Motaz Emad G.Bank Account</span>  
                    <span onClick={handelCloseModel}>X</span>
                    </div>
                    <div className='popupModelContent'>
                        <div className='popupModelContentLf'>
                            
                            <ReuseInputPopUp label='Sender Name' initialVal='moataz'/>
                            <ReuseInputPopUp label='Adress Line1' initialVal='QNB'/>
                            <ReuseInputPopUp label='City' initialVal='Mandi'/>
                            <ReuseInputPopUp label='Postal Code ' initialVal='Nbe123'/>
                            <ReuseInputPopUp label='Latitube' initialVal='1234-2423'/>
                          
                        </div>
                        <div className='popupModelContentRt'>
                        <ReuseInputPopUp label='Mobile Number' initialVal='01554477068'/>
                        <ReuseInputPopUp label='Adress Line 2' initialVal='Damanhour'/>
                        <ReuseInputPopUp label='state' initialVal='Nbe123'/>
                        <ReuseInputPopUp label='Latitube' initialVal='123-4321'/>
                        
                        </div>
                      
                    </div>
                    <div className='btnsContainer'>
                        <Btn bg='#04B4FF'>Export</Btn>
                        <Btn bg='#4ECAA5'>Print</Btn>
                    </div>
                    
                </div>

               </PopUp>
           <Paginate/>
        </WithdrawalListContainer>
    )
}

export default WithdrawalList
