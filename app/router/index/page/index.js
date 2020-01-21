import style from './index.css'
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { ScrollView, Toast, Swiper, Mask } from './components'
import { useInterval, useFetch } from '../../../utils/userHook'

const Main = () => {
  const [mask, setMask] = useState('')
  return (
    <React.Fragment>
      {/* <ScrollView>
        <div className={style.asd2}></div>
        <div className={style.asd}></div>
        <Swiper>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </Swiper>
      </ScrollView> */}
      <div className={style.c}>
        <div className={style.a1}></div>
        <div className={style.a2}></div>
        <div className={style.a3}></div>
      </div>
      <Mask mask={mask} setMask={setMask}>
        <div className={style.test}>1</div>
      </Mask>
      <Toast />
    </React.Fragment>

  )
}
export default Main
