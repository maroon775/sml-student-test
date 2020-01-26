import React from 'react';
import {
    Menu,
    Container,
    Image,
} from 'semantic-ui-react';

import logo from '@/assets/img/logo.png';

export default function Header() {
    return <Menu text>
        <Container>
            <Menu.Item header to='/'>
                <Image size='small' alt="React Application Template" src={logo}/>
            </Menu.Item>
        </Container>
    </Menu>;
}
