import React,{useState} from 'react'
import {AdminContainer,Wraper,WraperHeader,WraperContent,PopUp} from '../../styles/Admin.styles'
import SearchIcon from '@material-ui/icons/Search';
import AdminReuseUsers from './AdminReuseUsers';
import Paginate from '../../utils/Paginate';
import ReuseInputPopUp from '../../utils/popup/ReuseInputPopUp'

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
        <AdminContainer>
          <span>Admin</span>
          {/* Holds the bottom section */}
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
               <button onClick={handelAddUsers}>Add</button>
               {/* Pop up Model */}
               <PopUp showBlockOrNone={display}>
                <div className='popupModel'>
                    <div className='headerPopUp'>
                    <span>Add Contact</span>  
                    <span onClick={handelCloseModel}>X</span>
                    </div>
                    <div className='popupModelContent'>
                        <div className='popupModelContentLf'>
                            <div className='popupModelContentLfImage'>
                                <img src={image} alt=''/>
                            </div>
                            <ReuseInputPopUp label='Department' initialVal='Department'/>
                            <ReuseInputPopUp label='Phone' initialVal='Enter your phone number'/>
                            <ReuseInputPopUp label='Adress' initialVal='Enter your Adress'/>
                            
                        </div>
                        <div className='popupModelContentRt'>
                        <ReuseInputPopUp label='First name' initialVal='Enter your First name'/>
                        <ReuseInputPopUp label='Last name' initialVal='Enter your Last name'/>
                        <ReuseInputPopUp label='Company' initialVal='Enter your Company name'/>
                        <ReuseInputPopUp label='Email' initialVal='Enter your Email'/>
                        <ReuseInputPopUp label='Note' initialVal='Enter your Note'/>
                        </div>
                        
                    </div>
                    <div className='popupModelAddContact'>
                              <button >Add contact</button>
                    </div>
                      
                </div>

               </PopUp>
                </div>
                </div>
            </WraperHeader>

            <WraperContent>
            <span>User Name</span>
            <span>Email</span>
            <span>Created At</span>
            <span>Role</span>
            <span>Action</span>
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
        </AdminContainer>
    )
}

export default Admin
