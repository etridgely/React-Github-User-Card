import React from 'react';
import UserCard from './Components/UserCard';
import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
   <Router>
     <div className="App">
       <UserCard/>
     </div>
   </Router>
    
  );
}

export default App;
