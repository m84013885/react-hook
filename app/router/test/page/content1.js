import React,{ useContext } from 'react'

import {UserContext} from './createContent'

const Content2 = () => {
    const test = useContext(UserContext)

    console.log(test)

    const handleOnClick = () => {
        test.setNumber(4)
    }

    return <div onClick={handleOnClick}>{test.number}</div>
}
export default Content2
