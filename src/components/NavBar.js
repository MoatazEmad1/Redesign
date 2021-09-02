import React,{useState} from 'react'
import {Container,ImageContainer,AdminContainer} from '../styles/NavBar.styles'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import admin_img from '../images/admin.png'
import {useDispatch} from 'react-redux'
import {SetNewHomeState} from '../Redux/Actions/HomeActionCreator'
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function NavBar() {
  const image='https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png'

  const dispatch=useDispatch()
  const [display,setDispaly]=useState('none')
    return (
        <Container className='navbar'>
          <ImageContainer>
              <img src='https://media-exp1.licdn.com/dms/image/C4D0BAQFFP_iuVVGnfQ/company-logo_200_200/0/1582631565436?e=1636588800&v=beta&t=-eyU6pwzruqDOlFc1wK5_2ykN_2Gsr2Mf-iBY2ow15o' alt=''/>
              <span>Kiwe</span>

          </ImageContainer>

          <AdminContainer option={display} >
            <img src={image} alt='' onClick={()=>{
            dispatch(SetNewHomeState('MyProfile'))
            }}/>
            <div className='adminInfo' >
            <span className='adminName'>Sajon Islam</span>
            <span className='Admin'>Admin</span>
            </div>
           <UnfoldMoreIcon className='drobdown' onClick={()=>  display==='none'? setDispaly('block'):setDispaly('none')}/>
           <div className='settings'>
              <div id='opt1'><SettingsIcon id='set'/> <span id='profile'>Profile</span> <ChevronRightIcon id='arr'/> </div>
              <div id='opt2'><ExitToAppOutlinedIcon id='set'/><span id='profile'>Logout</span><ChevronRightIcon id='arr'/></div>
           </div>
          </AdminContainer>
        </Container>
    )
}

export default NavBar
