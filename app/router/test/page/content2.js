import React,{ useContext } from 'react'

import {UserContext} from './createContent'

const Content1 = () => {
    const test = useContext(UserContext)

    console.log(test)

    return <div>{test.number}</div>
}
export default Content1
