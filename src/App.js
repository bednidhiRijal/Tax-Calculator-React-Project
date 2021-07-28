import React from 'react';
import './style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaxCalculatorForm from './TaxCalculatorForm';
import TaxCalculatorResult from './TaxCalculatorResult';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TaxCalculatorForm} />
        <Route path="/TaxCalculatorForm" component={TaxCalculatorForm} />
        <Route path="/TaxCalculatorResult" component={TaxCalculatorResult} />
      </Switch>
    </Router>
  );
};

export default App;
