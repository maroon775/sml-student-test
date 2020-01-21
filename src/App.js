import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import config from '@/config';
import Layout from '@/components/Layout';

export default class App extends Component {
    render() {
        return <Router >
            <Layout>
                <Switch>
                    {
                        config.routes.map((route, index) => <Route
                            key={index}
                            exact={route.exact}
                            path={route.path}
                            render={props => (<route.component {...props}/>)}
                        />)
                    }
                </Switch>
            </Layout>
        </Router>;
    }
}
