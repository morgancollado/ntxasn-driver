import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import currentUserReducer from './reducers/currentUserReducer'
import loginReducer from './reducers/loginReducer'
import updateProfileReducer from './reducers/updateProfileReducer'

const reducer = combineReducers({
    currentUser: currentUserReducer,
    login: loginReducer,
    updateProfile: updateProfileReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store