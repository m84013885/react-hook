import style from './index.css'
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import ScrollView from './components/scroll'
import Toast from './components/toast'
import SwiperItem from './components/swiper'
import Mask from './components/mask'

const Main = () => {
  const [mask, setMask] = useState('')
  return (
    <React.Fragment>
      <ScrollView>
        <div className={'none'}>123</div>
        <SwiperItem>
          <div>1</div>
          <div>2</div>
          <div>3</div>
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
        <div>3</div>
      </ScrollView>
      <Mask mask={mask} setMask={setMask}>
        <div className={style.test}>1</div>
      </Mask>
      <Toast />
    </React.Fragment>

  )
}
export default Main
