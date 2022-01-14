import React, { useState, useContext, useEffect } from 'react';
import Locations from './Locations';
import Zipcode from './Zipcode';
import ToggleButtons from './ToggleButtons';
import InfoButton from './InfoButton';
import { CoordinatesContext } from '../CoordinatesContext';

// TODO Loading animation

const FullMenu = ({ handleLoading, locations, handleLocations }) => {

    const [highlightedNumber, sethighlightedNumber] = useState(0);
    const [infoDisplay, setInfoDisplay] = useState(false);

    function isLoading(e) {
        handleLoading(e);
    }

    function isLocations(e) {
        handleLocations(e);
    }

    const { setCoords } = useContext(CoordinatesContext);

    useEffect(() => {
        let currentCoords = [locations[highlightedNumber].lng, locations[highlightedNumber].lat];
        setCoords(currentCoords);
    }, [highlightedNumber])

    return (
        <div>
            {infoDisplay === false && <div>
                <Zipcode
                    onLoading={isLoading}
                    onLocations={isLocations}>
                </Zipcode>
                <Locations
                    position={highlightedNumber}
                    changePosition={sethighlightedNumber}
                    locationList={locations}>
                </Locations>
                <ToggleButtons
                    highlighted={highlightedNumber}
                    onToggle={sethighlightedNumber}>
                </ToggleButtons>
            </div>
            }
            {infoDisplay === true && <div class="py-6 px-12 place-content-center">
                <h1 className="font-bold text-gray-500 flex justify-center text-lg pb-4">Information</h1>
                <h2 className="font-medium">About Get High</h2>
                <p> Get High was created as a fun project to help assist in the exploration of local places.
                    The idea behind this app is that many hiking trails and places of recreation are located on
                    hills and highpoints. Being able to find these high points easily might lead to someone finding new
                    areas to recreate. Ultimately this app is solely for entertainment purposes. Some of these points
                    may be
                    located in areas that are inaccessible or on private property. Be sure to do your own research
                    before
                    attempting to access any of these points, and always abide by the policies land managers have put in
                    place.</p>
                <h2 className="font-medium pt-4">How To Use</h2>
                <p>Get High is simple to use. Just put in any zip code in the United States and the algorithm will
                    return a list of the 10 highest points within a 30-mile radius. The algorithm may not get all the
                    way to the highest
                    summit, but it will usually get close enough to place a point somewhere along some of the highest
                    features. Data on
                    the highest points is stored in a database once it is calculated for quicker load times. If you are
                    the first one to put in a particular
                    zip code it will take longer to return data since it will be calculated in real time. If that is the
                    case, just be
                    patient and data for that zip code will load more quickly the second time.</p>
            </div>
            }
            <InfoButton
                onChange={setInfoDisplay}
                infoDisplay={infoDisplay}>
            </InfoButton>
        </div>
    );
}

export default FullMenu;