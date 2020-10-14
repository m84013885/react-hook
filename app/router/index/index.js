import 'whatwg-fetch'
import '../../utils/resize'
import React from 'react'
import { render } from 'react-dom'
import VConsole from 'vconsole'
const v = new VConsole()

import './index.css'
import Main from './page'

import './common/index.common.css'

window.onload = function () {
  render(<Main />, document.getElementById('main'))
}
