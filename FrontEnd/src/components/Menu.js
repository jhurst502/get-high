import React, { useEffect, useState } from 'react';
import OpenMenu from './Open';
import FullMenu from './Full';
import toggle from '../animations/319-menu-6-morph-outline-edited.json'
import lottie from 'lottie-web';


const Menu = () => {
    let animationContainer = React.createRef();

    const [opened, setOpened] = useState(true);

    useEffect(() => {
        lottie.loadAnimation({
            loop: false,
            container: animationContainer.current,
            animationData: toggle
        })
    }, []);

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

    return (
        <div class="z-20 absolute top-5 right-7 bg-indigo-100 rounded-lg py-4">
            <button class="w-9 h-9 focus:outline-none p-1 absolute top-1 right-1 bg-indigo-100 rounded-lg"onClick={handle} ref={animationContainer}/>
            {opened ? <FullMenu /> : <></>}
        </div>
    )
}

export default Menu;