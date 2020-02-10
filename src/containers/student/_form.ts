import React from 'react';
import {connect} from "react-redux";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import * as actions from './actions';
import {IRootState} from '@/store/reducer';
import {Form} from '@/components/Student';

type OwnProps = {
    studentId?: number
};
type DispatchProps = {
    onChangeDateOfBirth: (value: actions.IState['dateOfBirth']) => void,
    onChangeFullName: (value: actions.IState['fullName']) => void,
    onChangePerformance: (value: actions.IState['performance']) => void,
    saveStudent: (student: actions.StudentType) => Promise<void>,
    readStudent?: (studentId: number) => void,
    removeStudent?: (studentId: number) => Promise<void>
    resetForm: () => void
};
type StateProps = actions.IState;
export type Props = StateProps & DispatchProps & OwnProps;

const mapStateToProps = (state: IRootState): StateProps => state.app.student;

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, {}, AnyAction>): DispatchProps => ({
    onChangeDateOfBirth: (value) => dispatch(actions.setDateOfBirth(value)),
    onChangeFullName: (value) => dispatch(actions.setFullName(value)),
    onChangePerformance: (value) => dispatch(actions.setPerformance(value)),
    saveStudent: (student: actions.StudentType) => {
        if (student.id > 0) {
            return dispatch(actions.updateStudent(student));
        } else {
            return dispatch(actions.addStudent(student));
        }
    },
    resetForm: ()=> dispatch(actions.reset()),
    readStudent: (studentId) => dispatch(actions.readStudent(studentId)),
    removeStudent: (studentId) => {
        return dispatch(actions.removeStudent(studentId))
    },
});

export default connect<StateProps,
    DispatchProps,
    OwnProps,
    IRootState>(mapStateToProps, mapDispatchToProps)(Form) as React.ComponentType<OwnProps>;
