import React from 'react'
import {WraperInfo,WraperContent,WraperHeader,Wraper,ContactContainer} from '../../styles/Contact.styles'
import SearchIcon from '@material-ui/icons/Search';
import Paginate from '../../utils/Paginate'
import search from '../../images/Iconly/Search.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {useDispatch} from 'react-redux'
import {SetNewHomeState} from '../../Redux/Actions/HomeActionCreator'
function Contact({contactEdit,setcontactEdit,contactInfo}) {
    const dispatch=useDispatch()
  
    return (
        <ContactContainer>
           <span id='HeaderTitle'>Contact</span>
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
                <span id='id'>Title Slug</span>
                <span id='name'>Contact</span>
                <span id='action'>Action</span>
                </WraperContent>
                <WraperInfo>
                    <span id='id'>Terms</span>
                    <span id='name'>{contactEdit==='Terms'?contactInfo:'-'}</span>
                    <button id='action' onClick={()=>{
                        dispatch(SetNewHomeState('Edit'))
                        setcontactEdit('Terms')
                    }}>Edit</button>
                </WraperInfo>
                <WraperInfo>
                    <span id='id'>Privacy</span>
                    <span id='name'>{contactEdit==='Privacy'?contactInfo:'-'}</span>
                    <button id='action' onClick={()=>{
                        dispatch(SetNewHomeState('Edit'))
                        setcontactEdit('Privacy')
                    }}>Edit</button>
                </WraperInfo>
           </Wraper>
           <Paginate/>
        </ContactContainer>
    )
}

export default Contact
