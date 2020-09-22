import React, { useState, useEffect } from 'react';

import './App.css';
import Inputs from './components/Inputs';

export default function App() {
  const [capitalInitial, setCapitalInitial] = useState(0);
  const [month, setMonth] = useState(0);
  const [rate, setRate] = useState(0);
  const [allCounters, setAllCounters] = useState([]);

  function counterInitialCapital(value) {
    setCapitalInitial(Number(value))
  }

  function counterMonth(value) {
    setMonth(Number(value));
  }

  function counterrate(value) {
    setRate(Number(value))
  }

  useEffect(() => {
    const decimalNumber = rate / 100;
    
    const values = [];
    
    for(let i = 1; i <= month; i++) {
      const capitalization = (1 + decimalNumber) ** i;
      const amount = (capitalInitial * capitalization).toFixed(2);
      const difference = (amount - capitalInitial).toFixed(2)
      const percentage = ((difference / capitalInitial) * 100).toFixed(2)

      values.push({
        id: i,
        amount,
        difference,
        percentage
      })

      setAllCounters(values)
    }

  }, [rate, month, capitalInitial])

  console.log(allCounters)

  return (
    <div className='containerApp'>
      <h1>React Compound rate</h1>
      <div className='inputsContainer'>
        <Inputs title={"Capital Inicial"} handleCounter={counterInitialCapital}/>
        <Inputs title={"Taxa de Juros"} handleCounter={counterrate}/>
        <Inputs title={"Qnt. Meses"} handleCounter={counterMonth}/>
      </div>
      <div className='cards'>
        {allCounters.map(counter => {
          return (
          <div className='card' key={counter.id}>
            <div className='card-amount'>
              <span>{counter.id}</span>
            </div>
            <div className='card-data'>
              <span style={counter.difference < 0 ? {color: 'red'} : {color: 'green'}}>R$ {counter.amount}</span>
              <span style={counter.difference < 0 ? {color: 'red'} : {color: 'green'}}>R$ {counter.difference}</span>
              <span style={counter.difference < 0 ? {color: 'red'} : {color: 'dodgerblue'}}>{counter.percentage}%</span>
            </div>
          </div>
          )})}
      </div>
    </div>
  );
}