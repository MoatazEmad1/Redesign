import React from 'react'
import {TransactionContainer,Wraper,WraperHeader,Button,WraperContent} from '../../styles/Transaction.styles'
import SearchIcon from '@material-ui/icons/Search';
import TransactionReuse from './TransactionReuse'
import Paginate from '../../utils/Paginate';
function Transaction() {
    return (
        <TransactionContainer>
            <span>Transaction</span>
            <Wraper>
                <WraperHeader>
                <div className='search'>
                <SearchIcon className='searchIcon'/>
                <input type='text' placeholder='Search...'/>
                </div> 
                <Button id='add' bg='#29DDBB'>Add</Button>
                <Button id='send' bg='#0C9AFE'>Send</Button>
                <Button id='pay' bg='#FEE877'>Pay</Button>
                <Button id='req' bg='#FD6A70'>Request</Button>
                <Button id='all' bg='#212A54'>All</Button>
                <div className='sort'>

               
              
                <div className='sortUsers'> 
                 <span>Sort By:</span>
                    <select>
                    <option value="Default">Default</option>
                    </select>
                </div>
               
                <div className='btn'>
               <button >Export</button>
               </div>
               </div>
                </WraperHeader>
                <WraperContent>
                   
                        <input id='cx' type='checkbox'/>
                        <span id='td'>Transaction Id</span>
                  
                  
                        <span id='te'>Transaction Type</span>
                 
                  
                        <span id='fn'>From Person</span>
                 
                
                        <span id='tn'>To person</span>
                
                
                        <span id='tne'>Transaction Fee</span>
                   
                  
                        <span id='tce'>Transaction Charge</span>
                
                  
                        <span id='at'>Amount</span>
             
                   
                        <span id='me'>Message</span>
           
                   
                        <span id='cdt'>Created date time</span>
               
                 
                        <span id='ss'>Status</span>
               
                   
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
        </TransactionContainer>
    )
}

export default Transaction
