import React, { createContext } from 'react';

// Stores current coordinates that Map component is displaying [lat, lng] format 
// Starting location is Mt Whitney
export const CoordinatesContext = createContext([36.5785, -118.2923]);