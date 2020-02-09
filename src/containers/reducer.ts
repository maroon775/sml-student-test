import {combineReducers} from 'redux';
import students, {StudentsStateType} from './Students/reducer';
import student, {StudentStateType} from './Student/reducer';

export interface IAppState {
    student: StudentStateType,
    students: StudentsStateType,
}

export default combineReducers({
    students,
    student
});
