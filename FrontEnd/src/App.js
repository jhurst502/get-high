import React, { useMemo, useState } from 'react';
import './App.css';
import Map from './components/Map';
import Menu from './components/Menu';
import {CoordinatesContext} from './CoordinatesContext';
import startingLocations from '../src/defaultLocations';

function App() {
  const [coords, setCoords] = useState([-118.2923, 36.5785]);

  const [locations, setLocations] = useState(startingLocations);

  const value = useMemo(() => ({ coords, setCoords }), [coords, setCoords]);

  return (
    <div>
      <CoordinatesContext.Provider value={value}>
        <Map locations={locations}></Map>
        <Menu locations={locations} setLocations={setLocations}></Menu>
      </CoordinatesContext.Provider>
    </div>
  );
}

export default App;
