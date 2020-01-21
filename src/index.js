import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './store';

import 'normalize.css';
import 'semantic-ui-css/semantic.min.css';
import './assets/styles/app.less';

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('App'));

