import React from 'react'
import {WraperInfo} from '../../styles/Contact.styles'
import SearchIcon from '@material-ui/icons/Search';
import Paginate from '../../utils/Paginate'
import search from '../../images/Iconly/Search.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {useDispatch} from 'react-redux'
import {SetNewHomeState} from '../../Redux/Actions/HomeActionCreator'
import {Parent,WraperContent,WraperHeader,Wraper} from '../../SharedStyles/HomeComponentsStyles/Home.styles'
function Contact({contactEdit,setcontactEdit,contactInfo}) {
    const dispatch=useDispatch()
  const HandelContentTerms=()=>{
      if(contactEdit==='Terms'){
            if(contactInfo?.length!==undefined){
                    if(contactInfo.length>0){
                        return(contactInfo)
                    }
                    else{
                        return('-')
                    }
            }
            else{
                return('-')
            }
      }
      else {
        return('-')
      }
  }
  const HandelContentPrivacy=()=>{
      if(contactEdit==='Privacy'){
            if(contactInfo?.length!==undefined){
                    if(contactInfo.length>0){
                        return(contactInfo)
                    }
                    else{
                        return('-')
                    }
            }
            else{
                return('-')
            }
      }
      else {
        return('-')
      }
  }
    return (
        <Parent>
           <span id='HeaderTitle'>Content</span>
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
                <span id='Content_Title_Slug'>Title Slug</span>
                <span id='Content_Content'>Content</span>
                <span id='Content_Action'>Action</span>
                </WraperContent>
                <WraperInfo>
                    <span id='id'>Terms</span>
                    <span id='name'>{HandelContentTerms()}</span>
                    <button id='action' onClick={()=>{
                        dispatch(SetNewHomeState('Edit'))
                        setcontactEdit('Terms')
                    }}>Edit</button>
                </WraperInfo>
                <WraperInfo>
                    <span id='id'>Privacy</span>
                    <span id='name'>{HandelContentPrivacy()}</span>
                    <button id='action' onClick={()=>{
                        dispatch(SetNewHomeState('Edit'))
                        setcontactEdit('Privacy')
                    }}>Edit</button>
                </WraperInfo>
           </Wraper>
           <Paginate/>
        </Parent>
    )
}

export default Contact
