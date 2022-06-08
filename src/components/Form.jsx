import React from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {
  const {
    planetNameInput,
    setPlanetName,
    setColumnFilter,
    columnFilter,
    setComparisonFilter,
    comparisonFilter,
    setComparisonNumber,
    comparisonNumber,
    handleNumericFilters,
  } = props;
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Planet Name"
        value={ planetNameInput }
        onChange={ ({ target: { value } }) => setPlanetName(value) }
      />
      <select
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ ({ target: { value } }) => setColumnFilter(value) }
      >
        <option value="population">
          population
        </option>
        <option value="orbital_period">
          orbital_period
        </option>
        <option value="diameter">
          diameter
        </option>
        <option value="rotation_period">
          rotation_period
        </option>
        <option value="surface_water">
          surface_water
        </option>
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ ({ target: { value } }) => setComparisonFilter(value) }
      >
        <option value="maior que">
          maior que
        </option>
        <option value="menor que">
          menor que
        </option>
        <option value="igual a">
          igual a
        </option>
      </select>
      <input
        type="number"
        placeholder="0"
        data-testid="value-filter"
        value={ comparisonNumber }
        onChange={ ({ target: { value } }) => setComparisonNumber(value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleNumericFilters }
      >
        Enviar
      </button>
    </div>
  );
}

Form.propTypes = {
  planetNameInput: PropTypes.string,
  columnFilter: PropTypes.string,
  comparisonFilter: PropTypes.string,
  comparisonNumber: PropTypes.string,
  setPlanetName: PropTypes.func,
  setColumnFilter: PropTypes.func,
  setComparisonFilter: PropTypes.func,
  setComparisonNumber: PropTypes.func,
}.isRequired;
