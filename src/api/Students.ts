const storageKey = 'studentsData';

export enum StudentPerformance {
    LOW = "Low",
    MEDIUM = "Medium",
    GOOD = "Good",
    PERFECT = "Perfect"
}

console.log(Object.values(StudentPerformance), Object.keys(StudentPerformance));
export interface IStudent {
    fullName: string,
    dateOfBirth: string,
    performance: StudentPerformance | undefined
}

export interface IStudentModel extends IStudent {
    id: number
}

function _setArrayToStorage(students: IStudentModel[]): void {
    if (students) {
        localStorage.setItem(storageKey, JSON.stringify(students));
    }
}

// first element is last inserted
function _getLastId(): number {
    const students = all();
    return Array.isArray(students) && students.length >= 1 ? students[0].id : 0;
}

function _findIndexById(id: number): number {
    return all().findIndex((item: IStudentModel) => item.id === id);
}


export function all(): IStudentModel[] {
    console.log('Request LocalStorage::/students/all');
    const _students = localStorage.getItem(storageKey);
    return _students ? JSON.parse(_students) : [];
}

export function create(student: IStudent): void {
    console.log('Request LocalStorage::/students/create', {student});
    const students = Array.from(all());

    const _student: IStudentModel = {
        ...student,
        id: (_getLastId() + 1)
    };

    students.unshift(_student);

    _setArrayToStorage(students);
}

export function update(student: IStudentModel): void {
    console.log('Request LocalStorage::/students/update', {student});
    const students = all();
    const key = _findIndexById(student.id);

    if(key >= 0) {
        students[key] = student;
    } else {
        throw new Error(`Student with id=${student.id} is undefined`);
    }

    _setArrayToStorage(students);
}

export function read(studentId: number): IStudentModel | null {
    console.log('Request LocalStorage::/students/read', {studentId});
    return all().find(item => item.id === studentId) || null;
}

export function remove(studentId: number): void {
    console.log('Request LocalStorage::/students/remove', {studentId});
    const students = all();
    const key = _findIndexById(studentId);
    students.splice(key, 1);

    _setArrayToStorage(students);
}
