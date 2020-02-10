import React, {useEffect} from 'react';
import {Button, Message, Segment} from "semantic-ui-react";
import {Link} from 'react-router-dom';
import {Props} from "@/containers/Students";
import {StudentsTable} from './table';


export const Students: React.FC<Props> = (props: Props) => {
    useEffect(() => {
        props.loadItems()
    }, [props.loadItems]);

    return <div>
        <Button as={Link} to="/create" primary>Add student</Button>
        <Segment loading={props.isLoading}>
            {props.items.length > 0 && <StudentsTable removeStudent={props.removeStudent} items={props.items} />}
            {props.items.length <= 0 && !props.isLoading && <Message warning header={'No results'} />}
        </Segment>
    </div>;
};
