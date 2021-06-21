import React from 'react';
import {MainPage, CartPages} from '../pages/index';
import AppHeader from '../app-header';
import WithRestoService from '../hoc/with-resto-service';
import {Switch, Route} from 'react-router-dom';
import CartPage from '../pages/cart-page';

import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}}
           className="app">
              <AppHeader total={50}/>
              <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/cart" component={CartPages}/>
                <Route path = '/:id' component ={CartPage}/>
              </Switch>
        </div>
    )
}

export default WithRestoService()(App);
