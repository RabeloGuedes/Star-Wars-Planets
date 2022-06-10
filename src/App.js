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
  const [ordenateFilter, setOrdenateFilter] = useState('population');

  const [ordenateBy, setOrdenateBy] = useState();

  const [ordenationMethod, setOrdenationMethod] = useState('ASC');

  useEffect(() => {
    const apiRequest = async () => {
      const apiResponse = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const request = await apiResponse.json();
      const { results } = request;
      results
        .sort((previousPlanet, nextPlanet) => (
          +(previousPlanet.name > nextPlanet.name)
          || +(previousPlanet.name === nextPlanet.name) - 1
        ));
      setPlanets(results);
      setFilteredPlanets(results);
    };
    apiRequest();
  }, [columnFilter]);

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

  const deleteFilter = ({ target }) => {
    const parentPosition = target.parentElement.attributes.value.value;
    const newFilters = filters
      .filter((filter) => filter.columnFilter !== parentPosition);
    setFilters(newFilters);
    const filtersArray = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const stringsColumnsFilters = filters
      .map((filter) => filter.columnFilter);
    const newColumnsFilters = filtersArray
      .filter((filter) => !(stringsColumnsFilters.includes(filter)));
    newColumnsFilters.push(parentPosition);
    setColumnsFilters(newColumnsFilters);
  };

  const removeAllFilters = () => {
    const filtersArray = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    setFilters([]);
    setColumnsFilters(filtersArray);
  };

  const ordenate = () => {
    setOrdenateBy(ordenateFilter);
  };

  useEffect(() => {
    switch (ordenationMethod) {
    case 'ASC':
      setFilteredPlanets(filteredPlanets
        .sort((previousPlanet, nextPlanet) => (
          +(previousPlanet.ordenateFilter > nextPlanet.ordenateFilter)
          || +(previousPlanet.ordenateFilter === nextPlanet.ordenateFilter) - 1
        )));
      break;
    case 'DESC':
      setFilteredPlanets(filteredPlanets
        .sort((previousPlanet, nextPlanet) => (
          +(previousPlanet.ordenateFilter < nextPlanet.ordenateFilter)
          || +(previousPlanet.ordenateFilter === nextPlanet.ordenateFilter) - 1
        )));
      break;
    default: return true;
    }
  }, [ordenationMethod, filteredPlanets]);

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
        deleteFilter={ deleteFilter }
        removeAllFilters={ removeAllFilters }
        ordenate={ ordenate }
        ordenateFilter={ ordenateFilter }
        setOrdenateFilter={ setOrdenateFilter }
        setOrdenationMethod={ setOrdenationMethod }
        ordenationMethod={ ordenationMethod }
      />
      <Table planets={ filteredPlanets } />
    </div>
  );
}

export default App;
// app
