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
      rotation_period: 'rotation period',
      orbital_period: 'orbital period',
      diameter: 'diameter',
      climate: 'climate',
      gravity: 'gravity',
      terrain: 'terrain',
      surface_water: 'surface water',
      population: 'population',
      films: 'films',
      created: 'created',
      edited: 'edited',
      url: 'url',
    },
  };
  const [planets, setPlanets] = useState([]);
  const [planetName, setPlanetName] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [columnOption, setColumnOption] = useState('population');
  const [comparisonOption, setComparisonOption] = useState('maior que');
  const [inputValue, setValue] = useState(0);
  const [filters, setFilters] = useState([]);
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital period',
    'diameter',
    'rotation period',
    'surface water',
  ]);
  const [order, setOrder] = useState({
    column: 'population',
    sort: 'ASC',
    orderColumn: [
      'population',
      'orbital period',
      'diameter',
      'rotation period',
      'surface water',
    ],
  });
  const [ordinance, setOrdinance] = useState(order);

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

  const checkingValues = (previousPlanet, currentPlanet, multiplicationFactor) => {
    const MINUS_ONE = -1;
    if (previousPlanet === 'unknown') return 1 * multiplicationFactor;
    if (currentPlanet === 'unknown') return MINUS_ONE * multiplicationFactor;
    if (Number(previousPlanet) > Number(currentPlanet)) return 1;
    if (Number(previousPlanet) < Number(currentPlanet)) return MINUS_ONE;
  };

  useEffect(() => {
    const ASC = 1;
    const DESC = -1;
    switch (order.sort) {
    case 'ASC':
      return setFilteredPlanets((prevState) => [...prevState]
        .sort((previousPlanet, currentPlanet) => checkingValues(
          previousPlanet[order.column],
          currentPlanet[order.column],
          ASC,
        )));
    case 'DESC':
      return setFilteredPlanets((prevState) => [...prevState]
        .sort((previousPlanet, currentPlanet) => checkingValues(
          currentPlanet[order.column],
          previousPlanet[order.column],
          DESC,
        )));
    default: return true;
    }
  }, [order]);

  context.order = order;
  context.ordinance = ordinance;
  context.setOrder = setOrder;
  context.setOrdinance = setOrdinance;
  context.search = search;
  context.filteredPlanets = filteredPlanets;
  context.planets = planets;

  useEffect(async () => {
    const callApi = async () => {
      const receivedPlanets = await apiRequest();
      receivedPlanets
        .sort((previousPlanet, currentPlanet) => (
          +(previousPlanet.name > currentPlanet.name)
          || +(previousPlanet.name === currentPlanet.name) - 1
        ));   
      setPlanets(receivedPlanets);
      setFilteredPlanets(receivedPlanets);
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

    setFilteredPlanets(multipleFilters);
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
