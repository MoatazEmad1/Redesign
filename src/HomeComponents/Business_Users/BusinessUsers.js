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
                <div className='WraperContentLf'>
                    <span>Profile Image</span>
                    <span>User Name</span>
                    <span>Bank</span>
                    <span>Business Name</span>
                    <span>Mobile</span>
                    <span>Email</span>
                </div>

                <div className='WraperContentRt'>
                    <span>Transactions</span>
                    <span>Actions</span>
                </div>

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
