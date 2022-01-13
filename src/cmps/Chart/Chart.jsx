import React, { useEffect, useState } from 'react';
import './Chart.css';
function Chart({ planets }) {
  const [planetsToShow, setPlanets] = useState([]);

  useEffect(() => {
    /* Use data for the planets [Tatooine, Alderaan, Naboo, Bespin, Endor] */
    const myPlanets = planets.filter((p) => {
      return (
        p.name === 'Endor' ||
        p.name === 'Bespin' ||
        p.name === 'Naboo' ||
        p.name === 'Alderaan' ||
        p.name === 'Tatooine'
      );
    });
    setPlanets(myPlanets);
  }, []);

  return (
    <div className='chart'>
      {planetsToShow.map((p) => {
        return (
          <div key={p.name} className='column'>
            <div className='population'>{p.population} </div>
            <div
              className='box'
              style={{ height: `${p.population / 10000000}px` }}
            />
            <div className='name'> {p.name} </div>
          </div>
        );
      })}
    </div>
  );
}

export default Chart;
