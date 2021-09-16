import React, { useState } from 'react'
import {TransactionsContainer,Wraper,WraperHeader,WraperImage,WraperContent} from '../../styles/Transactions.styles'
import SearchIcon from '@material-ui/icons/Search';
import TransactionsReuse from './TransactionsReuse'
import Paginate from '../../utils/Paginate';
import search from '../../images/Iconly/Search.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function Transactions() {
    const image='https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png'
    const calenderImg='https://www.pngkey.com/png/full/109-1094594_calendar-clipart-png-transparent-calendar-icon-transparent-background.png'
    const [startDate, setStartDate] = useState(new Date());
    return (
        <TransactionsContainer>
                <span>Transactions</span>
                <Wraper>
        
                    <WraperHeader>
                    <div className='search'>
                    <div className='searchIcon' >
                        <img src={search} alt=''/>
                    </div>
               
                <input type='text' placeholder='Search...'/>
                </div> 
                <div className='DATE'>
                    <img src={calenderImg} alt=''/>
                  <DatePicker id='datepicker' selected={startDate} onChange={(date) => setStartDate(date)} isClearable showYearDropdown scrollableMonthYearDropdown
                  placeholderText="Enter A Date"
                  />
                 </div>

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
                    <WraperImage>
                <div className='imageContainer'>
                <img src={image} alt=''/>
                <span>Moataz</span>
                </div>
                </WraperImage>

                <WraperContent>
                   
                    <span id='te'>Transaction Type</span>

                 
                   
                    <span id='fn'>From/To person</span>

                 
                   
                    <span id='tne'>Transaction Fee</span>

                 
                   
                    <span id='tce'>Transaction Charge</span>

                 
                   
                    <span id='at'>Amount</span>

                 
                   
                    <span id='msg'>Message</span>

                 
                   
                    <span id='cdt'>Created Date Time</span>

                 
                   
                    <span id='st'>Status</span>

                 
                </WraperContent>
                <TransactionsReuse moneyIn='Money-In' name='moataz' percent='2%' charge='E2.0' amount='E10' msg='Bags' cdt='16 sep 2020 10AM'/>
                <TransactionsReuse moneyIn='Money-In' name='moataz' percent='2%' charge='E2.0' amount='E10' msg='Bags' cdt='16 sep 2020 10AM'/>
                <TransactionsReuse moneyIn='Money-In' name='moataz' percent='2%' charge='E2.0' amount='E10' msg='Bags' cdt='16 sep 2020 10AM'/>
                <TransactionsReuse moneyIn='Money-In' name='moataz' percent='2%' charge='E2.0' amount='E10' msg='Bags' cdt='16 sep 2020 10AM'/>
                <TransactionsReuse moneyIn='Money-In' name='moataz' percent='2%' charge='E2.0' amount='E10' msg='Bags' cdt='16 sep 2020 10AM'/>
                <TransactionsReuse moneyIn='Money-In' name='moataz' percent='2%' charge='E2.0' amount='E10' msg='Bags' cdt='16 sep 2020 10AM'/>
                <TransactionsReuse moneyIn='Money-In' name='moataz' percent='2%' charge='E2.0' amount='E10' msg='Bags' cdt='16 sep 2020 10AM'/>
              

                </Wraper>
                <Paginate/>
        </TransactionsContainer>
    )
}

export default Transactions
