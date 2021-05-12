import React from 'react';

const ToggleButtons = ({onToggle, selected}) => {

    function handleChange(e) {
        onToggle(e);
    }

    const increment = () => {
        let position = selected;
        if (position < 9) {
            position++;
            handleChange(position);
        }
        else if (position === 9) {
            handleChange(0);
        }
    }

    const decrement = () => {
        let position = selected;
        if (position > 0) {
            position--;
            handleChange(position);
        }
        else if (position === 0) {
            handleChange(9);
        }
    }

    return (
        <div class="flex justify-center p-3">
            <button onClick={decrement} class="bg-yellow-200 h-12 w-12 rounded-full shadow-md focus:outline-none hover:shadow-lg transform hover:scale-105 transition duration-200 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z" /></svg>
            </button>
            <span class="px-5"></span>
            <button onClick={increment} class="bg-yellow-200 h-12 w-12 rounded-full shadow-md focus:outline-none hover:shadow-lg transform hover:scale-105 transition duration-200 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
            </button>
        </div>
    )
}

export default ToggleButtons;