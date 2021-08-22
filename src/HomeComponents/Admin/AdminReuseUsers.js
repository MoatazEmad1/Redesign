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

            <span>{email}</span>
            <span>{createdAt}</span>
            <span>{role}</span>

            <div className='adminBtns'>
            <Button bg='#639DFF'>Edit</Button>
            <Button bg='#4ECAA5'>Restore</Button>
            </div>
        </AdminReuse>
    )
}

export default AdminReuseUsers
