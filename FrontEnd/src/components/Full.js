import React from 'react';
import Locations from './Locations';

const FullMenu = () => {

    return (
        <div class="z-20 absolute top-5 right-7 bg-indigo-100 rounded-lg py-4">
            <form class="m-4 flex">
                <input class="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Zipcode" />
                <button class="px-4 rounded-r-lg bg-indigo-400  text-gray-800  border-indigo-400 border-t border-b border-r">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" clipRule="evenodd" />
            </svg>
                </button>
            </form>
            <Locations></Locations>
        </div>
    )
}

export default FullMenu;