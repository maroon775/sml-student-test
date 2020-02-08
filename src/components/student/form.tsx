import React from 'react';
import {Props} from "@/containers/Student";
import {Form, Input} from "semantic-ui-react";

export const StudentForm: React.FC<Props> = (props: Props) => {
    return <Form>
        <Form.Field
            as={Input}
            label="FullName"
            value={props.fullName}
        />
        <Form.Field
            as={Input}
            label="Date of birth"
            value={props.dateOfBirth}
        />
    </Form>;
};
