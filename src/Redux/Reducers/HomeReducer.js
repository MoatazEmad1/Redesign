import {SETNEWHOMESTATE} from '../Actions/HomeActionCreator'

const InitialState={
    HomeState:'Dashboard'
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