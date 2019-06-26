import style from './index.css'

import { useState, useEffect } from 'react'

const Main = () => {
  // useState的简单使用
  const [count, setCount] = useState(0)
  // useEffect的特殊用法（只执行一次）
  useEffect(() => {
  }, [])
  return <div className={style.test} onClick={() => { setCount(1 + count) }}>{count}</div>
}

export default Main
