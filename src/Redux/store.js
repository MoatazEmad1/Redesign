import {applyMiddleware,createStore} from 'redux'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'


import {HomeReducer} from './Reducers/HomeReducer'

export const store=createStore(HomeReducer,composeWithDevTools(applyMiddleware(logger)))