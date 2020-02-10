import * as StudentsAPI from "@/api/Students";
import {AnyAction} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

const PATH = 'app/containers/Student';
export const ACTION_READ = `${PATH}/READ`;
export const ACTION_IS_LOADING = `${PATH}/IS_LOADING`;
export const ACTION_ERROR = `${PATH}/ERROR`;
export const ACTION_SET_DATE_OF_BIRTH = `${PATH}/SET_DATE_OF_BIRTH`;
export const ACTION_SET_FULLNAME = `${PATH}/SET_FULLNAME`;
export const ACTION_SET_PERFORMANCE = `${PATH}/SET_PERFORMANCE`;

export type StudentType = StudentsAPI.IStudent;

export interface IState {
    readonly id: number,
    fullName: string,
    dateOfBirth: string,
    performance: StudentsAPI.StudentPerformance | undefined,
    isLoading?: boolean,
    errorMessage?: string
}

export const initialState:IState = {
    id: 0,
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



export interface ISetDateOfBirthAction extends ISimpleAction {
    payload: {
        dateOfBirth: IState['dateOfBirth']
    }
}
export interface ISetDateOfBirthFn {
    (value: IState['dateOfBirth']): ISetDateOfBirthAction
}
export interface ISetFullNameAction extends ISimpleAction {
    payload: {
        fullName: IState['fullName']
    }
}
export interface ISetFullNameFn {
    (value: IState['fullName']): ISetFullNameAction
}
export interface ISetPerformanceAction extends ISimpleAction {
    payload: {
        performance: IState['performance']
    }
}
export interface ISetPerformanceFn {
    (value: IState['performance']): ISetPerformanceAction
}

export const setDateOfBirth: ISetDateOfBirthFn = (dateOfBirth) => ({
    type: ACTION_SET_DATE_OF_BIRTH,
    payload: {
        dateOfBirth
    }
});
export const setFullName: ISetFullNameFn = (fullName) => ({
    type: ACTION_SET_FULLNAME,
    payload: {
        fullName
    }
});
export const setPerformance: ISetPerformanceFn = (performance) => ({
    type: ACTION_SET_PERFORMANCE,
    payload: {
        performance
    }
});

export interface ISetStudentAction extends ISimpleAction {
    payload: StudentType
}

export interface ISetStudentFn {
    (student: StudentType): ISetStudentAction
}

const setStudentAction: ISetStudentFn = (student) => ({
    type: ACTION_READ,
    payload: student
});


export interface ISetIsLoadingAction extends ISimpleAction {
    payload: {
        isLoading: IState['isLoading']
    }
}
export interface ISetIsLoadingFn {
    (isLoading: boolean): ISetIsLoadingAction
}

const setIsLoadingAction: ISetIsLoadingFn = (isLoading) => ({
    type: ACTION_IS_LOADING,
    payload: {
        isLoading
    }
});

export interface ISetErrorAction extends ISimpleAction {
    payload: {
        errorMessage: IState['errorMessage']
    }
}

export interface ISetErrorFn {
    (errorMessage: string): ISetErrorAction
}

const setErrorAction: ISetErrorFn = (errorMessage) => ({
    type: ACTION_ERROR,
    payload: {
        errorMessage
    }
});

export type ActionType =
    ISetStudentAction
    | ISetIsLoadingAction
    | ISetErrorAction
    | ISetDateOfBirthAction
    | ISetFullNameAction
    | ISetPerformanceAction;


export function updateStudent(student: StudentType): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise((resolve) => {
            dispatch(setIsLoadingAction(true));

            // emulate async request
            setTimeout(() => {
                StudentsAPI.update(student);
                dispatch(setStudentAction(initialState));
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
                dispatch(setStudentAction(initialState));
                dispatch(setIsLoadingAction(false));
                resolve();
            }, 1800);
        });
    }
}

export function readStudent(studentId: number): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise((resolve) => {
            dispatch(setStudentAction(initialState));
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
                dispatch(setStudentAction(initialState));
                dispatch(setIsLoadingAction(false));
                resolve();
            }, 900);
        });
    }
}

