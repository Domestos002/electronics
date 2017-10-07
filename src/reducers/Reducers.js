import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'
import Goods from './Goods'

export default combineReducers({
    routing: routerReducer,
    Goods
})