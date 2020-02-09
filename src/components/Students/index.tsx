import React, {useEffect} from 'react';
import {Button, Message} from "semantic-ui-react";
import {Link} from 'react-router-dom';
import {Props} from "@/containers/Students";


export const Students: React.FC<Props> = (props: Props) => {
    useEffect(() => {
        props.loadItems()
    }, [props.loadItems]);

    return <div>
        <Button as={Link} to='/create' primary>Add student</Button>
        {
            props.items.length
            ? props.items.map(item => <div key={item.id}>{item.fullName}</div>)
            : <Message warning header={'0 results'} />
        }
    </div>;
};
