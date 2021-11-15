import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './reducers/getUserList'

const reducer = combineReducers({
    planList: userReducer,
})

const initialState = {
   
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools({ mageAge: 200 })(applyMiddleware(...middleware))
)

export default store
