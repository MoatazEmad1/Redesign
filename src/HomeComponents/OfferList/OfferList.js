import React from 'react'
import {OfferListContainer,Wraper,WraperHeader,WraperContent} from '../../styles/OfferList.styles'
import SearchIcon from '@material-ui/icons/Search';
import OfferListReuse from './OfferListReuse'
import Paginate from '../../utils/Paginate';
import {useDispatch} from 'react-redux'
import {SetNewHomeState} from '../../Redux/Actions/HomeActionCreator'
import search from '../../images/Iconly/Search.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function OfferList() {
    const dispatch=useDispatch()
    return (
        <OfferListContainer>
           <span>Offer List</span>
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
               <button onClick={()=>dispatch(SetNewHomeState('OfferListAdd'))}>Add</button>
               </div>
               </div>
               </WraperHeader>
               <WraperContent>
                <span id='id'>Offer Name</span>
                <span id='name'>Offer Image</span>
                <span id='action'>Action</span>
               </WraperContent>
               <OfferListReuse name='security'/>
               <OfferListReuse name='security'/>
               <OfferListReuse name='security'/>
            
           </Wraper>
           <Paginate/>
        </OfferListContainer>
    )
}

export default OfferList
