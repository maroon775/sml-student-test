import React from 'react';
import classNames from 'classnames';
import {
    Container
} from 'semantic-ui-react';
import * as styles from './styles.less';
import logo from '../../../../assets/img/logo.png';

export default function Footer() {
    return <footer className={classNames(styles.footerOuter)}>
        <Container>
            <div className={styles.footer}>
                <img src={logo} width="151px" alt="Logotype" />
                <div className={styles.footerInner}>
                    <span>© 2020 MyWebSite. All rights reserved.</span>
                </div>
            </div>
        </Container>
    </footer>;
}
