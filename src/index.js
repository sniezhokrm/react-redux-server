import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry/error-boundry';
import RestoServices from './services/resto-service';
import RestoServicesContext from './components/resto-service-context';
import store from './store';
import './index.scss';

const restoServices = new RestoServices();

ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundry>
        <RestoServicesContext.Provider value={restoServices}>
          <Router>
            <App/>
          </Router>
        </RestoServicesContext.Provider>
      </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));
