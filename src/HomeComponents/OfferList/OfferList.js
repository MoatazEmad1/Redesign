import React from 'react'
//import {OfferListContainer,Wraper,WraperHeader,WraperContent} from '../../styles/OfferList.styles'
import SearchIcon from '@material-ui/icons/Search';
import OfferListReuse from './OfferListReuse'
import Paginate from '../../utils/Paginate';
import {useDispatch} from 'react-redux'
import {SetNewHomeState} from '../../Redux/Actions/HomeActionCreator'
import search from '../../images/Iconly/Search.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Parent,Wraper,WraperHeader,WraperContent} from '../../SharedStyles/HomeComponentsStyles/Home.styles'
function OfferList() {
    const dispatch=useDispatch()
    return (
        <Parent>
           <span id='HeaderTitle'>Offer List</span>
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
                <span id='OfferList_Offer_Name'>Offer Name</span>
                <span id='OfferList_Offer_Image'>Offer Image</span>
                <span id='OfferList_Action'>Action</span>
               </WraperContent>
               <OfferListReuse name='security'/>
               <OfferListReuse name='security'/>
               <OfferListReuse name='security'/>
            
           </Wraper>
           <Paginate/>
        </Parent>
    )
}

export default OfferList
