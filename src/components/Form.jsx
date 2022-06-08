import React from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {
  const { planetNameInput, changePlanetName } = props;
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Planet Name"
        value={ planetNameInput }
        onChange={ changePlanetName }
      />
    </div>
  );
}

Form.propTypes = {
  planetNameInput: PropTypes.string,
  changePlanetName: PropTypes.func,
}.isRequired;
