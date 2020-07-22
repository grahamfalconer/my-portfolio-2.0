import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage'
import Navbar from './Navbar'
import Blog from './Blog'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Blog/>
    </div>
  )
};

export default App;
