import style from './index.css'
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { ScrollView, Toast, Swiper, Mask, Img } from './components'
import { useInterval, useFetch } from '../../../utils/userHook'
console.log(style)

import Videx from './video'
const demo = require('./video/482715dbbcc.mp4')

let dom = null

const Main = () => {
  const [mask, setMask] = useState('')
  const [maskAnima, setMaskAnima] = useState(true)
  const [testn, setTestn] = useState(1)
  useEffect(() => {
    const total = []
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          const arr1 = []
          arr1.push(i === 0 ? 0 : 100)
          arr1.push(j === 0 ? 0 : 100)
          arr1.push(k === 0 ? 0 : 100)
          total.push(arr1)
        }
      }
    }
    console.log(JSON.stringify(total))
  }, [])
  useEffect(() => {
    if (testn < 15) {
      setTimeout(() => {
        setTestn(testn + 1)
      }, 50)
    }
  }, [testn])
  return (
    <div className={style.moveMain}>
      <Videx play={true} />
      <Swiper>
        <div>123</div>
        <div>125</div>
      </Swiper>
      <div className={style.blockBox} onClick={() => { setMask(0) }}>
        <div>{testn}</div>

        <Mask mask={mask} setMask={setMask}>
          <div className={style.box}>
            <div className={style.button} onClick={() => { setOutShow(false) }}></div>
          </div>
        </Mask>
        {/* <Videx play={true} /> */}
        <Toast />
      </div>
    </div>



  )
}
export default Main
