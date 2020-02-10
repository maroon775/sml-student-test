import React from 'react';
import {AnyAction} from "redux";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {IRootState} from "@/store/reducer";
import * as actions from "./actions";
import {Students} from "@/components/Students";

type OwnProps = {};
type StateProps = actions.IState;
type DispatchProps = {
    loadItems: () => void
    removeStudent: (studentId: number) => void
};

export type Props = StateProps & DispatchProps & OwnProps;


const mapStateToProps = (state: IRootState): StateProps => state.app.students;
const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, {}, AnyAction>):DispatchProps => ({
    removeStudent: (studentId) => dispatch(actions.removeStudent(studentId)),
    loadItems: () => dispatch(actions.loadItems()),
});


export default connect<StateProps,
    DispatchProps,
    OwnProps,
    IRootState>(mapStateToProps, mapDispatchToProps)(Students) as React.ComponentType<OwnProps>;
