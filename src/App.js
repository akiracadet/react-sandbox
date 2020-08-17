import React from 'react';
import './App.css';
import Person from './Components/Person';


function App() {
  return (
    <div>
      <Person name="Mavis" age="400" />
      <Person name="Lucy" age="17" />
      <Person name="Juvia" age="17" />
    </div>
  );
}

export default App;
