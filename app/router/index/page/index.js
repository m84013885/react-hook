import style from './index.css'
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { ScrollView, Toast, Swiper, Mask, Img } from './components'
import { useInterval, useFetch } from '../../../utils/userHook'

let init = true

const Main = () => {
  return (
    <div className={style.moveMain}>
      <div className={style.blockBox}>
        <Img className={style.test}/>
      </div>
    </div>



  )
}
export default Main
