import style from './index.css'
import axios from 'axios'
import md5 from 'md5'
import React from 'react'
import ScrollView from './scroll'
import title from '../../../images/title.common.png'

const Main = () => {
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
      <div className={style.test} style={{backgroundImage:`url(${title})`}}></div>
      <div className={style.test1}></div>
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
  )
}
export default Main
