import React from 'react';
import {Icon, Container, Segment} from "semantic-ui-react";

export default function Footer() {
    return <Container>
        <Segment basic textAlign='center'>
            <a href="https://github.com/maroon775/sml-student-test">
                <Icon name="github square" size='big' color='black'/>
            </a>
        </Segment>
    </Container>;
}
