import React, { useState, useContext, useEffect } from 'react';
import Locations from './Locations';
import Zipcode from './Zipcode';
import ToggleButtons from './ToggleButtons';
import { CoordinatesContext } from '../CoordinatesContext';

// TODO Loading animation

const FullMenu = ({ handleLoading, locations, handleLocations }) => {

    const [highlightedNumber, sethighlightedNumber] = useState(0);

    function isLoading(e) {
        handleLoading(e);
    }

    function isLocations(e) {
        handleLocations(e);
    }

    const { coords, setCoords } = useContext(CoordinatesContext);

    


    // Change highlighed place and coordinate data on button toggle
    function handleHighlightChange(e) {
        sethighlightedNumber(e);
        let currentCoords = [locations[highlightedNumber].lng, locations[highlightedNumber].lat];
        setCoords(currentCoords);
        console.log(currentCoords)
    }

    return (
        <div>
            <Zipcode
                onLoading={isLoading}
                onLocations={isLocations}>
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

export default FullMenu;