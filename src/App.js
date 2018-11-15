import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import QueryDemo from './pages/Query';
import SubscriptionDemo from './pages/Subscription';
import MutationDemo from './pages/Mutation';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/query" component={QueryDemo} />
      <Route path="/subscription" component={SubscriptionDemo} />
      <Route path="/mutation" component={MutationDemo} />
    </div>
  </Router>
);

export default App;
