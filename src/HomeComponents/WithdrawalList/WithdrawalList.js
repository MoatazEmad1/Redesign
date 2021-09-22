import React,{useState} from 'react'
import {Btn} from '../../styles/WithdrawalList.styles'
import SearchIcon from '@material-ui/icons/Search';
import WithdrawalListReuse from './WithdrawalListReuse'
import Paginate from '../../utils/Paginate'
import ReuseInputPopUp from '../../utils/popup/ReuseInputPopUp'
import { PopUp} from '../../styles/PopUp.styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import search from '../../images/Iconly/Search.png'
import {Parent,WraperContent,WithdrawalListContainer,Wraper,WraperHeader,Button} from '../../SharedStyles/HomeComponentsStyles/Home.styles'
function WithdrawalList() {
    const [display,setDispaly]=useState('none')
    const handelUserPopUp=(e)=>{
       
        setDispaly('block')
    }
    const handelCloseModel=(e)=>{
        setDispaly('none')
    }
  
    return (
        <Parent>
           <span id='HeaderTitle'>Withdrawal List</span>

           <Wraper>
               <WraperHeader>
               <div className='search'>
                    <div className='searchIcon' >
                        <img src={search} alt=''/>
                    </div>
               
                <input type='text' placeholder='Search...'/>
                </div>
                <Button id='WithdrawalList_Bank_Transfer' bg='#639DFF'>Bank Transfer</Button>
                <Button id='WithdrawalList_Cash_Delivery' bg='#4ECAA5'>Cash Delivery</Button>
                <div className='sort'>

              
                <div className='sortUsers'> 
                 <span className='sortby'>Sort By:</span>
                 <span className='default'>Default</span>
                 <div className='downarrowContainer'>
                    <ArrowDropDownIcon/>
                 </div>
                  
                </div>
               
                <div className='btn'>
               <button onClick={handelUserPopUp}>Export</button>
               </div>
               </div>
                </WraperHeader>
                <WraperContent>
                  
                    <input id='WithdrawalList_CheckBox' type='checkbox'/>
                    <span id='WithdrawalList_Transaction_Id'>Transaction Id</span>
                   
                  
                    <span id='WithdrawalList_User_Name'>User Name</span>
                   
                  
                    <span id='WithdrawalList_Mobile'>Mobile</span>
                   
                  
                    <span id='WithdrawalList_Withdrawal_Type'>Withdrawal Type</span>
                   
                  
                    <span id='WithdrawalList_Transaction_Fees'>Transaction Fees</span>
                   
                  
                    <span id='WithdrawalList_Transaction_Charge'>Transaction Charge</span>
                   
                  
                    <span id='WithdrawalList_Amount'>Amount</span>
                   
                  
                    <span id='WithdrawalList_Message'>Message</span>
                   
                  
                    <span id='WithdrawalList_Action'>Action</span>
                   
                </WraperContent>
                {/* ReuseSection */}
                <WithdrawalListReuse id='555-21333' username='moataz' mobile='01554477068' type={1}/>
                <WithdrawalListReuse id='555-21333' username='moataz' mobile='01554477068' type={2}/>
              
                <WithdrawalListReuse id='555-21333' username='moataz' mobile='01554477068' type={1}/>
                <WithdrawalListReuse id='555-21333' username='moataz' mobile='01554477068' type={2}/>
              
                <WithdrawalListReuse id='555-21333' username='moataz' mobile='01554477068' type={1}/>
                <WithdrawalListReuse id='555-21333' username='moataz' mobile='01554477068' type={2}/>
              
                
           </Wraper>
           <PopUp ht='700' wd='700' showBlockOrNone={display}>
                <div className='popupModel'>
                    <div className='headerPopUp BS_Bank'>
                    <span id='title' className='BS_Bank_Title'>Motaz Emad G.Bank Account</span>  
                    <div id='closeBtn'>
                         <span id='close'  onClick={handelCloseModel}>x</span>
                    </div>
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
        </Parent>
    )
}

export default WithdrawalList
