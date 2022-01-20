import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home';
import Task from './pages/atividades';


const Routes = () => {
    return ( 
        <BrowserRouter>
            <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/task' exact component={Task} />
            </Switch>
        </BrowserRouter>
     );
}
 
export default Routes;