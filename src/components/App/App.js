import React from 'react';
import './App.css';
import { MarkList } from '../MarksList';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <MarkList />
        </header>
      </div>
    );
  }
}

export default App;
