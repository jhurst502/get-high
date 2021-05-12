import React, { useState } from 'react';
import './App.css';
import Map from './components/Map';
import Menu from './components/Menu';
import {CoordinatesContext} from './CoordinatesContext';

function App() {
  const [coords, setCoords] = useState([36.5785, -118.2923])

  return (
    <div>
      <CoordinatesContext.Provider value={{coords, setCoords}}>
        <Map></Map>
        <Menu></Menu>
      </CoordinatesContext.Provider>
    </div>
  );
}

export default App;
