import style from './index.css'
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import ScrollView from './components/scroll'
import Toast from './components/toast'
import SwiperItem from './components/swiper'
import Mask from './components/mask'
import SwiperTest from './components/swiperItem'

const Main = () => {
  const [mask, setMask] = useState('')
  return (
    <React.Fragment>
      <ScrollView>
        <SwiperTest changeIndex={(e) => { console.log(e) }}>
          <div>swiper1</div>
          <div>swiper2</div>
        </SwiperTest>
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
