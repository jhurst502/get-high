import React, { useEffect, useState } from 'react';

const Locations = (props) => {

    const [isLoading, setIsLoading] = useState(props.click)
    const [locations, setLocations] = useState([])
    const [elevations, setElevations] = useState([])

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/elevation/${props.zipcode}`)
        .then(res => res.json())
        .then(
            (result) => {
                let locationList = []
                let ele = []
                
                if (result.points) {
                    let numbers = [result.points.one, result.points.two, result.points.three, result.points.four,
                        result.points.five, result.points.six, result.points.seven, result.points.eight, result.points.nine, result.points.ten]

                    for (const i of numbers) {
                        locationList.push(i)
                        ele.push(i.elevation)
                    }
                    console.log(locationList)
                    console.log(ele)

                    setLocations(locationList);
                    setElevations(ele);
                }
            },
            (error) => {
                console.log(error);
            }
        )
    }, [props.click])

    switch(props.position) {
        case 0:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{elevations[0]}</div>
                    <div class="py-1">{elevations[1]}</div>
                    <div class="py-1">{elevations[2]}</div>
                    <div class="py-1">{elevations[3]}</div>
                    <div class="py-1">{elevations[4]}</div>
                    <div class="py-1">{elevations[5]}</div>
                    <div class="py-1">{elevations[6]}</div>
                    <div class="py-1">{elevations[7]}</div>
                    <div class="py-1">{elevations[8]}</div>
                    <div class="py-1">{elevations[9]}</div>
                </div>
            );
        case 1:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{elevations[0]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{elevations[1]}</div>
                    <div class="py-1">{elevations[2]}</div>
                    <div class="py-1">{elevations[3]}</div>
                    <div class="py-1">{elevations[4]}</div>
                    <div class="py-1">{elevations[5]}</div>
                    <div class="py-1">{elevations[6]}</div>
                    <div class="py-1">{elevations[7]}</div>
                    <div class="py-1">{elevations[8]}</div>
                    <div class="py-1">{elevations[9]}</div>
                </div>
            );
        case 2:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{elevations[0]}</div>
                    <div class="py-1">{elevations[1]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{elevations[2]}</div>
                    <div class="py-1">{elevations[3]}</div>
                    <div class="py-1">{elevations[4]}</div>
                    <div class="py-1">{elevations[5]}</div>
                    <div class="py-1">{elevations[6]}</div>
                    <div class="py-1">{elevations[7]}</div>
                    <div class="py-1">{elevations[8]}</div>
                    <div class="py-1">{elevations[9]}</div>
                </div>
            );
        case 3:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{elevations[0]}</div>
                    <div class="py-1">{elevations[1]}</div>
                    <div class="py-1">{elevations[2]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{elevations[3]}</div>
                    <div class="py-1">{elevations[4]}</div>
                    <div class="py-1">{elevations[5]}</div>
                    <div class="py-1">{elevations[6]}</div>
                    <div class="py-1">{elevations[7]}</div>
                    <div class="py-1">{elevations[8]}</div>
                    <div class="py-1">{elevations[9]}</div>
                </div>
            );
        case 4:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{elevations[0]}</div>
                    <div class="py-1">{elevations[1]}</div>
                    <div class="py-1">{elevations[2]}</div>
                    <div class="py-1">{elevations[3]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{elevations[4]}</div>
                    <div class="py-1">{elevations[5]}</div>
                    <div class="py-1">{elevations[6]}</div>
                    <div class="py-1">{elevations[7]}</div>
                    <div class="py-1">{elevations[8]}</div>
                    <div class="py-1">{elevations[9]}</div>
                </div>
            );
        case 5:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{elevations[0]}</div>
                    <div class="py-1">{elevations[1]}</div>
                    <div class="py-1">{elevations[2]}</div>
                    <div class="py-1">{elevations[3]}</div>
                    <div class="py-1">{elevations[4]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{elevations[5]}</div>
                    <div class="py-1">{elevations[6]}</div>
                    <div class="py-1">{elevations[7]}</div>
                    <div class="py-1">{elevations[8]}</div>
                    <div class="py-1">{elevations[9]}</div>
                </div>
            );
        case 6:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{elevations[0]}</div>
                    <div class="py-1">{elevations[1]}</div>
                    <div class="py-1">{elevations[2]}</div>
                    <div class="py-1">{elevations[3]}</div>
                    <div class="py-1">{elevations[4]}</div>
                    <div class="py-1">{elevations[5]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{elevations[6]}</div>
                    <div class="py-1">{elevations[7]}</div>
                    <div class="py-1">{elevations[8]}</div>
                    <div class="py-1">{elevations[9]}</div>
                </div>
            );
        case 7:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{elevations[0]}</div>
                    <div class="py-1">{elevations[1]}</div>
                    <div class="py-1">{elevations[2]}</div>
                    <div class="py-1">{elevations[3]}</div>
                    <div class="py-1">{elevations[4]}</div>
                    <div class="py-1">{elevations[5]}</div>
                    <div class="py-1">{elevations[6]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{elevations[7]}</div>
                    <div class="py-1">{elevations[8]}</div>
                    <div class="py-1">{elevations[9]}</div>
                </div>
            );
        case 8:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{elevations[0]}</div>
                    <div class="py-1">{elevations[1]}</div>
                    <div class="py-1">{elevations[2]}</div>
                    <div class="py-1">{elevations[3]}</div>
                    <div class="py-1">{elevations[4]}</div>
                    <div class="py-1">{elevations[5]}</div>
                    <div class="py-1">{elevations[6]}</div>
                    <div class="py-1">{elevations[7]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{elevations[8]}</div>
                    <div class="py-1">{elevations[9]}</div>
                </div>
            );
        case 9:
            return (
                <div class="text-lg text-gray-700 grid grid-rows-3 justify-start pl-7">
                    <div class="py-1">{elevations[0]}</div>
                    <div class="py-1">{elevations[1]}</div>
                    <div class="py-1">{elevations[2]}</div>
                    <div class="py-1">{elevations[3]}</div>
                    <div class="py-1">{elevations[4]}</div>
                    <div class="py-1">{elevations[5]}</div>
                    <div class="py-1">{elevations[6]}</div>
                    <div class="py-1">{elevations[7]}</div>
                    <div class="py-1">{elevations[8]}</div>
                    <div class="py-1 ring-4 w-56 rounded-md font-medium">{elevations[9]}</div>
                </div>
            );
    }
   
}

export default Locations;