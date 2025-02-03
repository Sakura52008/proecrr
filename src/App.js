import React from 'react';
import Timer from './components/Timer'; // или './Timer', если Timer.js в src
import './App.css'

function App() {
  return (
    <div className="App">
      <Timer /> {/* Используем компонент Timer */}
    </div>
  );
}

export default App;
