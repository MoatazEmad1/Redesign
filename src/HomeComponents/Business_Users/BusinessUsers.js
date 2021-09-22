import React,{useState} from 'react'
//import {BusinessUsersContainer,Wraper,WraperHeader,WraperContent,Button} from '../../styles/BusinessUsers.styles'
import SearchIcon from '@material-ui/icons/Search';
import BusinessUsersReuse from './BusinessUsersReuse'
import Paginate from '../../utils/Paginate'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import search from '../../images/Iconly/Search.png'
import DatePicker from "react-datepicker";
import DateSelection from '../../SharedComponents/Date/DateSelection'
import {Parent,Wraper,WraperHeader,WraperContent,Button} from '../../SharedStyles/HomeComponentsStyles/Home.styles'
function BusinessUsers() {
    const calenderImg='https://www.pngkey.com/png/full/109-1094594_calendar-clipart-png-transparent-calendar-icon-transparent-background.png'
    const [startDate, setStartDate] = useState(new Date());
    const [showBtn,setshowBtn]=useState('block')
    const HandelShowDate=()=>{
        if(showBtn==='block'){
            setshowBtn('none')
        }else{
            setshowBtn('block')
        }
            
    }
    return (
        <Parent>
            <span id='HeaderTitle'>Business Users</span>
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
               
                    <span id='BusinessUser_Profile_Image'>Profile Image</span>
                    <span id='BusinessUser_User_Name'>User Name</span>
                    <span id='BusinessUser_Bank'>Bank</span>
                    <span id='BusinessUser_Business_Name'>Business Name</span>
                    <span id='BusinessUser_Mobile'>Mobile</span>
                    <span id='BusinessUser_Email'>Email</span>
                

               
                    <span id='BusinessUser_Transactions'>Transactions</span>
                    <span id='BusinessUser_Actions'>Actions</span>
               

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
        </Parent>
    )
}

export default BusinessUsers
