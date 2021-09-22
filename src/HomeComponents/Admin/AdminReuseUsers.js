import React from 'react'
//import {AdminReuse,Button} from '../../styles/Admin.styles'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {ParentReuse,Button} from '../../SharedStyles/HomeComponentsStyles/Home.styles'
function AdminReuseUsers({username,email,createdAt,role}) {
    return (
        <ParentReuse>
            <div className='AdminReuse_TimeToUser'>
                <AccessTimeIcon className='AdminReuse_AccessTimeIcon'/>
               <span>{username}</span> 
            </div>

            <span id='AdminReuse_Email'>{email}</span>
            <span id='AdminReuse_CreatedAt'>{createdAt}</span>
            <span id='AdminReuse_Role'>{role}</span>

            <div className='AdminReuse_AdminBtns'>
            <Button id='AdminReuse_Edit' bg='#639DFF'>Edit</Button>
            <Button id='AdminReuse_Restore'  bg='#4ECAA5'>Restore</Button>
            </div>
        </ParentReuse>
    )
}

export default AdminReuseUsers
