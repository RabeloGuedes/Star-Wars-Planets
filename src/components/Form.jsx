import React, { useContext } from 'react';
import PlanetsContext from '../services/PlanetsContext';

export default function Form() {
  const {
    search: {
      filterByName: {
        name,
        setPlanetName,
      },
      filterByColumn: {
        columnOption,
        comparisonOption,
        inputValue,
        setColumnOption,
        setComparisonOption,
        setValue,
      },
      filters,
      setFilters,
      columnOptions,
      setColumnOptions,
    },
    comparisonOptions,
  } = useContext(PlanetsContext);

  const handleNumericFilter = () => {
    const newFilter = {
      columnOption,
      comparisonOption,
      inputValue,
    };
    setFilters([...filters, newFilter]);
    const newColumnOptions = columnOptions.filter((filter) => filter !== columnOption);
    setColumnOptions(newColumnOptions);
  };
  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        placeholder="Planet Name"
        onChange={ ({ target: { value } }) => setPlanetName(value) }
      />
      <select
        data-testid="column-filter"
        value={ columnOption }
        onChange={ ({ target: { value } }) => setColumnOption(value) }
      >
        {columnOptions.map((filter) => (
          <option
            key={ Math.random() }
            value={ filter }
          >
            {filter}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparisonOption }
        onChange={ ({ target: { value } }) => setComparisonOption(value) }
      >
        {Object.values(comparisonOptions).map((comparison) => (
          <option
            key={ Math.random() }
            value={ comparison }
          >
            {comparison}
          </option>
        ))}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ inputValue }
        onChange={ ({ target: { value } }) => setValue(value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleNumericFilter }
      >
        Filtrar
      </button>
      {filters.map((filter) => (
        <p key={ Math.random() }>
          {filter.columnOption}
          {' '}
          {filter.comparisonOption}
          {' '}
          {filter.inputValue}
          {' '}
          <button
            type="button"
          >
            Deletar
          </button>
        </p>
      ))}
    </form>
  );
}
