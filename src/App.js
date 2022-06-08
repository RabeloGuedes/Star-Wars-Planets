import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Form from './components/Form';
import './App.css';

function App() {
  const [planets, setPlanets] = useState([]);
  const [planetNameInput, setPlanetName] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  useEffect(() => {
    const apiRequest = async () => {
      const apiResponse = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const request = await apiResponse.json();
      const { results } = request;
      setPlanets(results);
      setFilteredPlanets(results);
    };
    apiRequest();
  }, []);

  useEffect(() => {
    const newFilteredPlanets = planets
      .filter(({ name }) => (name.toLowerCase().includes(planetNameInput)));
    setFilteredPlanets(newFilteredPlanets);
  }, [planets, planetNameInput]);

  const changePlanetName = ({ target: { value } }) => {
    setPlanetName(value);
  };

  return (
    <div>
      <Form
        changePlanetName={ changePlanetName }
        planetNameInput={ planetNameInput }
      />
      <Table planets={ filteredPlanets } />
    </div>
  );
}

export default App;
// app
