import React from 'react'
import {WraperContent,WraperHeader,Wraper,NotificationsAddContainer} from '../../styles/NotificationsAdd.styles'
function NotificationsAdd() {
    return (
        <NotificationsAddContainer>
            <span>Notification</span>
            <Wraper>
                <WraperHeader>
             
                <div className='sort'>
                <div className='btn'>
               <button>Add</button>
               </div>
               </div>
                </WraperHeader>
                <WraperContent>
                    <div id='content' className='contentTop'>
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
                    <div id='content' className='contentBottom'>
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
                    <div id='content' className='fsinput' >
                        <div id='top'><span>Phone Number</span></div>
                        <div id='bottom'  className='btcontainer'>
                          <span >enter a phone number</span>
                        </div>
                    </div>
                    <div id='content' className='scinput'>
                        <div id='top'><span>Title Text</span></div>
                        <div id='bottom'  className='btcontainer'>
                        <span >enter a title</span>
                           
                        </div>
                    </div>
                    <div id='content' className='tdinput'>
                        <div id='top'><span>Header Text</span></div>
                        <div id='bottom'  className='btcontainer'>
                        <span >enter a Header</span>
                          
                        </div>
                    </div>
                    <div id='content' className='fhinput '>
                        <div id='top'><span>Body Text</span></div>
                        <div id='bottom'  className='btcontainer'>
                        <span >enter a Body</span>
                         
                        </div>
                    </div>
                    <div id='content' className='fvinput'>
                        <div id='top'><span>Notification Image</span></div>
                        <div id='bottom' className='btcontainer'>
                          <div className='choosefile'><span>Choose File</span></div>
                          <div className='textfile'><span>No file selected</span></div>
                        </div>
                    </div>
                </WraperContent>
            </Wraper>
        </NotificationsAddContainer>
    )
}

export default NotificationsAdd
