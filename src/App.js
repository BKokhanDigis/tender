import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateNewDebt from './Components/pages/CreateNewDebt';
import DebtInfo from './Components/pages/DebtInfo';
import Home from './Components/pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={CreateNewDebt} />
          <Route path="/debtInfo" component={DebtInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
