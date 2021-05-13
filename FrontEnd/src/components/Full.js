import React, { useState, useContext, useEffect } from 'react';
import Locations from './Locations';
import Zipcode from './Zipcode';
import ToggleButtons from './ToggleButtons';
import { CoordinatesContext } from '../CoordinatesContext';

// TODO Loading animation

const FullMenu = () => {

    const {coords, setCoords} = useContext(CoordinatesContext);
    // ^ We want to make a function to update the coordinates when buttons are toggled. 
    // Probably needs to be an array of coords
    // One gets selcted from that array based on highlightedNumber, then goes to setCoords
    // Use memo in app?

    // TODO put this ijn a separate file???
    let startingLocations = [
        {
            "lat": -118.2923,
            "lng": 36.5785,
            "elevation": 14505
        },
        {
            "lat": -119.5332,
            "lng": 37.7459,
            "elevation": 8839
        },
        {
            "lat": -151.0070,
            "lng": 63.0692,
            "elevation": 20310
        },
        {
            "lat": -118.2923,
            "lng": 36.5785,
            "elevation": 14505
        },
        {
            "lat": -119.5332,
            "lng": 37.7459,
            "elevation": 8839
        },
        {
            "lat": -151.0070,
            "lng": 63.0692,
            "elevation": 20310
        },
        {
            "lat": -118.2923,
            "lng": 36.5785,
            "elevation": 14505
        },
        {
            "lat": -119.5332,
            "lng": 37.7459,
            "elevation": 8839
        },
        {
            "lat": -151.0070,
            "lng": 63.0692,
            "elevation": 20310
        },
        {
            "lat": -119.5332,
            "lng": 37.7459,
            "elevation": 8839
        }
    ];

    const [locations, setLocations] = useState(startingLocations);
    const [highlightedNumber, sethighlightedNumber] = useState(0);
    const [loading, setLoading] = useState(false);

    // Changes useContext coords when a new location is highlighted 
    useEffect(() => {
        let currentCoords = [locations[highlightedNumber].lat, locations[highlightedNumber].lng];
        setCoords(currentCoords);
        console.log(currentCoords)
    }, [highlightedNumber]);

    if (loading === true) {
        return (
            <div class="z-20 absolute top-5 right-7 bg-indigo-100 rounded-lg py-4">
                Insert loading animation here...
            </div>
        );
    }
    else {
        return (
            <div class="z-20 absolute top-5 right-7 bg-indigo-100 rounded-lg py-4">
                <Zipcode 
                    onLoading={setLoading}
                    onLocations={setLocations}>
                </Zipcode>
                <Locations 
                    position={highlightedNumber}
                    locationList={locations}>   
                </Locations>
                <ToggleButtons 
                    onToggle={sethighlightedNumber} 
                    selected={highlightedNumber}>
                </ToggleButtons>
            </div>
        );
    }
}

export default FullMenu;