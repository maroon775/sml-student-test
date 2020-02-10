import React from 'react';
import Header from './components/Header';
import {Container} from "semantic-ui-react";
import Footer from "./components/Footer";


const Layout: React.FC<React.PropsWithChildren<{}>> = (props) => {
    return (<>
        <Header />
        <Container>
            {props.children}
        </Container>
        <Footer/>
    </>);
};

export default Layout;
