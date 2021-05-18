import React from 'react';

const Locations = ({locationList, position, changePosition}) => {

    function handleClick(e) {
        changePosition(parseInt(e.target.value));
    }

    switch(position) {
         case 0:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <button value="0" onClick={handleClick}class="py-1 text-left focus:outline-none ring-4 w-56 rounded-md font-medium">Point at {locationList[0].elevation}′</button>
                    <button value="1" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[1].elevation}′</button>
                    <button value="2" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[2].elevation}′</button>
                    <button value="3" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[3].elevation}′</button>
                    <button value="4" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[4].elevation}′</button>
                    <button value="5" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[5].elevation}′</button>
                    <button value="6" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[6].elevation}′</button>
                    <button value="7" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[7].elevation}′</button>
                    <button value="8" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[8].elevation}′</button>
                    <button value="9" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[9].elevation}′</button>
                </div>
            );
        case 1:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <button value="0" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[0].elevation}′</button>
                    <button value="1" onClick={handleClick}class="py-1 text-left focus:outline-none ring-4 w-56 rounded-md font-medium">Point at {locationList[1].elevation}′</button>
                    <button value="2" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[2].elevation}′</button>
                    <button value="3" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[3].elevation}′</button>
                    <button value="4" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[4].elevation}′</button>
                    <button value="5" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[5].elevation}′</button>
                    <button value="6" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[6].elevation}′</button>
                    <button value="7" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[7].elevation}′</button>
                    <button value="8" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[8].elevation}′</button>
                    <button value="9" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[9].elevation}′</button>
                </div>
            );
        case 2:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <button value="0" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[0].elevation}′</button>
                    <button value="1" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[1].elevation}′</button>
                    <button value="2" onClick={handleClick}class="py-1 text-left focus:outline-none ring-4 w-56 rounded-md font-medium">Point at {locationList[2].elevation}′</button>
                    <button value="3" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[3].elevation}′</button>
                    <button value="4" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[4].elevation}′</button>
                    <button value="5" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[5].elevation}′</button>
                    <button value="6" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[6].elevation}′</button>
                    <button value="7" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[7].elevation}′</button>
                    <button value="8" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[8].elevation}′</button>
                    <button value="9" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[9].elevation}′</button>
                </div>
            );
        case 3:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <button value="0" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[0].elevation}′</button>
                    <button value="1" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[1].elevation}′</button>
                    <button value="2" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[2].elevation}′</button>
                    <button value="3" onClick={handleClick}class="py-1 text-left focus:outline-none ring-4 w-56 rounded-md font-medium">Point at {locationList[3].elevation}′</button>
                    <button value="4" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[4].elevation}′</button>
                    <button value="5" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[5].elevation}′</button>
                    <button value="6" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[6].elevation}′</button>
                    <button value="7" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[7].elevation}′</button>
                    <button value="8" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[8].elevation}′</button>
                    <button value="9" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[9].elevation}′</button>
                </div>
            );
        case 4:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <button value="0" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[0].elevation}′</button>
                    <button value="1" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[1].elevation}′</button>
                    <button value="2" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[2].elevation}′</button>
                    <button value="3" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[3].elevation}′</button>
                    <button value="4" onClick={handleClick}class="py-1 text-left focus:outline-none ring-4 w-56 rounded-md font-medium">Point at {locationList[4].elevation}′</button>
                    <button value="5" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[5].elevation}′</button>
                    <button value="6" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[6].elevation}′</button>
                    <button value="7" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[7].elevation}′</button>
                    <button value="8" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[8].elevation}′</button>
                    <button value="9" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[9].elevation}′</button>
                </div>
            );
        case 5:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <button value="0" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[0].elevation}′</button>
                    <button value="1" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[1].elevation}′</button>
                    <button value="2" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[2].elevation}′</button>
                    <button value="3" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[3].elevation}′</button>
                    <button value="4" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[4].elevation}′</button>
                    <button value="5" onClick={handleClick}class="py-1 text-left focus:outline-none ring-4 w-56 rounded-md font-medium">Point at {locationList[5].elevation}′</button>
                    <button value="6" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[6].elevation}′</button>
                    <button value="7" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[7].elevation}′</button>
                    <button value="8" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[8].elevation}′</button>
                    <button value="9" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[9].elevation}′</button>
                </div>
            );
        case 6:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <button value="0" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[0].elevation}′</button>
                    <button value="1" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[1].elevation}′</button>
                    <button value="2" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[2].elevation}′</button>
                    <button value="3" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[3].elevation}′</button>
                    <button value="4" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[4].elevation}′</button>
                    <button value="5" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[5].elevation}′</button>
                    <button value="6" onClick={handleClick}class="py-1 text-left focus:outline-none ring-4 w-56 rounded-md font-medium">Point at {locationList[6].elevation}′</button>
                    <button value="7" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[7].elevation}′</button>
                    <button value="8" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[8].elevation}′</button>
                    <button value="9" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[9].elevation}′</button>
                </div>
            );
        case 7:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <button value="0" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[0].elevation}′</button>
                    <button value="1" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[1].elevation}′</button>
                    <button value="2" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[2].elevation}′</button>
                    <button value="3" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[3].elevation}′</button>
                    <button value="4" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[4].elevation}′</button>
                    <button value="5" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[5].elevation}′</button>
                    <button value="6" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[6].elevation}′</button>
                    <button value="7" onClick={handleClick}class="py-1 text-left focus:outline-none ring-4 w-56 rounded-md font-medium">Point at {locationList[7].elevation}′</button>
                    <button value="8" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[8].elevation}′</button>
                    <button value="9" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[9].elevation}′</button>
                </div>
            );
        case 8:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <button value="0" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[0].elevation}′</button>
                    <button value="1" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[1].elevation}′</button>
                    <button value="2" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[2].elevation}′</button>
                    <button value="3" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[3].elevation}′</button>
                    <button value="4" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[4].elevation}′</button>
                    <button value="5" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[5].elevation}′</button>
                    <button value="6" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[6].elevation}′</button>
                    <button value="7" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[7].elevation}′</button>
                    <button value="8" onClick={handleClick}class="py-1 text-left focus:outline-none ring-4 w-56 rounded-md font-medium">Point at {locationList[8].elevation}′</button>
                    <button value="9" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[9].elevation}′</button>
                </div>
            );
        case 9:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <button value="0" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[0].elevation}′</button>
                    <button value="1" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[1].elevation}′</button>
                    <button value="2" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[2].elevation}′</button>
                    <button value="3" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[3].elevation}′</button>
                    <button value="4" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[4].elevation}′</button>
                    <button value="5" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[5].elevation}′</button>
                    <button value="6" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[6].elevation}′</button>
                    <button value="7" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[7].elevation}′</button>
                    <button value="8" onClick={handleClick}class="py-1 text-left focus:outline-none">Point at {locationList[8].elevation}′</button>
                    <button value="9" onClick={handleClick}class="py-1 text-left focus:outline-none ring-4 w-56 rounded-md font-medium">Point at {locationList[9].elevation}′</button>
                </div>
            );
        default:
            return (
                <div>Location position not loading correctly</div>
            )
    }
}

export default Locations;