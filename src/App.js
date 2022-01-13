import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { vehiclesService } from './services/vehiclesService';
import Table from './cmps/Table/Table';
import Chart from './cmps/Chart/Chart';
import { planetsService } from './services/planetsService';

function App() {

  const [planets, setPlanets] = useState([])
  const [topVehicle, setTopVehicle] = useState(null)
  useEffect(async () => {
    const vehicles = await vehiclesService.getAll()
    const data = await planetsService.getAll()
    setTopVehicle(vehicles[0])
    setPlanets(data)
  }, [])

  useEffect(() => {
  }, [planets, topVehicle])

  return (
    <div className="App">
      {topVehicle && <Table v={topVehicle} />}
      {planets.length && <Chart planets={planets} />}
    </div>
  );
}

export default App;
