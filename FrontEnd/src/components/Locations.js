import React from 'react';

const Locations = ({locationList, position}) => {

    switch(position) {
        case 0:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locationList[0].elevation}</div>
                    <div class="py-1">{locationList[1].elevation}</div>
                    <div class="py-1">{locationList[2].elevation}</div>
                    <div class="py-1">{locationList[3].elevation}</div>
                    <div class="py-1">{locationList[4].elevation}</div>
                    <div class="py-1">{locationList[5].elevation}</div>
                    <div class="py-1">{locationList[6].elevation}</div>
                    <div class="py-1">{locationList[7].elevation}</div>
                    <div class="py-1">{locationList[8].elevation}</div>
                    <div class="py-1">{locationList[9].elevation}</div>
                </div>
            );
        case 1:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locationList[0].elevation}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locationList[1].elevation}</div>
                    <div class="py-1">{locationList[2].elevation}</div>
                    <div class="py-1">{locationList[3].elevation}</div>
                    <div class="py-1">{locationList[4].elevation}</div>
                    <div class="py-1">{locationList[5].elevation}</div>
                    <div class="py-1">{locationList[6].elevation}</div>
                    <div class="py-1">{locationList[7].elevation}</div>
                    <div class="py-1">{locationList[8].elevation}</div>
                    <div class="py-1">{locationList[9].elevation}</div>
                </div>
            );
        case 2:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locationList[0].elevation}</div>
                    <div class="py-1">{locationList[1].elevation}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locationList[2].elevation}</div>
                    <div class="py-1">{locationList[3].elevation}</div>
                    <div class="py-1">{locationList[4].elevation}</div>
                    <div class="py-1">{locationList[5].elevation}</div>
                    <div class="py-1">{locationList[6].elevation}</div>
                    <div class="py-1">{locationList[7].elevation}</div>
                    <div class="py-1">{locationList[8].elevation}</div>
                    <div class="py-1">{locationList[9].elevation}</div>
                </div>
            );
        case 3:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locationList[0].elevation}</div>
                    <div class="py-1">{locationList[1].elevation}</div>
                    <div class="py-1">{locationList[2].elevation}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locationList[3].elevation}</div>
                    <div class="py-1">{locationList[4].elevation}</div>
                    <div class="py-1">{locationList[5].elevation}</div>
                    <div class="py-1">{locationList[6].elevation}</div>
                    <div class="py-1">{locationList[7].elevation}</div>
                    <div class="py-1">{locationList[8].elevation}</div>
                    <div class="py-1">{locationList[9].elevation}</div>
                </div>
            );
        case 4:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locationList[0].elevation}</div>
                    <div class="py-1">{locationList[1].elevation}</div>
                    <div class="py-1">{locationList[2].elevation}</div>
                    <div class="py-1">{locationList[3].elevation}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locationList[4].elevation}</div>
                    <div class="py-1">{locationList[5].elevation}</div>
                    <div class="py-1">{locationList[6].elevation}</div>
                    <div class="py-1">{locationList[7].elevation}</div>
                    <div class="py-1">{locationList[8].elevation}</div>
                    <div class="py-1">{locationList[9].elevation}</div>
                </div>
            );
        case 5:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locationList[0].elevation}</div>
                    <div class="py-1">{locationList[1].elevation}</div>
                    <div class="py-1">{locationList[2].elevation}</div>
                    <div class="py-1">{locationList[3].elevation}</div>
                    <div class="py-1">{locationList[4].elevation}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locationList[5].elevation}</div>
                    <div class="py-1">{locationList[6].elevation}</div>
                    <div class="py-1">{locationList[7].elevation}</div>
                    <div class="py-1">{locationList[8].elevation}</div>
                    <div class="py-1">{locationList[9].elevation}</div>
                </div>
            );
        case 6:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locationList[0].elevation}</div>
                    <div class="py-1">{locationList[1].elevation}</div>
                    <div class="py-1">{locationList[2].elevation}</div>
                    <div class="py-1">{locationList[3].elevation}</div>
                    <div class="py-1">{locationList[4].elevation}</div>
                    <div class="py-1">{locationList[5].elevation}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locationList[6].elevation}</div>
                    <div class="py-1">{locationList[7].elevation}</div>
                    <div class="py-1">{locationList[8].elevation}</div>
                    <div class="py-1">{locationList[9].elevation}</div>
                </div>
            );
        case 7:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locationList[0].elevation}</div>
                    <div class="py-1">{locationList[1].elevation}</div>
                    <div class="py-1">{locationList[2].elevation}</div>
                    <div class="py-1">{locationList[3].elevation}</div>
                    <div class="py-1">{locationList[4].elevation}</div>
                    <div class="py-1">{locationList[5].elevation}</div>
                    <div class="py-1">{locationList[6].elevation}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locationList[7].elevation}</div>
                    <div class="py-1">{locationList[8].elevation}</div>
                    <div class="py-1">{locationList[9].elevation}</div>
                </div>
            );
        case 8:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locationList[0].elevation}</div>
                    <div class="py-1">{locationList[1].elevation}</div>
                    <div class="py-1">{locationList[2].elevation}</div>
                    <div class="py-1">{locationList[3].elevation}</div>
                    <div class="py-1">{locationList[4].elevation}</div>
                    <div class="py-1">{locationList[5].elevation}</div>
                    <div class="py-1">{locationList[6].elevation}</div>
                    <div class="py-1">{locationList[7].elevation}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locationList[8].elevation}</div>
                    <div class="py-1">{locationList[9].elevation}</div>
                </div>
            );
        case 9:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{locationList[0].elevation}</div>
                    <div class="py-1">{locationList[1].elevation}</div>
                    <div class="py-1">{locationList[2].elevation}</div>
                    <div class="py-1">{locationList[3].elevation}</div>
                    <div class="py-1">{locationList[4].elevation}</div>
                    <div class="py-1">{locationList[5].elevation}</div>
                    <div class="py-1">{locationList[6].elevation}</div>
                    <div class="py-1">{locationList[7].elevation}</div>
                    <div class="py-1">{locationList[8].elevation}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{locationList[9].elevation}</div>
                </div>
            );
        default:
            return (
                <div>Location position not loading correctly</div>
            )
    }
}

export default Locations;