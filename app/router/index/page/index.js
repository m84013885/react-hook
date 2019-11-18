import style from './index.css'
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import ScrollView from './components/scroll'
import Toast from './components/toast'
import SwiperItem from './components/swiper'

const Main = () => {
  return (
    <React.Fragment>
      <ScrollView>
        <div className={'none'}>123</div>
        <SwiperItem>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </SwiperItem>
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
      <Toast />
    </React.Fragment>

  )
}
export default Main
