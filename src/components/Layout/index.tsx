import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


export default function Layout<Props> ({children}: React.PropsWithChildren<Props>){
    return (<>
        <Header />
        {children}
        <Footer />
    </>);
}
