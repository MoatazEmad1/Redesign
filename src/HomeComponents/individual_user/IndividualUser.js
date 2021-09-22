import React,{useState} from 'react'
//import {Button,IndividualUserContainer,Wraper,WraperHeader,WraperContent} from '../../styles/IndividualUser.styles'

import ReuseIndividualUser from './ReuseIndividualUser'
import Paginate from '../../utils/Paginate';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import search from '../../images/Iconly/Search.png'

import {Parent,Wraper,WraperHeader,WraperContent} from '../../SharedStyles/HomeComponentsStyles/Home.styles'
function IndividualUser() {
   
    return (
        <Parent>
            <span id='HeaderTitle'>Individual User</span>
            <Wraper>
            <WraperHeader>
                <div className='search'>
                    <div className='searchIcon' >
                        <img src={search} alt=''/>
                    </div>
               
                <input type='text' placeholder='Search...'/>
                </div>
                {/* <div className='BtnHeader'>
                    <div className='calImg'>
                    <img src='https://www.pvschool.com/wp-content/uploads/2017/03/calendar-icon.png' alt=''/>
                    </div>
                <Button onClick={HandelShowDate}>
                {showBtn==='block'?'Pick A Date':'Hide'}
                </Button>
                </div>
                {showBtn==='block'?'': <DateSelection/>} */}
                
                <div className='sort'>

              
                <div className='sortUsers'> 
                 <span className='sortby'>Sort By:</span>
                 <span className='default'>Default</span>
                 <div className='downarrowContainer'>
                    <ArrowDropDownIcon/>
                 </div>
                  
                </div>
                </div>
            </WraperHeader>
            <WraperContent>
                       <span id='IndividualUser_Profile_Image'>Profile Image</span>
                        <span id='IndividualUser_First_Name'>First Name</span>
                        <span id='IndividualUser_Last_Name'>Last Name</span>
                        <span id='IndividualUser_Email'>Email</span> 
                        <span id='IndividualUser_Mobile'>Mobile</span>
                        <span id='IndividualUser_DOB'>DOB</span>
                        <span id='IndividualUser_Childrens'>Childrens</span>
                        <span id='IndividualUser_Events'>Events</span>
                        <span id='IndividualUser_Transactions'>Transactions</span>
                        <span id='IndividualUser_Action'>Action</span> 
      

                     
            
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
        </Parent>
    )
}

export default IndividualUser
