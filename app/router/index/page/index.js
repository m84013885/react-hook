import style from './index.css'
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { ScrollView, Toast, Swiper, Mask } from './components'
import { useInterval, useFetch } from '../../../utils/userHook'
// import {Mask} from './components/mask'
// import ScrollView from './components/scroll'
// import Toast from './components/toast/index'
// import Swiper from './components/swiperItem'

const Main = () => {
  function setCookie(key, value, d) {
    if (d === undefined) {
      document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value);
    } else {
      document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value) + ";max-age=" + (d * 60 * 60 * 24);
    }
  }
  const [mask, setMask] = useState('')
  window.testFun = () => {
    console.log(5)
  }
  useEffect(() => {
    const test = async () => {
      const res = await useFetch({ url: 'http://172.20.0.104:8099/' })
      console.log(res)
    }
    test()
  }, [])
  // useInterval(() => {
  //   console.log(1)
  // }, 1000)
  return (
    <React.Fragment>
      <ScrollView>
        <div className={style.test} onClick={() => { setCookie('test', 1, 1) }}>
          <Swiper>
            <div>swiper1</div>
            <div>swiper2</div>
          </Swiper>
          <div className={style.banner}></div>
          <div className={style.test1}></div>
          <div className={style.container}>
            <div className={style.wave}></div>
          </div>
          {/* <iframe src="http://172.20.0.104:8078/index"></iframe> */}
          {/* <iframe src="https://jingyan.baidu.com/article/fea4511ab14efbb7bb912589.html"></iframe> */}
        </div>

        {/* <SwiperItem>
          <div>21</div>
          <div>11</div>
        </SwiperItem> */}
        {/* <div className={'none'}>123</div>
        <SwiperItem>
          <div>21</div>
          <div>11</div>
          <div>{swiperNum}</div>
        </SwiperItem>
        <div onClick={() => { setMask(1) }}>1</div>
        <div>2</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div> */}
      </ScrollView>
      <Mask mask={mask} setMask={setMask}>
        <div className={style.test}>1</div>
      </Mask>
      <Toast />
    </React.Fragment>

  )
}
export default Main
