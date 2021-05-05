import React, { useState } from 'react';

const Locations = (props) => {

    const [locations, setLocations] = useState(['Hill 1', 'Dog Hill', 'Mt Everest', 'Big Chungus', 'Denali', 'Mt. Elbert', 'Wetterhorn', 'Grays Peak', 'Longs Peak', 'Matterhorn'])

    switch(props.position) {
        case 0:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locations[0]}</div>
                    <div class="py-1">{locations[1]}</div>
                    <div class="py-1">{locations[2]}</div>
                    <div class="py-1">{locations[3]}</div>
                    <div class="py-1">{locations[4]}</div>
                    <div class="py-1">{locations[5]}</div>
                    <div class="py-1">{locations[6]}</div>
                    <div class="py-1">{locations[7]}</div>
                    <div class="py-1">{locations[8]}</div>
                    <div class="py-1">{locations[9]}</div>
                </div>
            );
        case 1:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locations[0]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locations[1]}</div>
                    <div class="py-1">{locations[2]}</div>
                    <div class="py-1">{locations[3]}</div>
                    <div class="py-1">{locations[4]}</div>
                    <div class="py-1">{locations[5]}</div>
                    <div class="py-1">{locations[6]}</div>
                    <div class="py-1">{locations[7]}</div>
                    <div class="py-1">{locations[8]}</div>
                    <div class="py-1">{locations[9]}</div>
                </div>
            );
        case 2:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locations[0]}</div>
                    <div class="py-1">{locations[1]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locations[2]}</div>
                    <div class="py-1">{locations[3]}</div>
                    <div class="py-1">{locations[4]}</div>
                    <div class="py-1">{locations[5]}</div>
                    <div class="py-1">{locations[6]}</div>
                    <div class="py-1">{locations[7]}</div>
                    <div class="py-1">{locations[8]}</div>
                    <div class="py-1">{locations[9]}</div>
                </div>
            );
        case 3:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locations[0]}</div>
                    <div class="py-1">{locations[1]}</div>
                    <div class="py-1">{locations[2]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locations[3]}</div>
                    <div class="py-1">{locations[4]}</div>
                    <div class="py-1">{locations[5]}</div>
                    <div class="py-1">{locations[6]}</div>
                    <div class="py-1">{locations[7]}</div>
                    <div class="py-1">{locations[8]}</div>
                    <div class="py-1">{locations[9]}</div>
                </div>
            );
        case 4:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locations[0]}</div>
                    <div class="py-1">{locations[1]}</div>
                    <div class="py-1">{locations[2]}</div>
                    <div class="py-1">{locations[3]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locations[4]}</div>
                    <div class="py-1">{locations[5]}</div>
                    <div class="py-1">{locations[6]}</div>
                    <div class="py-1">{locations[7]}</div>
                    <div class="py-1">{locations[8]}</div>
                    <div class="py-1">{locations[9]}</div>
                </div>
            );
        case 5:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locations[0]}</div>
                    <div class="py-1">{locations[1]}</div>
                    <div class="py-1">{locations[2]}</div>
                    <div class="py-1">{locations[3]}</div>
                    <div class="py-1">{locations[4]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locations[5]}</div>
                    <div class="py-1">{locations[6]}</div>
                    <div class="py-1">{locations[7]}</div>
                    <div class="py-1">{locations[8]}</div>
                    <div class="py-1">{locations[9]}</div>
                </div>
            );
        case 6:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locations[0]}</div>
                    <div class="py-1">{locations[1]}</div>
                    <div class="py-1">{locations[2]}</div>
                    <div class="py-1">{locations[3]}</div>
                    <div class="py-1">{locations[4]}</div>
                    <div class="py-1">{locations[5]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locations[6]}</div>
                    <div class="py-1">{locations[7]}</div>
                    <div class="py-1">{locations[8]}</div>
                    <div class="py-1">{locations[9]}</div>
                </div>
            );
        case 7:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locations[0]}</div>
                    <div class="py-1">{locations[1]}</div>
                    <div class="py-1">{locations[2]}</div>
                    <div class="py-1">{locations[3]}</div>
                    <div class="py-1">{locations[4]}</div>
                    <div class="py-1">{locations[5]}</div>
                    <div class="py-1">{locations[6]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locations[7]}</div>
                    <div class="py-1">{locations[8]}</div>
                    <div class="py-1">{locations[9]}</div>
                </div>
            );
        case 8:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locations[0]}</div>
                    <div class="py-1">{locations[1]}</div>
                    <div class="py-1">{locations[2]}</div>
                    <div class="py-1">{locations[3]}</div>
                    <div class="py-1">{locations[4]}</div>
                    <div class="py-1">{locations[5]}</div>
                    <div class="py-1">{locations[6]}</div>
                    <div class="py-1">{locations[7]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locations[8]}</div>
                    <div class="py-1">{locations[9]}</div>
                </div>
            );
        case 9:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locations[0]}</div>
                    <div class="py-1">{locations[1]}</div>
                    <div class="py-1">{locations[2]}</div>
                    <div class="py-1">{locations[3]}</div>
                    <div class="py-1">{locations[4]}</div>
                    <div class="py-1">{locations[5]}</div>
                    <div class="py-1">{locations[6]}</div>
                    <div class="py-1">{locations[7]}</div>
                    <div class="py-1">{locations[8]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locations[9]}</div>
                </div>
            );
    }
   
}

export default Locations;