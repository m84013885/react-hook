import React from 'react'
import 'whatwg-fetch'
import { render } from 'react-dom'

import './index.css'
import Main from './page'

import './common/index.common.css'
import './common/pace.min'
import './common/pace.common.css'
import './common/swiper.min'
import './common/swiper.common.css'

window.onload = function () {
  render(<Main />, document.getElementById('main'))
}
