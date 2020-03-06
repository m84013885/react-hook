import style from './index.css'
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { ScrollView, Toast, Swiper, Mask } from './components'
import { useInterval, useFetch } from '../../../utils/userHook'

let init = true

const Main = () => {
  const renderArr = () => {
    const arr = []
    for (let i = 0; i < 10; i++) {
      const arr1 = []
      for (let j = 0; j < 10; j++) {
        arr1.push(parseInt(Math.random() * (3) + 1))
      }
      arr.push(arr1)
    }
    console.log(arr)
  }
  renderArr()
  const renderBlocks = () => {
    const arr = []
    for (let i = 0; i < 90; i++) {
      const color = parseInt(Math.random() * (3) + 1)
      let player = ''
      if (init && color !== 2) {
        player = <div className={style.player}></div>
        init = false
      }
      arr.push(
        <div className={style['block' + color]} key={i}>
          {player}
        </div>
      )
    }
    return arr
  }
  return (
    <div className={style.moveMain}>
      <div className={style.blockBox}>
        {renderBlocks()}
      </div>
    </div>



  )
}
export default Main
