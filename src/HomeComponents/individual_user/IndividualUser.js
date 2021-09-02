import React from 'react'
import {IndividualUserContainer,Wraper,WraperHeader,WraperContent} from '../../styles/IndividualUser.styles'
import SearchIcon from '@material-ui/icons/Search';
import ReuseIndividualUser from './ReuseIndividualUser'
import Paginate from '../../utils/Paginate';
function IndividualUser() {
    
    return (
        <IndividualUserContainer>
            <span>Individual User</span>
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
                </div>
                </div>
            </WraperHeader>
            <WraperContent>
                       <span id='pe'>Profile Image</span>
                        <span id='fs'>First Name</span>
                        <span id='le'>Last Name</span>
                        <span id='email'>Email</span> 
                        <span id='mobile'>Mobile</span>
                        <span id='dob'>DOB</span>
                        <span id='childrens'>Childrens</span>
                        <span id='events'>Events</span>
                        <span id='ts'>Transactions</span>
                        <span id='an'>Action</span> 
      

                     
            
            </WraperContent>
            {/* re-use section */}
            <ReuseIndividualUser fs='moataz' ls='emad' email='moataz@kiweapp.com' mobile='01554477068' dob='02 oct 2020'/>
            <ReuseIndividualUser fs='moataz' ls='emad' email='moataz@kiweapp.com' mobile='01554477068' dob='02 oct 2020'/>
            <ReuseIndividualUser fs='moataz' ls='emad' email='moataz@kiweapp.com' mobile='01554477068' dob='02 oct 2020'/>
            <ReuseIndividualUser fs='moataz' ls='emad' email='moataz@kiweapp.com' mobile='01554477068' dob='02 oct 2020'/>
            <ReuseIndividualUser fs='moataz' ls='emad' email='moataz@kiweapp.com' mobile='01554477068' dob='02 oct 2020'/>
            <ReuseIndividualUser fs='moataz' ls='emad' email='moataz@kiweapp.com' mobile='01554477068' dob='02 oct 2020'/>
            <ReuseIndividualUser fs='moataz' ls='emad' email='moataz@kiweapp.com' mobile='01554477068' dob='02 oct 2020'/>
            <ReuseIndividualUser fs='moataz' ls='emad' email='moataz@kiweapp.com' mobile='01554477068' dob='02 oct 2020'/>
            <ReuseIndividualUser fs='moataz' ls='emad' email='moataz@kiweapp.com' mobile='01554477068' dob='02 oct 2020'/>
            <ReuseIndividualUser fs='moataz' ls='emad' email='moataz@kiweapp.com' mobile='01554477068' dob='02 oct 2020'/>
            </Wraper>
            <Paginate/>
        </IndividualUserContainer>
    )
}

export default IndividualUser
