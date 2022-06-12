import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import apiRequest from './apiRequest';

export default function Provider({ children }) {
  const context = {
    filters: {
      column: 'population',
      comparison: 'maior que',
      value: 0,
    },
    comparisonOptions: {
      maior_que: 'maior que',
      menor_que: 'menor que',
      igual_a: 'igual a',
    },
    categories: {
      name: 'name',
      rotation_period: 'rotation_period',
      orbital_period: 'orbital_period',
      diameter: 'diameter',
      climate: 'climate',
      gravity: 'gravity',
      terrain: 'terrain',
      surface_water: 'surface_water',
      population: 'population',
      films: 'films',
      created: 'created',
      edited: 'edited',
      url: 'url',
    },
  };
  const [planets, setPlanets] = useState([]);
  const [planetName, setPlanetName] = useState('');
  const [filteredPlanets, setfilteredPlanets] = useState([]);
  const [columnOption, setColumnOption] = useState('population');
  const [comparisonOption, setComparisonOption] = useState('maior que');
  const [inputValue, setValue] = useState(0);
  const [filters, setFilters] = useState([]);
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const search = {
    filterByName: {
      name: planetName,
      setPlanetName,
    },
    filterByColumn: {
      comparisonOption,
      columnOption,
      inputValue,
      setColumnOption,
      setComparisonOption,
      setValue,
    },
    filters,
    setFilters,
    columnOptions,
    setColumnOptions,
  };

  context.search = search;
  context.filteredPlanets = filteredPlanets;
  context.planets = planets;

  useEffect(() => {
    const callApi = async () => {
      const receivedPlanets = await apiRequest();
      setPlanets(receivedPlanets);
      setfilteredPlanets(receivedPlanets);
    };
    callApi();
  }, []);

  useEffect(() => {
    const newFilteredPlanets = planets
      .filter(({ name }) => name.toLowerCase().includes(planetName));

    const multipleFilters = filters.reduce((acc, currFilter) => (
      acc.filter((planet) => {
        switch (currFilter.comparisonOption) {
        case 'maior que':
          return planet[currFilter.columnOption] > Number(currFilter.inputValue);
        case 'menor que':
          return planet[currFilter.columnOption] < Number(currFilter.inputValue);
        case 'igual a':
          return planet[currFilter.columnOption] === currFilter.inputValue;
        default: return true;
        }
      })
    ), newFilteredPlanets);

    setfilteredPlanets(multipleFilters);
  }, [planetName, planets, filters]);

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
