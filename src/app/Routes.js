
import React from 'react';
import { Route, Switch, } from 'react-router-dom';

import App from './pages/main';
import antdTest from './pages/antdTest';
import discuss from './pages/discuss';
import postDet from './pages/postDet';

const About = () => (
  <div>
    <h3>About</h3>
  </div>
)

const Routes = (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/discuss" component={discuss} />
    <Route path="/antdTest" component={antdTest} />
    <Route  path="/detail/:postId" component={postDet}/>
    <Route component={() => <span>Err</span>} />
  </Switch>

);

export default Routes;