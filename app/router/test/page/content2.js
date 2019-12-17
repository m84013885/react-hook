import React, { useContext } from 'react'

import { UserContext } from '../../../utils/userHook'

const Content1 = () => {

    const test = useContext(UserContext)

    // console.log(test)

    return <div>{test.number - 1}</div>
}
export default Content1
