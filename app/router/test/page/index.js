import Content1 from './content1'
import Content2 from './content2'
import { createContext, useState, useEffect } from 'react'

const Main = () => {
  const UserContext = new createContext()
  const [number, setNumber] = useState(3)
  useEffect(() => {
    console.log(6)
  }, [number])
  return (
    <UserContext.Provider value={{ number, setNumber }}>
      <Content1 test={UserContext} />
      <Content2 test={UserContext} />
    </UserContext.Provider>
  )

}
export default Main
