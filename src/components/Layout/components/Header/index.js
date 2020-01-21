import React from 'react';
import {Link} from 'react-router-dom';
import {
    Menu,
    Container,
    Image,
} from 'semantic-ui-react';

import logo from '@/assets/img/logo.png';

export default function Header() {
    return <Menu text>
        <Container>
            <Menu.Item as={Link} header to='/'>
                <Image size='small' alt="React Application Template" src={logo}/>
            </Menu.Item>
        </Container>
    </Menu>;
}
