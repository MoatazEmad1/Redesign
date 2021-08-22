import React from 'react'
import {OfferListContainer,Wraper,WraperHeader,WraperContent} from '../../styles/OfferList.styles'
import SearchIcon from '@material-ui/icons/Search';
import OfferListReuse from './OfferListReuse'
import Paginate from '../../utils/Paginate';
import {useDispatch} from 'react-redux'
import {SetNewHomeState} from '../../Redux/Actions/HomeActionCreator'
function OfferList() {
    const dispatch=useDispatch()
    return (
        <OfferListContainer>
           <span>Offer List</span>
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
               <button onClick={()=>dispatch(SetNewHomeState('OfferListAdd'))}>Add</button>
               </div>
               </div>
               </WraperHeader>
               <WraperContent>
                <span>Offer Name</span>
                <span>Offer Image</span>
                <span>Action</span>
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
