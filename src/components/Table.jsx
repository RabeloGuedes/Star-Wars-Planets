import React, { useContext } from 'react';
import PlanetsContext from '../services/PlanetsContext';

const Table = () => {
  const { filteredPlanets, categories } = useContext(PlanetsContext);
  return (
    <table>
      <thead>
        <tr>
          {Object.values(categories).map((category) => (
            <th key={ Math.random() }>
              {category}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.map((planet) => (
          <tr key={ Math.random() }>
            {Object.values(categories).map((category) => (
              <td
                key={ Math.random() }
              >
                {category === 'name' ? (
                  <p data-testid="planet-name">{planet[category]}</p>
                ) : (
                  <p>{planet[category]}</p>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
