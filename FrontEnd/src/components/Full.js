import React, { useState, useContext } from 'react';
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
    // Use memo in app??

    const [highlightedNumber, sethighlightedNumber] = useState(0);
    const [loading, setLoading] = useState(false);

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
                <Zipcode onLoading={setLoading}></Zipcode>
                <Locations position={highlightedNumber}></Locations>
                <ToggleButtons 
                    onToggle={sethighlightedNumber} 
                    selected={highlightedNumber}>
                </ToggleButtons>
            </div>
        );
    }
}

export default FullMenu;