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
                <span id='id'>Title Slug</span>
                <span id='name'>Contact</span>
                <span id='action'>Action</span>
                </WraperContent>
                <WraperInfo>
                    <span id='id'>Terms</span>
                    <span id='name'>-</span>
                    <button id='action'>Edit</button>
                </WraperInfo>
                <WraperInfo>
                    <span id='id'>Privacy</span>
                    <span id='name'>-</span>
                    <button id='action'>Edit</button>
                </WraperInfo>
           </Wraper>
           <Paginate/>
        </ContactContainer>
    )
}

export default Contact
