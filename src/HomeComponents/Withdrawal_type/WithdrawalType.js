import React from 'react'
import {WithdrawalTypeContainer,Wraper,WraperHeader,WraperContent,WraperInfo} from '../../styles/WithdrawalType.styles'
import SearchIcon from '@material-ui/icons/Search';
import Paginate from '../../utils/Paginate';
import search from '../../images/Iconly/Search.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function WithdrawalType() {
    return (
        <WithdrawalTypeContainer>
            <span>Withdrawal Type</span>
            <Wraper>
                <WraperHeader>
                <div className='search'>
                    <div className='searchIcon' >
                        <img src={search} alt=''/>
                    </div>
               
                <input type='text' placeholder='Search...'/>
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
               <button >Add</button>
               </div>
               </div>
                </WraperHeader>
                <WraperContent>
                <span id='id'>ID</span>
                <span id='name'>Name</span>
                <span id='action'>Action</span>
                </WraperContent>
                <WraperInfo>
                    <span id='id'>1</span>
                    <span id='name'>moataz</span>
                    <button id='action'>Edit</button>
                </WraperInfo>
                <WraperInfo>
                <span id='id'>2</span>
                    <span id='name'>ahmed</span>
                    <button id='action'>Edit</button>
                </WraperInfo>
            </Wraper>
            <Paginate/>
        </WithdrawalTypeContainer>
    )
}

export default WithdrawalType
