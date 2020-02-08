import React from 'react';
import {connect} from "react-redux";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import * as actions from './actions';
import {IRootState} from '@/store/reducer';
import {Form} from '@/components/Student';

type OwnProps = {};
type DispatchProps = {
    updateStudent: (student: actions.StudentModelType) => void,
    addStudent: (student: actions.StudentType) => void,
    readStudent: (studentId: number) => void,
    removeStudent: (studentId: number) => void,
};
type StateProps = actions.IState;
export type Props = StateProps & DispatchProps & OwnProps;

const mapStateToProps = (state: IRootState): actions.IState => state.app.student;
const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, {}, AnyAction>) => ({
    updateStudent: (student: actions.StudentModelType) => dispatch(actions.updateStudent(student)),
    addStudent: (student: actions.StudentType) => dispatch(actions.addStudent(student)),
    readStudent: (studentId: number) => dispatch(actions.readStudent(studentId)),
    removeStudent: (studentId: number) => dispatch(actions.removeStudent(studentId)),
});

export default connect<
  StateProps,
  DispatchProps,
  OwnProps,
  IRootState
>(mapStateToProps, mapDispatchToProps)(Form) as React.ComponentType<OwnProps>;
