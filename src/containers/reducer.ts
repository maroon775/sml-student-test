import {combineReducers} from 'redux';
import students, {StudentsStateType} from './students/reducer';
import student, {StudentStateType} from './student/reducer';

export interface IAppState {
    student: StudentStateType,
    students: StudentsStateType,
}

export default combineReducers({
    students,
    student
});
