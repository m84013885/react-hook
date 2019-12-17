import React, { useContext, useEffect } from 'react'

import { UserContext } from '../../../utils/userHook'

const Content2 = () => {

    const { number, setNumber } = useContext(UserContext)


    useEffect(() => {
        console.log(6)
    }, [number])

    const handleOnClick = () => {
        setNumber(number + 1)
    }

    return <div onClick={handleOnClick}>{number}</div>
}
export default Content2
