import './App.css';
import React, { useState } from 'react';
import Weather from './WeatherApp/Weather';
import { Routes,Route, Router } from 'react-router-dom';


function App() {
 
  return (
   
    <div className='container'>
       <Weather />
    </div>
 
  );
  
  }
export default App;
