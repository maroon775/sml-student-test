import {combineReducers} from 'redux';
import app, {IAppState} from '../containers/reducer';

export interface IRootState {
    app: IAppState
}

export default combineReducers({
    app
});
