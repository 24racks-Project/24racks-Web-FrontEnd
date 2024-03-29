import {createStore, combineReducers} from 'redux';
import reduceSignIn from './SignIn/reduce';
import reduceSignUp from './SignUp/reduce';
import reducerMyData from './MyData/reduce';
import reducerPass from './ModifyPassword/reduce';
import reducerServ from './BuyService/reduce';

const reducers = combineReducers({
    reduceSignIn,
    reduceSignUp,
    reducerMyData,
    reducerPass,
    reducerServ
});

const store =  createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);

export default store;