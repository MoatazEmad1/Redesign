import React from 'react'
import {WraperContent,WraperHeader,Wraper,MyProfileContainer} from '../../styles/MyProfile.styles'
function MyProfile() {
    const image='https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png'

    return (
        <MyProfileContainer>
          <span>My Profile</span>
          <Wraper>
              <WraperHeader>
                  <div className='ImageContainer'>
                    <img src={image} alt=''/>
                  </div>
                
                <div className='Btns'>
                    <button id='save'>Save</button>
                    <button id='cancel'>Cancel</button>
                </div>
              </WraperHeader>
              <WraperContent>
                    <div id='upload'>
                        <button id='photoAndChange'><span>Upload Photo</span></button>
                        <button id='remove'><span>Remove</span></button>
                    </div>
                    <div id='inputcontainer' className='fsinput'>
                        <label>Name</label>
                        <input placeholder='admin'/>
                    </div>
                    <div id='inputcontainer' className='scinput'>
                        <label>Email</label>
                        <input placeholder='admin@kiweapp.com'/>
                    </div>
                    <div id='btnChange'>
                            <button id='photoAndChange'><span>Change Password</span></button>
                    </div>
                       <div className='language'>
                          <span> Language</span>
                            <input type='radio' name='lang'/>
                            <label>English</label>
                            <input type='radio' name='lang'/>
                            <label>Arabic</label>
                       </div>

                 
              </WraperContent>
          </Wraper>
        </MyProfileContainer>
    )
}

export default MyProfile
