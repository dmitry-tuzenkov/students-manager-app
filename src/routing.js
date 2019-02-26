import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Pages from './pages/index';

const Routing = (
  <Router>
    <div>
      <Route exact path="/" component={Pages.Students} />
      <Route path="/grades" component={Pages.Grades} />
      <Route path="/students" component={Pages.Students} />
    </div>
  </Router>
);

export default Routing;
