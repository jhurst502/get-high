import React, { useEffect, useState } from 'react';
import FullMenu from './Full';
import toggle from '../animations/toggleLottie.json'
import loadingAnimation from '../animations/loadingLottie.json';
import lottie from 'lottie-web';


const Menu = () => {
    let toggleContainer = React.createRef();
    let loadingContainer = React.createRef();

    const [opened, setOpened] = useState(true);
    const [loading, setLoading] = useState(false);

    // TODO put this in a separate file???
    let startingLocations = [
        {
            "lng": -118.2923,
            "lat": 36.5785,
            "elevation": 14505
        },
        {
            "lng": -119.5332,
            "lat": 37.7459,
            "elevation": 8839
        },
        {
            "lng": -151.0070,
            "lat": 63.0692,
            "elevation": 20310
        },
        {
            "lng": -118.2923,
            "lat": 36.5785,
            "elevation": 14505
        },
        {
            "lng": -119.5332,
            "lat": 37.7459,
            "elevation": 8839
        },
        {
            "lng": -151.0070,
            "lat": 63.0692,
            "elevation": 20310
        },
        {
            "lng": -118.2923,
            "lat": 36.5785,
            "elevation": 14505
        },
        {
            "lng": -119.5332,
            "lat": 37.7459,
            "elevation": 8839
        },
        {
            "lng": -151.0070,
            "lat": 63.0692,
            "elevation": 20310
        },
        {
            "lng": -119.5332,
            "lat": 37.7459,
            "elevation": 8839
        }
    ];

    const [locations, setLocations] = useState(startingLocations);

    useEffect(() => {
        lottie.loadAnimation({
            loop: false,
            container: toggleContainer.current,
            animationData: toggle
        })
    }, []);

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

    useEffect(() => {

    }, [loading])
    
    if (loading) {
        return (
            <div class="z-20 absolute top-5 right-7 bg-indigo-100 rounded-lg py-4">
                <div ref={loadingContainer}></div>
            </div>
        );
    }
    if (!loading) {
        return (
            <div class="z-20 absolute top-5 right-7 bg-indigo-100 rounded-lg py-4">
                <button class="w-9 h-9 focus:outline-none p-1 absolute top-1 right-1 bg-indigo-100 rounded-lg"onClick={handle} ref={toggleContainer}/>
                {opened ? <FullMenu locations={locations} handleLocations={setLocations} handleLoading={setLoading} /> : <></>}
            </div>
        );
    }
}

export default Menu;