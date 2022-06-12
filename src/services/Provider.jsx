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
    columnOptions: {
      population: 'population',
      orbital_period: 'orbital_period',
      diameter: 'diameter',
      rotation_period: 'rotation_period',
      surface_water: 'surface_water',
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

  const search = {
    filterByName: {
      name: planetName,
    },
  };

  context.search = search;
  context.filteredPlanets = filteredPlanets;
  context.setPlanetName = setPlanetName;
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
    setfilteredPlanets(newFilteredPlanets);
  }, [planetName, planets]);

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
