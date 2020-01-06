import style from './index.css'
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { ScrollView, Toast, Swiper, Mask } from './components'
import { useInterval, useFetch } from '../../../utils/userHook'

const Main = () => {
  const [mask, setMask] = useState('')
  return (
    <React.Fragment>
      <ScrollView>
        <div className={style.asd2}></div>
        <div className={style.asd}></div>
      </ScrollView>
      <Mask mask={mask} setMask={setMask}>
        <div className={style.test}>1</div>
      </Mask>
      <Toast />
    </React.Fragment>

  )
}
export default Main
