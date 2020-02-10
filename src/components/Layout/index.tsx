import React from 'react';
import Header from './components/Header';
import {Container} from "semantic-ui-react";


const Layout: React.FC<React.PropsWithChildren<{}>> = (props) => {
    return (<>
        <Header />
        <Container>
            {props.children}
        </Container>
    </>);
};

export default Layout;
