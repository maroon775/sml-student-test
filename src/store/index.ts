import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

let middleware = applyMiddleware(thunk);
if(process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
}
export default createStore(reducer, middleware);
