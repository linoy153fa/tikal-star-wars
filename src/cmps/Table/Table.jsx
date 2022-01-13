import React from 'react';
import './Table.css';
function Table({ v }) {
  return (
    <div className="container">
      <h1>Tikal-home assignment</h1>
        <h5>Star Wars story</h5>
    <table className='table' border='1'>
      <tbody>
        <tr>
          <td>
            Vehicle name with the largest sum:
            <br/>
            <span className='bold'>{v.name}</span>
          </td>
        </tr>
        <tr>
          <td>
            Related home planets and their respective:
            <br/>
            {v.planets.map((p) => {
              return (
                <span key={p.name} className='bold'>
                  {p.name} {p.population},
                </span>
              );
            })}
            <br/>
            population
          </td>
        </tr>
        <tr>
          <td>
            Related pilot names:
            <br/>
            {v.pilotNames.map((p) => {
              return (
                <span key={p} className='bold'>
                  {p}
                </span>
              );
            })}
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default Table;
