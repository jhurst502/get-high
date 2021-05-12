import React, { useState } from 'react';
import Locations from './Locations';
import Zipcode from './Zipcode';
import ToggleButtons from './ToggleButtons';

// TODO Loading animation

const FullMenu = () => {

    const [highlightedName, setHighlightedName] = useState(0);
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
                <Locations position={highlightedName}></Locations>
                <ToggleButtons 
                    onToggle={setHighlightedName} 
                    selected={highlightedName}>
                </ToggleButtons>
            </div>
        );
    }
}

export default FullMenu;