import * as actions from "./actions";

export type StudentStateType = actions.IState;

export default function reducer(state: actions.IState = actions.initialState, action: actions.ActionType): actions.IState {
    switch (action.type) {
        case actions.ACTION_IS_LOADING:
        case actions.ACTION_READ:
        case actions.ACTION_ERROR:
        case actions.ACTION_RESET:
        case actions.ACTION_SET_DATE_OF_BIRTH:
        case actions.ACTION_SET_FULLNAME:
        case actions.ACTION_SET_PERFORMANCE:
            return {...state, ...action.payload};
        default:
            return state;
    }
}
