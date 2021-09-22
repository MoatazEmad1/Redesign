import React from 'react'
//import {TransactionContainer,Wraper,WraperHeader,Button,WraperContent} from '../../styles/Transaction.styles'
import SearchIcon from '@material-ui/icons/Search';
import TransactionReuse from './TransactionReuse'
import Paginate from '../../utils/Paginate';
import search from '../../images/Iconly/Search.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Parent,Wraper,WraperHeader,Button,WraperContent} from '../../SharedStyles/HomeComponentsStyles/Home.styles'
function Transaction() {
    return (
        <Parent>
            <span id='HeaderTitle'>Transaction</span>
            <Wraper>
                <WraperHeader>
                <div className='search'>
                    <div className='searchIcon' >
                        <img src={search} alt=''/>
                    </div>
               
                <input type='text' placeholder='Search...'/>
                </div>
                <Button id='Transaction_Add' bg='#29DDBB'>Add</Button>
                <Button id='Transaction_Send' bg='#0C9AFE'>Send</Button>
                <Button id='Transaction_Pay' bg='#FEE877'>Pay</Button>
                <Button id='Transaction_Request' bg='#FD6A70'>Request</Button>
                <Button id='Transaction_All' bg='#212A54'>All</Button>
                <div className='sort'>

               
                <div className='sortUsers'> 
                 <span className='sortby'>Sort By:</span>
                 <span className='default'>Default</span>
                 <div className='downarrowContainer'>
                    <ArrowDropDownIcon/>
                 </div>
                  
                </div>
               
                <div className='btn'>
               <button >Export</button>
               </div>
               </div>
                </WraperHeader>
                <WraperContent>
                   
                        <input id='Transaction_CheckBox' type='checkbox'/>
                        <span id='Transaction_Transaction_Id'>Transaction Id</span>
                  
                  
                        <span id='Transaction_Transaction_Type'>Transaction Type</span>
                 
                  
                        <span id='Transaction_From_Person'>From Person</span>
                 
                
                        <span id='Transaction_To_Person'>To person</span>
                
                
                        <span id='Transaction_Transaction_Fee'>Transaction Fee</span>
                   
                  
                        <span id='Transaction_Transaction_Charge'>Transaction Charge</span>
                
                  
                        <span id='Transaction_Amount'>Amount</span>
             
                   
                        <span id='Transaction_Message'>Message</span>
           
                   
                        <span id='Transaction_Created_Date_Time'>Created date time</span>
               
                 
                        <span id='Transaction_Status'>Status</span>
               
                   
                </WraperContent>
                {/* Reuse Wraper Information */}
                <TransactionReuse id='1234331' type='Money-Out' from='moataz' to='ahmed' amount='E10' msg='Event...' cdt='16 sep 2020 10AM'/>
                <TransactionReuse id='1234331' type='Money-Out' from='moataz' to='ahmed' amount='E10' msg='Event...' cdt='16 sep 2020 10AM'/>
                <TransactionReuse id='1234331' type='Money-Out' from='moataz' to='ahmed' amount='E10' msg='Event...' cdt='16 sep 2020 10AM'/>
                <TransactionReuse id='1234331' type='Money-Out' from='moataz' to='ahmed' amount='E10' msg='Event...' cdt='16 sep 2020 10AM'/>
                <TransactionReuse id='1234331' type='Money-Out' from='moataz' to='ahmed' amount='E10' msg='Event...' cdt='16 sep 2020 10AM'/>
                <TransactionReuse id='1234331' type='Money-Out' from='moataz' to='ahmed' amount='E10' msg='Event...' cdt='16 sep 2020 10AM'/>
                <TransactionReuse id='1234331' type='Money-Out' from='moataz' to='ahmed' amount='E10' msg='Event...' cdt='16 sep 2020 10AM'/>
                <TransactionReuse id='1234331' type='Money-Out' from='moataz' to='ahmed' amount='E10' msg='Event...' cdt='16 sep 2020 10AM'/>
                <TransactionReuse id='1234331' type='Money-Out' from='moataz' to='ahmed' amount='E10' msg='Event...' cdt='16 sep 2020 10AM'/>
                <TransactionReuse id='1234331' type='Money-Out' from='moataz' to='ahmed' amount='E10' msg='Event...' cdt='16 sep 2020 10AM'/>
            </Wraper>
            <Paginate/>
        </Parent>
    )
}

export default Transaction
