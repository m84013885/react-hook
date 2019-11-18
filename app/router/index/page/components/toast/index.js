import React from 'react'
import style from './index.css'

import { useState, useEffect } from 'react'

let timerStart = null
let timerEnd = null

const Toast = () => {
  const [text, setText] = useState('')
  window.setToast = setText
  const [anima, setAnima] = useState(0)
  const clearTimer = () => {
    clearTimeout(timerStart)
    clearTimeout(timerEnd)
    timerStart = null
    timerEnd = null
  }
  useEffect(() => {
    if (text !== '') {
      clearTimer()
      setAnima(1)
      timerStart = setTimeout(() => {
        setAnima(0)
      }, 3000)
      timerEnd = setTimeout(() => {
        setText('')
      }, 3500)
    }
  }, [text])
  return (
    <div className={style.toast}>
      <div className={`${style.text} ${anima ? style.up : style.down}`}>
        {text}
      </div>
    </div>
  )
}
export default Toast
