import React, { useContext } from 'react';
import PlanetsContext from '../services/PlanetsContext';
import { StyledTable } from '../styled/StyledTable';

const Table = () => {
  const { filteredPlanets, categories, order } = useContext(PlanetsContext);
  return (
    <StyledTable>
      <thead>
        <tr>
          {Object.values(categories).map((category) => (
            <th key={ Math.random() }>
              <h2>
                {category}
              </h2>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.map((planet) => (
          <tr key={ Math.random() }>
            {Object.keys(categories).map((category) => (
              <td
                key={ Math.random() }
              >
                {category === order.column ? (
                  <p style={ { color: "#FDEB00", fontSize: "25px" } } >{planet[category]}</p>
                ) : (
                  <p>{planet[category]}</p>
                )}
              </td>)
            )}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
