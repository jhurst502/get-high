import React, { useState } from 'react';
import Locations from './Locations';
import Zipcode from './Zipcode';
import ToggleButtons from './ToggleButtons';

const FullMenu = () => {

    const [highlightedName, setHighlightedName] = useState(0);
    const [zipcode, setZipcode] = useState();
    const [clicked, setClicked] = useState(false);

    return (
        <div class="z-20 absolute top-5 right-7 bg-indigo-100 rounded-lg py-4">
            <Zipcode></Zipcode>
            <Locations position={highlightedName}></Locations>
            <ToggleButtons onToggle={setHighlightedName} selected={highlightedName}></ToggleButtons>
        </div>
    )
}

export default FullMenu;