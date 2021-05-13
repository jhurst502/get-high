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
            "lng": -118.2923,
            "lat": 36.5785,
            "elevation": 14505
        },
        {
            "lng": -119.5332,
            "lat": 37.7459,
            "elevation": 8839
        },
        {
            "lng": -151.0070,
            "lat": 63.0692,
            "elevation": 20310
        },
        {
            "lng": -118.2923,
            "lat": 36.5785,
            "elevation": 14505
        },
        {
            "lng": -119.5332,
            "lat": 37.7459,
            "elevation": 8839
        },
        {
            "lng": -151.0070,
            "lat": 63.0692,
            "elevation": 20310
        },
        {
            "lng": -118.2923,
            "lat": 36.5785,
            "elevation": 14505
        },
        {
            "lng": -119.5332,
            "lat": 37.7459,
            "elevation": 8839
        },
        {
            "lng": -151.0070,
            "lat": 63.0692,
            "elevation": 20310
        },
        {
            "lng": -119.5332,
            "lat": 37.7459,
            "elevation": 8839
        }
    ];

    const [locations, setLocations] = useState(startingLocations);
    const [highlightedNumber, sethighlightedNumber] = useState(0);
    const [loading, setLoading] = useState(false);

    // Change highlighed place and coordinate data on button toggle
    function handleHighlightChange(e) {
        sethighlightedNumber(e);
        let currentCoords = [locations[highlightedNumber].lng, locations[highlightedNumber].lat];
        setCoords(currentCoords);
        console.log(currentCoords)
    }

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
                    onToggle={handleHighlightChange} 
                    selected={highlightedNumber}>
                </ToggleButtons>
            </div>
        );
    }
}

export default FullMenu;