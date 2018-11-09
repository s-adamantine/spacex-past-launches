import React from 'react';
import LaunchListContainer from './components/launch-list-container';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LaunchListContainer />
      </div>
    );
  }
}

export default App;
