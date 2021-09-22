import React,{useState} from 'react'
//import {AdminContainer,Wraper,WraperHeader,WraperContent} from '../../styles/Admin.styles'
import AdminReuseUsers from './AdminReuseUsers';
import Paginate from '../../utils/Paginate';
import ReuseInputPopUp from '../../utils/popup/ReuseInputPopUp'
import { PopUp } from '../../styles/PopUp.styles';
import search from '../../images/Iconly/Search.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Parent,Wraper,WraperContent,WraperHeader} from '../../SharedStyles/HomeComponentsStyles/Home.styles'
function Admin() {
    const image='https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png'
   
    const [display,setDispaly]=useState('none')
    const handelAddUsers=(e)=>{
        setDispaly('block')
    }
    const handelCloseModel=(e)=>{
        setDispaly('none')
    }
    return (
        <Parent>
          <span id='HeaderTitle'>Admin</span>
          {/* Holds the bottom section */}
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
               <button onClick={handelAddUsers}>Add</button>
              
                </div>
                </div>
            </WraperHeader>

            <WraperContent>
            <span id="Admin_User_Name">User Name</span>
            <span id='Admin_Email'>Email</span>
            <span id='Admin_Created_At'>Created At</span>
            <span id='Admin_Role'>Role</span>
            <span id='Admin_Action'>Action</span>
            </WraperContent>
            {/* Reuse section */}
         
            < AdminReuseUsers username='moataz' email='moataz@kiweapp.com' createdAt='1 oct 2020' role='developer'/>
           < AdminReuseUsers username='moataz' email='moataz@kiweapp.com' createdAt='1 oct 2020' role='developer'/>
           < AdminReuseUsers username='moataz' email='moataz@kiweapp.com' createdAt='1 oct 2020' role='developer'/>
           < AdminReuseUsers username='moataz' email='moataz@kiweapp.com' createdAt='1 oct 2020' role='developer'/>
           < AdminReuseUsers username='moataz' email='moataz@kiweapp.com' createdAt='1 oct 2020' role='developer'/>
           < AdminReuseUsers username='moataz' email='moataz@kiweapp.com' createdAt='1 oct 2020' role='developer'/>
           < AdminReuseUsers username='moataz' email='moataz@kiweapp.com' createdAt='1 oct 2020' role='developer'/>
           < AdminReuseUsers username='moataz' email='moataz@kiweapp.com' createdAt='1 oct 2020' role='developer'/>
           < AdminReuseUsers username='moataz' email='moataz@kiweapp.com' createdAt='1 oct 2020' role='developer'/>
           < AdminReuseUsers username='moataz' email='moataz@kiweapp.com' createdAt='1 oct 2020' role='developer'/>
       
         
          </Wraper>
          {/* Pagination */}
            <Paginate/>
          {/* Pop up Model */}
            <PopUp showBlockOrNone={display} wd='500' ht='470'>
                <div className='popupModel'>
                    <div className='headerPopUp'>
                    <span id='HeaderTitle'>Add Contact</span>  
                    <div id='closeBtn'>
                         <span id='close'  onClick={handelCloseModel}>x</span>
                    </div>
                   
                    </div>
                    <div className='popupModelContent'>
                        <div className='popupModelContentLf'>
                           
                                
                           
                            <ReuseInputPopUp label='Name' initialVal='Enter name'/>
                            <ReuseInputPopUp label='Email' initialVal='Enter Email'/>
                         
                            
                        </div>
                        <div className='popupModelContentRt'>
                        <ReuseInputPopUp label='Password' initialVal='Password'/>
                        <ReuseInputPopUp label='Confirm Password' initialVal='Password'/>
                        <div className='Role'>
                            <label>Role</label>
                            <select>
                                <option>Admin</option>
                                <option>Finance</option>
                                <option>Ops</option>
                            </select>
                        </div>
                        </div>
                        
                    </div>
                    <div className='popupModelAddContact'>
                              <span>Add contact</span>
                    </div>
                      
                </div>

               </PopUp>
        </Parent>
    )
}

export default Admin
