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
                <span id='id'>Free type</span>
                <span id='name'>Fees</span>
                <span id='action'>Action</span>
                </WraperContent>

                <WraperInfo>
              
                <ExpandMoreOutlinedIcon className='downArrow'/>
                <span id='wy'>withdraw_money</span>
               
                <span id='num' className='number'>3</span>
                <button id='et'>Edit</button>
                </WraperInfo>

                <WraperInfo>

                
                <ExpandMoreOutlinedIcon className='downArrow'/>
                <span id='wy'>withdraw_money</span>
               
                <span id='num' className='number'>3</span>
                <button id='et'>Edit</button>
                </WraperInfo>
                <WraperInfo>
                
                <ExpandMoreOutlinedIcon className='downArrow'/>
                <span  id='wy'>withdraw_money</span>
               
                <span id='num' className='number'>3</span>
                <button  id='et'>Edit</button>
                </WraperInfo>
                <WraperInfo>
                
                <ExpandMoreOutlinedIcon className='downArrow'/>
                <span id='wy'>withdraw_money</span>
               
                <span id='num' className='number'>3</span>
                <button id='et'>Edit</button>
                </WraperInfo>

                <WraperInfo>
                
                <ExpandMoreOutlinedIcon  className='downArrow'/>
                <span id='wy'>withdraw_money</span>
               
                <span id='num' className='number'>3</span>
                <button id='et'>Edit</button>
                </WraperInfo>

                <WraperInfo>
                
                <ExpandMoreOutlinedIcon className='downArrow'/>
                <span id='wy'>withdraw_money</span>
               
                <span id='num' className='number'>3</span>
                <button id='et'>Edit</button>
                </WraperInfo>
            </Wraper>
            <Paginate/>
        </TransactionFeesContainer>
    )
}

export default TransactionFees
