const PATH = 'app/containers/students';

export interface IStudentState {
    id: number | undefined,
    fullName: string,
    dateOfBirh: string,
    performance: number | undefined
}

export const initialState:IStudentState = {
    id: undefined,
    dateOfBirh: '',
    fullName: '',
    performance: undefined
};

const CREATE = `${PATH}/CREATE`;
const READ = `${PATH}/READ`;
const UPDATE = `${PATH}/UPDATE`;
const DELETE = `${PATH}/DELETE`;
