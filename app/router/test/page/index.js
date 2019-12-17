import Content1 from './content1'
import Content2 from './content2'
import React, { useState, useEffect } from 'react'

import { UserContext } from '../../../utils/userHook'

const Main = () => {
  // const UserContext = new createContext()
  const [number, setNumber] = useState(3)
  useEffect(() => {
    console.log(6)
  }, [number])
  return (
    <UserContext.Provider value={{ number, setNumber }}>
      <Content1 />
      <Content2 />
    </UserContext.Provider>
  )

}
export default Main
