import style from './index.css'
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { ScrollView, Toast, Swiper, Mask, Img } from './components'
import { useInterval, useFetch } from '../../../utils/userHook'
console.log(style)

const Main = () => {

  useEffect(() => {
    const total = []
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
          const arr1 = []
          arr1.push(i === 0 ? 's' : 'f')
          arr1.push(j === 0 ? 's' : 'f')
          arr1.push(k === 0 ? 's' : 'f')
          total.push(arr1)
        }
      }
    }
    console.log(JSON.stringify(total))
  }, [])

  return (
    <div className={style.moveMain}>
      <div className={style.blockBox}>

      </div>
    </div>



  )
}
export default Main
