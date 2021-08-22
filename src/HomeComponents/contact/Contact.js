import React from 'react'
import {WraperInfo,WraperContent,WraperHeader,Wraper,ContactContainer} from '../../styles/Contact.styles'
import SearchIcon from '@material-ui/icons/Search';
import Paginate from '../../utils/Paginate'
function Contact() {
    return (
        <ContactContainer>
           <span>Contact</span>
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
                <span>Title Slug</span>
                <span>Contact</span>
                <span>Action</span>
                </WraperContent>
                <WraperInfo>
                    <span>Terms</span>
                    <span>-</span>
                    <button>Edit</button>
                </WraperInfo>
                <WraperInfo>
                    <span>Privacy</span>
                    <span>-</span>
                    <button>Edit</button>
                </WraperInfo>
           </Wraper>
           <Paginate/>
        </ContactContainer>
    )
}

export default Contact
