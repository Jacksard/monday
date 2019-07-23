import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

//components
import Navbar from './components/Navbar';
import Background from './components/Background';
function App() {
  return (
    <div className='App'>
      <ul>
        <li>navbar</li>
        <Navbar />
        <li>background</li>
        <Background />
        <li>header</li>
        <li>body</li>
        <li>footer</li>
      </ul>
    </div>
  );
}

export default App;
