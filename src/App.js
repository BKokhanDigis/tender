import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateNewDebt from './Components/pages/CreateNewDebt';
import DebtInfo from './Components/pages/DebtInfo';

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
