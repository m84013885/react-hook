import style from './index.css'
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { ScrollView, Toast, Swiper, Mask, Img } from './components'
import { useInterval, useFetch } from '../../../utils/userHook'
console.log(style)

const Main = () => {
  const [mask, setMask] = useState('')
  const [maskAnima, setMaskAnima] = useState(true)
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

  return (
    <div className={style.moveMain}>
      <div className={style.blockBox} onClick={() => { setMask(0) }}>
        <Mask mask={mask} setMask={setMask}>
          <div className={style.box}>
            <div className={style.button} onClick={() => { setOutShow(false) }}></div>
          </div>
        </Mask>
        <Toast />
      </div>
    </div>



  )
}
export default Main
