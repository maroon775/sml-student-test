import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Layout from '@/components/Layout';
import Students from "@/containers/Students";
import {Create, Update} from "@/containers/Student";

export default function App() {
    return <Router>
        <Layout>
            <Switch>
                <Route
                    exact={true}
                    path='/'
                    render={(props) => (<Students />)}
                />

                <Route
                    exact={true}
                    path="/create"
                    render={(props) => (<Create />)}
                />
                <Route
                    exact={true}
                    path="/update/:id"
                    render={(props) => (<Update />)}
                />

            </Switch>
        </Layout>
    </Router>
};
