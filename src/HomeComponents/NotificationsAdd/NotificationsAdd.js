import React from 'react'
import {WraperContent,WraperHeader,Wraper,NotificationsAddContainer} from '../../styles/NotificationsAdd.styles'
function NotificationsAdd() {
    return (
        <NotificationsAddContainer>
            <span>Notification</span>
            <Wraper>
                <WraperHeader>
             
                <div className='sort'>
                <div className='sortUsers'> 
                 <span>Sort By:</span>
                    <select>
                    <option value="Default">Default</option>
                    </select>
                </div>
               
                <div className='btn'>
               <button>Add</button>
               </div>
               </div>
                </WraperHeader>
                <WraperContent>
                    <div id='content'>
                        <div id='top'><span>User Type</span></div>
                        <div id='bottom'>
                            <input type='radio' name="user_type"/>
                            <label>All</label>
                            <input type='radio' name="user_type"/>
                            <label>Individual</label>
                            <input type='radio' name="user_type"/>
                            <label>Business</label>
                            <input type='radio' name="user_type"/>
                            <label>Mobile Number</label>
                        </div>
                    </div>
                    <div id='content'>
                        <div id='top'><span>Device Type</span></div>
                        <div id='bottom'>
                            <input type='radio' name="Device_type"/>
                            <label>All</label>
                            <input type='radio' name="Device_type"/>
                            <label>IOS</label>
                            <input type='radio' name="Device_type"/>
                            <label>Android</label>
                           
                        </div>
                    </div>
                    <div id='content'>
                        <div id='top'><span>Phone Number</span></div>
                        <div id='bottom'>
                           <input id='textInput' placeholder='enter a phone number'/>
                        </div>
                    </div>
                    <div id='content'>
                        <div id='top'><span>Title Text</span></div>
                        <div id='bottom'>
                           <input id='textInput' placeholder='enter a title'/>
                        </div>
                    </div>
                    <div id='content'>
                        <div id='top'><span>Header Text</span></div>
                        <div id='bottom'>
                           <input id='textInput' placeholder='enter a Header'/>
                        </div>
                    </div>
                    <div id='content'>
                        <div id='top'><span>Body Text</span></div>
                        <div id='bottom'>
                           <input id='textInput' placeholder='enter a Body'/>
                        </div>
                    </div>
                    <div id='content'>
                        <div id='top'><span>Notification Image</span></div>
                        <div id='bottom'>
                           <input id='textInput' type='file' placeholder='enter a Body'/>
                        </div>
                    </div>
                </WraperContent>
            </Wraper>
        </NotificationsAddContainer>
    )
}

export default NotificationsAdd
