import style from './index.css'
import axios from 'axios'
import md5 from 'md5'
import React, { useState, useEffect,useMemo, useCallback } from 'react'
import ScrollView from './scroll'
import title from '../../../images/title.common.png'
import Toast from './toast'

const Main = () => {
  const [memoValue, setMemoValue] = useState(1)
  const onceDom = useMemo(() => {
    return <div>{memoValue}</div>
  }, [])
  const increment1 = useCallback(() => setMemoValue(c => c + 1), [])

  const onceDom1 = useCallback(() => {
    return 1
  }, [])
  // axios.post('https://huangqm.xyz/php/sig.php', {
  //   sig: md5('ming' + 'test' + 'www'),
  //   s: 'www',
  //   d: 'test'
  // })
  //   .then(function (res) {
  //     console.log(res)
  //   })
  //   .catch(function (error) {
  //     console.log(error)
  //   })
  return (
    <ScrollView>
      {onceDom}
      <div>{memoValue}</div>
      <div className={style.test} style={{ backgroundImage: `url(${title})` }} onClick={increment1}></div>
      <div className={style.test1} onClick={}></div>
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
      <Toast />
    </ScrollView>
  )
}
export default Main
