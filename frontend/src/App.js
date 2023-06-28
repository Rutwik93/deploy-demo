import './App.css';
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/test').then(res => {
      setData(res.data.data);
    })
  }, []);

  
  return (
    <div>
      <h1>API Response: {data}</h1>
    </div>
  )
}

export default App;
