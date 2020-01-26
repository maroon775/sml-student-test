import {IReduxAction} from "@/declarations";
import {initialState, IStudentState} from "./actions";

export default function reducer(state:IStudentState = initialState, action: IReduxAction) {
    switch (action.type) {
        default:
            return state;
    }
}
