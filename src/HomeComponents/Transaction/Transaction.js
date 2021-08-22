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
                <Button bg='#29DDBB'>Add</Button>
                <Button bg='#0C9AFE'>Send</Button>
                <Button bg='#FEE877'>Pay</Button>
                <Button bg='#FD6A70'>Request</Button>
                <Button bg='#212A54'>All</Button>
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
                    <div className='content'>
                        <input type='checkbox'/>
                        <span>Transaction Id</span>
                    </div>
                    <div className='content'>
                        <span>Transaction Type</span>
                    </div>
                    <div className='content'>
                        <span>From Person</span>
                    </div>
                    <div className='content'>
                        <span>To person</span>
                    </div>
                    <div className='content'>
                        <span>Transaction Fee</span>
                    </div>
                    <div className='content'>
                        <span>Transaction Charge</span>
                    </div>
                    <div className='content'>
                        <span>Amount</span>
                    </div>
                    <div className='content'>
                        <span>Message</span>
                    </div>
                    <div className='content'>
                        <span>Created date time</span>
                    </div>
                    <div className='content'>
                        <span>Status</span>
                    </div>
                   
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
