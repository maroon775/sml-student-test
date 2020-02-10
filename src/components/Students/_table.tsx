import React from 'react';
import {Table, Button, Header} from 'semantic-ui-react';
import {Props} from "@/containers/Students";
import {Link} from "react-router-dom";

type ListProps = {
    items: Props['items'],
    removeStudent: (studentId: number) => void
}

export const StudentsTable: React.FC<React.PropsWithChildren<ListProps>> = (props) => {
    return <>
        <Header as="h4">Students as Table</Header>
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>#</Table.HeaderCell>
                    <Table.HeaderCell>Fullname</Table.HeaderCell>
                    <Table.HeaderCell>Date of birth</Table.HeaderCell>
                    <Table.HeaderCell>Performance</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    props.items.map(item => {
                        return <Table.Row key={item.id}>
                            <Table.Cell>{item.id}</Table.Cell>
                            <Table.Cell>{item.fullName}</Table.Cell>
                            <Table.Cell>{item.dateOfBirth}</Table.Cell>
                            <Table.Cell>{item.performance}</Table.Cell>
                            <Table.Cell>
                                <Button icon="pencil" as={Link} to={`/update/${item.id}`} />
                                <Button color="red" icon="cancel" basic onClick={() => {
                                    props.removeStudent(item.id)
                                }} />
                            </Table.Cell>
                        </Table.Row>
                    })
                }
            </Table.Body>
        </Table>
    </>;
}
