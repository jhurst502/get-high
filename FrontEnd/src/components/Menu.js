import React, { useState } from 'react'
import OpenMenu from './Open'
import FullMenu from './Full'

const Menu = () => {

    const [opened, setOpened] = useState(true);

    return (
        <div>
            {opened ? <FullMenu /> : <OpenMenu />}
        </div>
    )
}

export default Menu;