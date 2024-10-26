import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorkoutRecorder from './components/WorkoutRecorder';
import WorkoutSummary from './components/WorkoutSummary';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={WorkoutRecorder} />
          <Route path="/summary" component={WorkoutSummary} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
