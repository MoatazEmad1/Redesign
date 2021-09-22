import React from 'react'
import {LogInContainer,ImageContainer,Card} from '../styles/LogIn.styles'
import {useDispatch} from 'react-redux'
import {SetNewHomeState} from '../Redux/Actions/HomeActionCreator'
import kiwe from '../images/logo_1.png'
function LogIn() {
    const dispatch=useDispatch();
    
    return (
        <LogInContainer>
            <Card>
                 <ImageContainer>
                <img src={kiwe} alt=''/>
                 </ImageContainer>
                
                    <input type='text' placeholder='email'/>
                    <input type='password' placeholder='password'/>

                 <button onClick={()=>{
                    dispatch(SetNewHomeState('Dashboard'))
                }}>Sign In</button>
               
            </Card>
           
        </LogInContainer>
    )
}

export default LogIn
