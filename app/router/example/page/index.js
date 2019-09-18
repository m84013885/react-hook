import style from './index.css'

import { useState, useEffect, useReducer } from 'react'

const testFun = (num, param) => {
  console.log(num)
  console.log(param)
  return num + param
}

const Main = () => {
  // useState的简单使用
  const [count, setCount] = useState(0)

  const [num, fun] = useReducer(testFun, 0)
  // useEffect的特殊用法（只执行一次）
  useEffect(() => {
  }, [])
  return (
    <React.Fragment>
      <div className={style.test} onClick={() => { setCount(1 + count) }}>{count}</div>
      <div onClick={() => { fun(5) }}>{num}</div>
    </React.Fragment>
  )
}

export default Main
