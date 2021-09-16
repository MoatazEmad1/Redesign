import React,{useState} from 'react'
import {IndividualUserContainer,Wraper,WraperHeader,WraperContent} from '../../styles/IndividualUser.styles'
import SearchIcon from '@material-ui/icons/Search';
import ReuseIndividualUser from './ReuseIndividualUser'
import Paginate from '../../utils/Paginate';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import search from '../../images/Iconly/Search.png'
import DatePicker from "react-datepicker";
function IndividualUser() {
    const calenderImg='https://www.pngkey.com/png/full/109-1094594_calendar-clipart-png-transparent-calendar-icon-transparent-background.png'
    const [startDate, setStartDate] = useState(new Date());
   
    return (
        <IndividualUserContainer>
            <span>Individual User</span>
            <Wraper>
            <WraperHeader>
                <div className='search'>
                    <div className='searchIcon' >
                        <img src={search} alt=''/>
                    </div>
               
                <input type='text' placeholder='Search...'/>
                </div>
                <div className='DATE'>
                    <img src={calenderImg} alt=''/>
                  <DatePicker id='datepicker' selected={startDate} onChange={(date) => setStartDate(date)} isClearable showYearDropdown scrollableMonthYearDropdown
                  placeholderText="Enter A Date"
                  />
                 </div>
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
