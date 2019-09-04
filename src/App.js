import React from 'react';
import './App.css';
import EntityDashboard from './components/EntityDashboard';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <EntityDashboard />
    </div>
  );
}

export default App;
