import React from 'react'
import {AdminReuse,Button} from '../../styles/Admin.styles'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
function AdminReuseUsers({username,email,createdAt,role}) {
    return (
        <AdminReuse>
            <div className='timeToUser'>
                <AccessTimeIcon className='accesstimeIcon'/>
               <span>{username}</span> 
            </div>

            <span id='email'>{email}</span>
            <span id='ca'>{createdAt}</span>
            <span id='re'>{role}</span>

            <div className='adminBtns'>
            <Button id='edit' bg='#639DFF'>Edit</Button>
            <Button  bg='#4ECAA5'>Restore</Button>
            </div>
        </AdminReuse>
    )
}

export default AdminReuseUsers
