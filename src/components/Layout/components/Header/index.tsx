import React from 'react';
import {
    Container,
    Image,
} from 'semantic-ui-react';

import logo from '@/assets/img/logo.png';
import * as styles from './styles.less';
import {Link} from "react-router-dom";

export default function Header() {
    return <Container textAlign="center">
        <header className={styles.header}>
            <Link to="/">
                <Image inline size="tiny" alt="React Application Template" src={logo} />
            </Link>
        </header>
    </Container>;
}
