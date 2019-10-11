import style from './index.css'
import axios from 'axios'
import md5 from 'md5'
import React from 'react'
import ScrollView from './scroll'

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
