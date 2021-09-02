import React from 'react'
import {BusinessUsersContainer,Wraper,WraperHeader,WraperContent} from '../../styles/BusinessUsers.styles'
import SearchIcon from '@material-ui/icons/Search';
import BusinessUsersReuse from './BusinessUsersReuse'
import Paginate from '../../utils/Paginate'
function BusinessUsers() {
    
    return (
        <BusinessUsersContainer>
            <span>Business Users</span>
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
               
                    <span id='pe'>Profile Image</span>
                    <span id='username'>User Name</span>
                    <span id='bank'>Bank</span>
                    <span id='be'>Business Name</span>
                    <span id='mobile'>Mobile</span>
                    <span id='email'>Email</span>
                

               
                    <span id='ts'>Transactions</span>
                    <span id='as'>Actions</span>
               

                </WraperContent>
                {/* Reuse section */}
                <BusinessUsersReuse user_name='moataz' business_name='steward' mobile='01554477068' email='moataz@kiweapp.com'/>
                <BusinessUsersReuse user_name='moataz' business_name='steward' mobile='01554477068' email='moataz@kiweapp.com'/>
                <BusinessUsersReuse user_name='moataz' business_name='steward' mobile='01554477068' email='moataz@kiweapp.com'/>
                <BusinessUsersReuse user_name='moataz' business_name='steward' mobile='01554477068' email='moataz@kiweapp.com'/>
                <BusinessUsersReuse user_name='moataz' business_name='steward' mobile='01554477068' email='moataz@kiweapp.com'/>
                <BusinessUsersReuse user_name='moataz' business_name='steward' mobile='01554477068' email='moataz@kiweapp.com'/>
                <BusinessUsersReuse user_name='moataz' business_name='steward' mobile='01554477068' email='moataz@kiweapp.com'/>
                <BusinessUsersReuse user_name='moataz' business_name='steward' mobile='01554477068' email='moataz@kiweapp.com'/>
                <BusinessUsersReuse user_name='moataz' business_name='steward' mobile='01554477068' email='moataz@kiweapp.com'/>
                <BusinessUsersReuse user_name='moataz' business_name='steward' mobile='01554477068' email='moataz@kiweapp.com'/>
            </Wraper>
        {/* pagination */}
        <Paginate/>
        </BusinessUsersContainer>
    )
}

export default BusinessUsers
