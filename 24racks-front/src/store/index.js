import {createStore, combineReducers} from 'redux';
import reduceSignIn from './SignIn/reduce';
import reduceSignUp from './SignUp/reduce';

const reducers = combineReducers({
    reduceSignIn,
    reduceSignUp
});

const store =  createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);

export default store;