import React from 'react'
import {TransactionsContainer,Wraper,WraperHeader,WraperImage,WraperContent} from '../../styles/Transactions.styles'
import SearchIcon from '@material-ui/icons/Search';
import TransactionsReuse from './TransactionsReuse'
import Paginate from '../../utils/Paginate';
function Transactions() {
    const image='https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png'

    return (
        <TransactionsContainer>
                <span>Transactions</span>
                <Wraper>
                    <WraperHeader>
                    <WraperHeader>
                <div className='search'>
                <SearchIcon className='searchIcon'/>
                <input type='text' placeholder='Search...'/>
                </div>
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
               
                    </WraperHeader> 
                    <WraperImage>
                <div className='imageContainer'>
                <img src={image} alt=''/>
                <span>Moataz</span>
                </div>
                </WraperImage>

                <WraperContent>
                    <div className='Info'>
                    <span>Transaction Type</span>

                    </div>
                    <div className='Info'>
                    <span>From/To person</span>

                    </div>
                    <div className='Info'>
                    <span>Transaction Fee</span>

                    </div>
                    <div className='Info'>
                    <span>Transaction Charge</span>

                    </div>
                    <div className='Info'>
                    <span>Amount</span>

                    </div>
                    <div className='Info'>
                    <span>Message</span>

                    </div>
                    <div className='Info'>
                    <span>Created Date Time</span>

                    </div>
                    <div className='Info'>
                    <span>Status</span>

                    </div>
                </WraperContent>
                <TransactionsReuse moneyIn='Money-In' name='moataz' percent='2%' charge='E2.0' amount='E10' msg='Bags' cdt='16 sep 2020 10AM'/>
                <TransactionsReuse moneyIn='Money-In' name='moataz' percent='2%' charge='E2.0' amount='E10' msg='Bags' cdt='16 sep 2020 10AM'/>
                <TransactionsReuse moneyIn='Money-In' name='moataz' percent='2%' charge='E2.0' amount='E10' msg='Bags' cdt='16 sep 2020 10AM'/>
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
