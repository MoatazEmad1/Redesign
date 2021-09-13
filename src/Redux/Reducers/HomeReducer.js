import {SETNEWHOMESTATE} from '../Actions/HomeActionCreator'

const InitialState={
    HomeState:'LogIn'
}

export const HomeReducer=(state=InitialState,action)=>{
    switch(action.type){
        case SETNEWHOMESTATE:
            return{
                ...InitialState,
                HomeState:action.payload
            }
        default:return state
    }
}