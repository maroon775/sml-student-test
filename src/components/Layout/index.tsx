import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


const Layout: React.FC<React.PropsWithChildren<{}>> = (props) => {
    return (<>
        <Header />
        {props.children}
        <Footer />
    </>);
};

export default Layout;
