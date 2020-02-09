import * as React from 'react';
import {Props} from "@/containers/Student/create";
import {StudentForm} from './form';

// type Props = {
//
// };

export function CreateForm(props: Props) {
    return (
        <div>
            <StudentForm
                dateOfBirth={props.dateOfBirth}
                id={}
            />;
        </div>
    );
};
