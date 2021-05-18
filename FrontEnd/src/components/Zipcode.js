import React, { useState } from 'react';

// This component submits Zipcode input to third party APIs to retrieve location data 
const Zipcode = ({ onLoading, onLocations }) => {

    const [zipcode, setZipcode] = useState();
    //TODO pass error up to cancel loading if cannont connect to backend
    const [error, setError] = useState(null);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onLoading(true);
        if (zipcode.length === 5) {
            // Make call to api to get data
            fetch(`http://127.0.0.1:5000/elevation/${zipcode}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        let locationList = [];

                        if (result.points) {
                            let numbers = [result.points.one, result.points.two, result.points.three, result.points.four,
                            result.points.five, result.points.six, result.points.seven, result.points.eight, result.points.nine, result.points.ten]

                            for (const i of numbers) {
                                locationList.push(i)
                            }
                            onLocations(locationList);
                            onLoading(false);
                            console.log(locationList);
                        }
                    })
                .catch(error => {
                    console.log(error.message);
                    setError(error.message);
                })
        }
    }


    const handleChange = (e) => {
        let regex = /^[0-9\b]+$/;

        if (e.target.value === '' || regex.test(e.target.value)) {
            setZipcode(e.target.value)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} class="m-4 flex pt-2">
                <input type="text" value={zipcode} onChange={handleChange} maxLength="5" class="focus:outline-none rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Zipcode" />
                <button class="z-30 px-4 rounded-r-lg bg-white  text-gray-800  border-gray-200 border-t border-b border-r focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform hover:scale-110 transition duration-200 ease-in-out" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" clipRule="evenodd" />
                    </svg>
                </button>
            </form>
        </div>


    );
}

export default Zipcode;