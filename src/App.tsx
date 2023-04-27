import React from 'react';
import './App.css';
import AllRoutes from './routes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <AllRoutes />
    </div>
  );
}

export default App;
