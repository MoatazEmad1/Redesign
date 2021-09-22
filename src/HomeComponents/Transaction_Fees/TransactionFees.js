import React from 'react'
import {WraperInfo} from '../../styles/TransactionFees.styles'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Paginate from '../../utils/Paginate';
import search from '../../images/Iconly/Search.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Parent,Wraper,WraperHeader,WraperContent} from '../../SharedStyles/HomeComponentsStyles/Home.styles'
function TransactionFees() {
    return (
        <Parent>
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
                </div>
            </WraperHeader>
                <WraperContent>
                <span id='TransactionFees_Free_Type'>Free type</span>
                <span id='TransactionFees_Fees'>Fees</span>
                <span id='TransactionFees_Action'>Action</span>
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
        </Parent>
    )
}

export default TransactionFees
