import React from 'react'
import {WithdrawalTypeContainer,Wraper,WraperHeader,WraperContent,WraperInfo} from '../../styles/WithdrawalType.styles'
import SearchIcon from '@material-ui/icons/Search';
import Paginate from '../../utils/Paginate';

function WithdrawalType() {
    return (
        <WithdrawalTypeContainer>
            <span>Withdrawal Type</span>
            <Wraper>
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
               <button >Add</button>
               </div>
               </div>
                </WraperHeader>
                <WraperContent>
                <span>ID</span>
                <span>Name</span>
                <span>Action</span>
                </WraperContent>
                <WraperInfo>
                    <span>1</span>
                    <span>moataz</span>
                    <button>Edit</button>
                </WraperInfo>
                <WraperInfo>
                    <span>2</span>
                    <span>ahmed</span>
                    <button>Edit</button>
                </WraperInfo>
            </Wraper>
            <Paginate/>
        </WithdrawalTypeContainer>
    )
}

export default WithdrawalType
