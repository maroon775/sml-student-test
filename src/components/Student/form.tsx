import React, {useEffect} from 'react';
import {StudentPerformance} from "@/api/Students";
import {Button, Dropdown, Form, Icon, Input, InputOnChangeData, Message, Segment} from "semantic-ui-react";
import {Props} from "@/containers/Student/_form";
import {useHistory} from "react-router";

const perfObject: { [key: string]: string } = Object.freeze(StudentPerformance);
const perfOptions = Object.keys(StudentPerformance).map((key: string) => ({
    key,
    value: key,
    text: perfObject[key]
}));
perfOptions.unshift({key: '', value: '', text: 'No value'});

type ChangedEvent = React.ChangeEvent<HTMLInputElement>;
type ChangedData = InputOnChangeData;
type ChangedPerformanceData = ChangedData & { value: StudentPerformance };

interface onChange {
    (fn: (value: string) => void): (event: ChangedEvent, data: ChangedData) => void
}

const onChange: onChange = (fn) => (event, data) => fn(data.value);

export const StudentForm: React.FC<React.PropsWithChildren<Props>> = (props: Props) => {
    const history = useHistory();
    useEffect(() => {
        if (props.studentId && props.readStudent) {
            props.readStudent(props.studentId);
        }
    }, [props.readStudent]);


    const goToMainPage = () => history.push('/');

    const onSubmit = (): void => {
        props.saveStudent({
            id: props.id,
            dateOfBirth: props.dateOfBirth,
            fullName: props.fullName,
            performance: props.performance
        })
            .then(goToMainPage);
    };
    const onDelete = (): void => {
        if (props.id && props.removeStudent) {
            props.removeStudent(props.id)
                .then(goToMainPage)
        }
    };

    const onCancel = () => {
        props.resetForm();
        goToMainPage();
    };

    return <Form loading={props.isLoading}>
        <Segment clearing>
            {props.errorMessage && <Message negative content={props.errorMessage} />}
            <Form.Field
                control={Input}
                label="Full Name"
                onChange={onChange(props.onChangeFullName)}
                value={props.fullName}
            />
            <Form.Field
                control={Input}
                label="Date of birth"
                placeholder="mm/dd/yyyy"
                onChange={onChange(props.onChangeDateOfBirth)}
                value={props.dateOfBirth}
            />
            <Form.Field
                control={Dropdown}
                placeholder="Select performance"
                label="Performance"
                value={props.performance}
                onChange={(e: ChangedEvent, data: ChangedPerformanceData) => props.onChangePerformance(data.value)}
                selection
                options={perfOptions}
            />
            {
                props.id
                    ? <Button color="red" floated="right" onClick={onDelete}>Delete</Button>
                    : ''
            }
            <Button primary floated="left" onClick={onSubmit}>Save</Button>
            <Button color="red" floated="left" basic onClick={onCancel}>Cancel</Button>
        </Segment>
    </Form>;
};
