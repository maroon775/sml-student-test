/*
import React from 'react';
import {connect} from "react-redux";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import * as actions from './actions';
import {IRootState} from '@/store/reducer';
import {Form} from '@/components/Student';

type OwnProps = {};
type DispatchProps = {
    saveStudent: (student: actions.StudentModelType) => void,
    readStudent?: (studentId: number) => void,
    removeStudent?: (studentId: number) => void
};
type StateProps = actions.IState & actions.StudentModelType;
export type Props = StateProps & DispatchProps & OwnProps;

const mapStateToProps = (state: IRootState): actions.IState => state.app.student;
const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, {}, AnyAction>) => ({
    saveStudent: (student: actions.StudentModelType) => dispatch(actions.updateStudent(student)),
    readStudent: (studentId: number) => dispatch(actions.readStudent(studentId)),
    removeStudent: (studentId: number) => dispatch(actions.removeStudent(studentId)),
});

export default connect<
  StateProps,
  DispatchProps,
  OwnProps,
  IRootState
>(mapStateToProps, mapDispatchToProps)(Form) as React.ComponentType<OwnProps>;
*/
