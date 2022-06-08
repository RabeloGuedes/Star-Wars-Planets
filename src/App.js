import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Form from './components/Form';
import './App.css';

function App() {
  const [planets, setPlanets] = useState([]);
  const [planetNameInput, setPlanetName] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState([]);
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [comparisonNumber, setComparisonNumber] = useState(0);
  const [columnsFilters, setColumnsFilters] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
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

    const multipleFilters = filters.reduce((acc, filter) => (
      acc.filter((planet) => {
        switch (filter.comparisonFilter) {
        case 'maior que':
          return planet[filter.columnFilter] > Number(filter.comparisonNumber);
        case 'menor que':
          return planet[filter.columnFilter] < Number(filter.comparisonNumber);
        case 'igual a':
          return planet[filter.columnFilter] === filter.comparisonNumber;
        default: return true;
        }
      })), newFilteredPlanets);

    setFilteredPlanets(multipleFilters);
  }, [planets, planetNameInput, filters, columnsFilters]);

  const handleNumericFilters = () => {
    const newFilter = {
      columnFilter,
      comparisonFilter,
      comparisonNumber,
    };
    setFilters([...filters, newFilter]);
    const newcolumnsFilters = columnsFilters
      .filter((filter) => (filter !== columnFilter));
    setColumnsFilters(newcolumnsFilters);
  };

  return (
    <div>
      <Form
        setPlanetName={ setPlanetName }
        planetNameInput={ planetNameInput }
        setColumnFilter={ setColumnFilter }
        columnFilter={ columnFilter }
        setComparisonFilter={ setComparisonFilter }
        comparisonFilter={ comparisonFilter }
        setComparisonNumber={ setComparisonNumber }
        comparisonNumber={ comparisonNumber }
        handleNumericFilters={ handleNumericFilters }
        filters={ filters }
        columnsFilters={ columnsFilters }
        setColumnsFilters={ setColumnsFilters }
      />
      <Table planets={ filteredPlanets } />
    </div>
  );
}

export default App;
// app
