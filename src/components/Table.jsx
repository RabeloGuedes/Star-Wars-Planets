import React from 'react';
import PropTypes from 'prop-types';

export default function Table(props) {
  const { planets } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Rotation Period
          </th>
          <th>
            Orbital Period
          </th>
          <th>
            Diameter
          </th>
          <th>
            Climate
          </th>
          <th>
            Gravity
          </th>
          <th>
            Terrain
          </th>
          <th>
            Surface Water
          </th>
          <th>
            Population
          </th>
          <th>
            Films
          </th>
          <th>
            Created
          </th>
          <th>
            Edited
          </th>
          <th>
            URL
          </th>
        </tr>
      </thead>
      <tbody>
        {planets
          .map(({ name,
            rotation_period: rotationPeriod,
            orbital_period: orbitPeriod,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water: surfaceWater,
            population,
            films,
            created,
            edited,
            url,
          }) => (
            <tr key={ name }>
              <td>
                { name }
              </td>
              <td>
                { rotationPeriod }
              </td>
              <td>
                { orbitPeriod }
              </td>
              <td>
                { diameter }
              </td>
              <td>
                { climate }
              </td>
              <td>
                { gravity }
              </td>
              <td>
                { terrain }
              </td>
              <td>
                { surfaceWater }
              </td>
              <td>
                { population }
              </td>
              <td>
                { films }
              </td>
              <td>
                { created }
              </td>
              <td>
                { edited }
              </td>
              <td>
                { url }
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.shape({})),
}.isRequired;
