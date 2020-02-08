import * as StudentsAPI from "@/api/Students";
import {AnyAction} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

const PATH = 'app/containers/students';
export const ACTION_READ = `${PATH}/READ`;
export const ACTION_IS_LOADING = `${PATH}/IS_LOADING`;
export const ACTION_ERROR = `${PATH}/ERROR`;

export type StudentModelType = StudentsAPI.IStudentModel;
export type StudentType = StudentsAPI.IStudent | StudentModelType;

export interface IState extends StudentsAPI.IStudent {
    id?: number | null,
    isLoading?: boolean,
    errorMessage?: string
}

export const initialState:IState = {
    id: null,
    fullName: '',
    dateOfBirth: '',
    performance: undefined,
    isLoading: false,
    errorMessage: '',
};


interface ISimpleAction {
    type: string,
    payload: {}
}

export interface ISetStudentAction extends ISimpleAction {
    payload: StudentsAPI.IStudent | StudentsAPI.IStudentModel
}

export interface ISetStudentFn {
    (student: StudentType): ISetStudentAction
}

export interface ISetIsLoadingAction extends ISimpleAction {
    payload: {
        isLoading: IState['isLoading']
    }
}

export interface ISetIsLoadingFn {
    (isLoading: boolean): ISetIsLoadingAction
}

export interface ISetErrorAction extends ISimpleAction {
    payload: {
        errorMessage: IState['errorMessage']
    }
}

export interface ISetErrorFn {
    (errorMessage: string): ISetErrorAction
}

export type ActionType = ISetStudentAction | ISetIsLoadingAction | ISetErrorAction;


const setStudentAction: ISetStudentFn = (student) => ({
    type: ACTION_READ,
    payload: student
});

const setIsLoadingAction: ISetIsLoadingFn = (isLoading) => ({
    type: ACTION_IS_LOADING,
    payload: {
        isLoading
    }
});

const setErrorAction: ISetErrorFn = (errorMessage) => ({
    type: ACTION_ERROR,
    payload: {
        errorMessage
    }
});



export function updateStudent(student: StudentsAPI.IStudentModel): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise((resolve) => {
            dispatch(setIsLoadingAction(true));

            // emulate async request
            setTimeout(() => {
                StudentsAPI.update(student);
                dispatch(setIsLoadingAction(false));
                resolve();
            }, 1100);
        });
    }
}

export function addStudent(student: StudentType): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise((resolve) => {
            dispatch(setIsLoadingAction(true));

            // emulate async request
            setTimeout(() => {
                StudentsAPI.create(student);
                dispatch(setIsLoadingAction(false));
                resolve();
            }, 1800);
        });
    }
}

export function readStudent(studentId: number): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise((resolve) => {
            dispatch(setIsLoadingAction(true));

            // emulate async request
            setTimeout(() => {
                const student = StudentsAPI.read(studentId);
                if (student) {
                    dispatch(setStudentAction(student));
                } else {
                    dispatch(setErrorAction(`Student with id ${studentId} not found!`));
                }
                dispatch(setIsLoadingAction(false));
                resolve();
            }, 900);
        });
    }
}

export function removeStudent(studentId: number): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise((resolve) => {
            dispatch(setIsLoadingAction(true));

            // emulate async request
            setTimeout(() => {
                StudentsAPI.remove(studentId);
                dispatch(setIsLoadingAction(false));
                resolve();
            }, 900);
        });
    }
}

