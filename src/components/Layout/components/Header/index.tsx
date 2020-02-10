import React from 'react';
import {
    Menu,
    Container,
    Image,
} from 'semantic-ui-react';

import logo from '@/assets/img/logo.png';
import {Link} from "react-router-dom";

export default function Header() {
    return <Menu text>
        <Container>
            <Menu.Item header as={Link} to='/'>
                <Image size='tiny' alt="React Application Template" src={logo}/>
            </Menu.Item>
        </Container>
    </Menu>;
}
