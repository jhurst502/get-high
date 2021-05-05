import React, { useState } from 'react';

const Locations = () => {

    const [locations, setLocations] = useState(['Hill 1', 'Dog Hill', 'Mt Everest', 'Big Chungus', 'Denali', 'Mt. Elbert', 'Wetterhorn', 'Grays Peak', 'Longs Peak', 'Matterhorn'])

    return (
        <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
            <div>{locations[0]}</div>
            <div>{locations[1]}</div>
            <div>{locations[2]}</div>
            <div>{locations[3]}</div>
            <div>{locations[4]}</div>
            <div>{locations[5]}</div>
            <div>{locations[6]}</div>
            <div>{locations[7]}</div>
            <div>{locations[8]}</div>
            <div>{locations[9]}</div>
        </div>
    )
}

export default Locations;