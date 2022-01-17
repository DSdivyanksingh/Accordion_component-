import React from 'react';
import Accordion from './accordion';
import data from './data';
import './App.css';

function App() {
  return (
    <div className='main_container'>
      <h1>Accordion Demo</h1>
      <div>
      {data.map(({heading,content})=>(
          <Accordion heading={heading} content={content}/>
        ))}
      </div>
    </div>
  );
}

export default App;
