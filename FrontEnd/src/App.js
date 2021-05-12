import React, { useMemo, useState } from 'react';
import './App.css';
import Map from './components/Map';
import Menu from './components/Menu';
import {CoordinatesContext} from './CoordinatesContext';

function App() {
  const [coords, setCoords] = useState([-118.2923, 36.5785]);

  const value = useMemo(() => ({ coords, setCoords }), [coords, setCoords]);

  return (
    <div>
      <CoordinatesContext.Provider value={value}>
        <Map></Map>
        <Menu></Menu>
      </CoordinatesContext.Provider>
    </div>
  );
}

export default App;
