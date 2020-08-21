import React from 'react';

import './App.css';
import Inputs from './components/Inputs';

export default function App() {
  return (
    <div className='containerApp'>
      <h1>React Compound Interest</h1>
      <div className='inputsContainer'>
        <Inputs />
        <Inputs />
        <Inputs />
      </div>
    </div>
  );
}
