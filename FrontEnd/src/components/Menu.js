import React, { useEffect, useState } from 'react';
import FullMenu from './Full';
import startingLocations from '../defaultLocations'
import toggle from '../animations/toggleLottie.json'
import loadingAnimation from '../animations/loadingLottie.json';
import lottie from 'lottie-web';


const Menu = () => {
    let toggleContainer = React.createRef();
    let loadingContainer = React.createRef();

    const [opened, setOpened] = useState(true);
    const [loading, setLoading] = useState(false);
    const [locations, setLocations] = useState(startingLocations);

    useEffect(() => {
        const menuToggle = lottie.loadAnimation({
            loop: false,
            container: toggleContainer.current,
            animationData: toggle
        });
        return () => menuToggle.destroy();
    }, [loading]);

    useEffect(() => {
        const animation = lottie.loadAnimation({
            loop: true,
            container: loadingContainer.current,
            animationData: loadingAnimation
        });
        return () => animation.destroy();
    }, [loading]);

    useEffect(() => {
        if (opened) {
            lottie.setDirection(1);
            lottie.play();
        }
        else if (!opened) {
            lottie.setDirection(-1);
            lottie.play();
        }
    }, [opened])


    function handle() {
        let x = !opened
        setOpened(x);
    }

    if (loading) {
        return (
            <div class="z-20 absolute top-5 right-7 bg-indigo-100 rounded-lg py-4">
                <div ref={loadingContainer}></div>
                <h2 class="flex justify-center font-medium px-3 text-base">Give us time to perform calculations</h2>
                <h3 class="flex justify-center font-normal px-3 py-1 text-sm">Average compute time is INSERT HERE</h3>
            </div>
        );
    }
    if (!loading) {
        return (
            <div class="z-20 absolute top-5 right-7 bg-indigo-100 rounded-lg py-4">
                <button class="w-9 h-9 focus:outline-none p-1 absolute top-1 right-1 bg-indigo-100 rounded-lg" onClick={handle} ref={toggleContainer} />
                {opened ? <FullMenu locations={locations} handleLocations={setLocations} handleLoading={setLoading} /> : <></>}
            </div>
        );
    }
}

export default Menu;