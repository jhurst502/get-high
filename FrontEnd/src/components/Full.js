import React, { useState } from 'react';
import Locations from './Locations';

const FullMenu = () => {

    const [highlightedName, setHighlightedName] = useState(0);

    const increment = () => {
        let position = highlightedName;
        if (position < 9) {
            position++;
            setHighlightedName(position);
        }
        else if (position === 9) {
            setHighlightedName(0);
        }
        console.log(highlightedName);
    }

    const decrement = () => {
        let position = highlightedName;
        if (position > 0) {
            position--;
            setHighlightedName(position);
        }
        else if (position === 0) {
            setHighlightedName(9);
        }
        console.log(position);
    }

    return (
        <div class="z-20 absolute top-5 right-7 bg-indigo-100 rounded-lg py-4">
            <form class="m-4 flex">
                <input class="focus:outline-none rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Zipcode" />
                <button class="px-4 rounded-r-lg bg-white  text-gray-800  border-gray-200 border-t border-b border-r focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform hover:scale-110 transition duration-200 ease-in-out" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" clipRule="evenodd" />
                </svg>
                </button>
            </form>
            <Locations position={highlightedName}></Locations>
            <div class="flex justify-center p-3">
                <button onClick={decrement} class="bg-yellow-200 h-12 w-12 rounded-full shadow-md focus:outline-none hover:shadow-lg transform hover:scale-105 transition duration-200 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"/></svg>
                </button>
                <span class="px-5"></span>
                <button onClick={increment} class="bg-yellow-200 h-12 w-12 rounded-full shadow-md focus:outline-none hover:shadow-lg transform hover:scale-105 transition duration-200 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                </button>
            </div>
        </div>
    )
}

export default FullMenu;