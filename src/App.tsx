import React from 'react';
import logo from './images/logo.png';
import './App.css';
import QuizBody from './components/QuizBody'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <QuizBody/>
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
