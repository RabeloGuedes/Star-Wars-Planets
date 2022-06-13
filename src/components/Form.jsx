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
    if (columnOptions.length > 1) setColumnOption(columnOptions[1]);
    else setColumnOption(columnOptions[0]);
  };

  const deleteFilter = ({ target: { id } }) => {
    const newFilters = filters.filter((filter) => (
      filter.columnOption !== id
    ));
    setFilters(newFilters);
    columnOptions.push(id);
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
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ () => {
          setFilters([]);
          setColumnOptions([
            'population',
            'orbital_period',
            'diameter',
            'rotation_period',
            'surface_water',
          ]);
        } }
      >
        Resetar filtros
      </button>
      {filters.map((filter) => (
        <div
          data-testid="filter"
          key={ Math.random() }
        >
          <p>
            {filter.columnOption}
            {' '}
            {filter.comparisonOption}
            {' '}
            {filter.inputValue}
            {' '}
          </p>
          <button
            type="button"
            id={ filter.columnOption }
            onClick={ deleteFilter }
          >
            Deletar
          </button>
        </div>
      ))}
    </form>
  );
}
