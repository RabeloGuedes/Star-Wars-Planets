import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import './App.css';

function App() {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    const apiRequest = async () => {
      const apiResponse = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const request = await apiResponse.json();
      const { results } = request;
      setPlanets(results);
      console.log(results);
      return results;
    };
    apiRequest();
  }, []);
  return (
    <div>
      <Table planets={ planets } />
    </div>
  );
}

export default App;
// app
