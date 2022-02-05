import React from 'react';
import Mercury from './Planets/Mercury';
import Sun from './Planets/Sun';
import Venus from './Planets/Venus';
import Earth from './Planets/Earth';
import Mars from './Planets/Mars';
import Jupiter from './Planets/Jupiter';
import Saturn from './Planets/Saturn';
import Uranus from './Planets/Uranus';
import Neptune from './Planets/Neptune';

interface Planet {
  name: string;
  component: React.ReactNode
}

const SolarSystem: React.FC = () => {

  const planets: Planet[] = [
    {
      name: 'Sun',
      component: <Sun />,
    },
    {
      name: 'Mercury',
      component: <Mercury />,
    },
    {
      name: 'Venus',
      component: <Venus />
    },
    {
      name: 'Earth',
      component: <Earth />
    },
    {
      name: 'Mars',
      component: <Mars />
    },
    {
      name: 'Jupiter',
      component: <Jupiter />
    },
    {
      name: 'Saturn',
      component: <Saturn />
    },
    {
      name: 'Uranus',
      component: <Uranus />
    },
    {
      name: 'Neptune',
      component: <Neptune />
    },
  ]

  return (
    <React.Fragment>
      {planets.map((planet: Planet, index: number) =>
        <React.Fragment key={index + '-' + planet.name}>
          {planet.component}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
export default SolarSystem;