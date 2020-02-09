import React from 'react';
import {IStudent, IStudentModel, StudentPerformance} from "@/api/Students";
import {Button, Dropdown, Form, Input, Message} from "semantic-ui-react";
import * as actions from "@/containers/Student/actions";

type PropsState = (IStudent & IStudentModel) & {
    errorMessage?: string,
    isLoading?: boolean,
};
type PropsActions = {
    saveStudent: (student: IStudent | IStudentModel) => void,
}

type Props = PropsState & PropsActions;

export const StudentForm: React.FC<React.PropsWithChildren<Props>> = (props: Props) => {
    const onSubmit = () => {
        props.saveStudent({
            id: props.id || undefined,
            dateOfBirth: props.dateOfBirth,
            fullName: props.fullName,
            performance: props.performance
        });
    };

    return <Form isLoading={props.isLoading}>
        {props.errorMessage && <Message danger content={props.errorMessage} />}
        <Form.Field
            as={Input}
            label="FullName"
            value={props.fullName}
        />
        <Form.Field
            as={Input}
            label="Date of birth"
            placeholder="mm/dd/yyyy"
            value={props.dateOfBirth}
        />
        <Form.Field
            as={Dropdown}
            placeholder='Select performance'
            label="Performance"
            value={props.performance}
            options={StudentPerformance}
        />
        <Button onClick={onSubmit}>Save</Button>
    </Form>;
};
