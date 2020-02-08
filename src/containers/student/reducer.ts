import {
    IState,
    ActionType,
    initialState,
    ACTION_IS_LOADING,
    ACTION_READ,
    ACTION_ERROR
} from "./actions";

export type StudentStateType = IState;

export default function reducer(state: IState = initialState, action: ActionType): IState {
    switch (action.type) {
        case ACTION_IS_LOADING:
        case ACTION_READ:
        case ACTION_ERROR:
            return {...state, ...action.payload};
        default:
            return state;
    }
}
