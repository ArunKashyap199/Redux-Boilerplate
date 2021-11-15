import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from '../reducers/getUser'
import { albumReducer } from '../reducers/getAlbum'
import { commentReducer } from '../reducers/getComments'
import { photoReducer } from '../reducers/getPhoto'
import { postReducer } from '../reducers/getPost'
import { todoReducer } from '../reducers/getTodo'

const rootReducer = combineReducers({
    users: userReducer,
    albums: albumReducer,
    comments: commentReducer,
    photos: photoReducer,
    posts: postReducer,
    todos: todoReducer,
})

const initialState = {}
const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools({ mageAge: 200 })(applyMiddleware(...middleware))
)

export default store
