import React, { useState } from 'react';

const Locations = () => {

    const [locations, setLocations] = useState(['Hill 1', 'Dog Hill', 'Mt Everest'])

    return (
        <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
            <div>{locations[0]}</div>
            <div>{locations[1]}</div>
            <div>{locations[2]}</div>
        </div>
    )
}

export default Locations;