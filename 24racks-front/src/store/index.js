import {createStore, combineReducers} from 'redux';
import reduceSignIn from './SignIn/reduce';

const reducers = combineReducers({
    reduceSignIn
});

const store =  createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);

export default store;