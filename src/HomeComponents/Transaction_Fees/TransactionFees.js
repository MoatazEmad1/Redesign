import React from 'react'
import {TransactionFeesContainer,Wraper,WraperHeader,WraperInfo,WraperContent} from '../../styles/TransactionFees.styles'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Paginate from '../../utils/Paginate';
function TransactionFees() {
    return (
        <TransactionFeesContainer>
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
               </div>
                </WraperHeader>
                <WraperContent>
                <span>Free type</span>
                <span>Fees</span>
                <span>Action</span>
                </WraperContent>
                <WraperInfo>
                <div className='fsContainer'>
                <ExpandMoreOutlinedIcon className='downArrow'/>
                <span>withdraw_money</span>
                </div>
                <span className='number'>3</span>
                <button>Edit</button>
                </WraperInfo>
                <WraperInfo>
                <div className='fsContainer'>
                <ExpandMoreOutlinedIcon className='downArrow'/>
                <span>withdraw_money</span>
                </div>
                <span className='number'>3</span>
                <button>Edit</button>
                </WraperInfo>
                <WraperInfo>
                <div className='fsContainer'>
                <ExpandMoreOutlinedIcon className='downArrow'/>
                <span>withdraw_money</span>
                </div>
                <span className='number'>3</span>
                <button>Edit</button>
                </WraperInfo>
                <WraperInfo>
                <div className='fsContainer'>
                <ExpandMoreOutlinedIcon className='downArrow'/>
                <span>withdraw_money</span>
                </div>
                <span className='number'>3</span>
                <button>Edit</button>
                </WraperInfo>
                <WraperInfo>
                <div className='fsContainer'>
                <ExpandMoreOutlinedIcon className='downArrow'/>
                <span>withdraw_money</span>
                </div>
                <span className='number'>3</span>
                <button>Edit</button>
                </WraperInfo>
                <WraperInfo>
                <div className='fsContainer'>
                <ExpandMoreOutlinedIcon className='downArrow'/>
                <span>withdraw_money</span>
                </div>
                <span className='number'>3</span>
                <button>Edit</button>
                </WraperInfo>
            </Wraper>
            <Paginate/>
        </TransactionFeesContainer>
    )
}

export default TransactionFees
