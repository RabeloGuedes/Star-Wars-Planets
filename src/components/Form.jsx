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
    columnsFilters,
    filters,
    deleteFilter,
    removeAllFilters,
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
        {columnsFilters.map((filter) => (
          <option
            key={ Math.random() }
            value={ filter }
          >
            { filter }
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ ({ target: { value } }) => setComparisonFilter(value) }
      >
        <option value="maior que">
          greater than
        </option>
        <option value="menor que">
          smaller than
        </option>
        <option value="igual a">
          equal to
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
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ removeAllFilters }
      >
        Remover todos os filtros
      </button>
      <ul>
        {filters.map((filter) => (
          <div
            key={ Math.random() }
            value={ filter.columnFilter }
            data-testid="filter"
          >
            <li>
              { `${filter.columnFilter} 
                ${filter.comparisonFilter}
                ${filter.comparisonNumber}
              `}
            </li>
            <button
              type="button"
              onClick={ deleteFilter }
            >
              delete
            </button>
          </div>
        ))}
      </ul>
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
  columnsFilters: PropTypes.arrayOf(PropTypes.string),
}.isRequired;
