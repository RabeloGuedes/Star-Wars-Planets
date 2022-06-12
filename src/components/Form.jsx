import React, { useContext } from 'react';
import PlanetsContext from '../services/PlanetsContext';

export default function Form() {
  const {
    search: {
      filterByName: {
        name,
      },
    },
    setPlanetName,
  } = useContext(PlanetsContext);
  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        placeholder="Planet Name"
        onChange={ ({ target: { value } }) => setPlanetName(value) }
      />
    </form>
  );
}
