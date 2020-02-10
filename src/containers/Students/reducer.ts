import {
    initialState,
    IState,
    ActionType,
    ACTION_SET_ITEMS,
    ACTION_SET_IS_LOADING
} from "./actions";

export type StudentsStateType = IState;

export default function reducer(state: IState = initialState, action: ActionType) {
    switch (action.type) {
        case ACTION_SET_ITEMS:
        case ACTION_SET_IS_LOADING:
            return {...state, ...action.payload};
        default:
            return state;
    }
}
