import {AnyAction} from 'redux';
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import * as StudentsAPI from '@/api/Students';

const PATH = 'app/containers/students';
export const ACTION_SET_ITEMS = `${PATH}/SET_ITEMS`;
export const ACTION_SET_IS_LOADING = `${PATH}/SET_IS_LOADING`;

export interface IState {
    items: StudentsAPI.IStudentModel[],
    isLoading?: boolean
}

export const initialState: IState = {
    items: [],
    isLoading: false
};


interface ISimpleAction {
    type: string,
    payload: {}
}

export interface ISetItemsAction extends ISimpleAction {
    payload: {
        items: IState['items']
    }
}

interface ISetItemsFn {
    (items: IState['items']): ISetItemsAction
}

const setItemsAction: ISetItemsFn = (items = []) => ({
    type: ACTION_SET_ITEMS,
    payload: {
        items
    }
});


export interface ISetIsLoadingAction extends ISimpleAction {
    payload: {
        isLoading: IState['isLoading']
    }
}

interface ISetIsLoadingFn {
    (isLoading: IState['isLoading']): ISetIsLoadingAction
}

const setIsLoadingAction: ISetIsLoadingFn = (isLoading) => ({
    type: ACTION_SET_IS_LOADING,
    payload: {
        isLoading
    }
});

export type ActionType = ISetItemsAction | ISetIsLoadingAction;


export function loadItems(): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise((resolve) => {
            dispatch(setIsLoadingAction(true));

            // emulate async request
            setTimeout(() => {
                const students = StudentsAPI.all();
                dispatch(setItemsAction(students));
                dispatch(setIsLoadingAction(false));
                resolve();
            }, 800);
        })
    }
}
