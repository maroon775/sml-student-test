import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Students from '@/containers/students';


export default function Layout(){
    return (<>
        <Header />
        <Students />
        <Footer />
    </>);
}
