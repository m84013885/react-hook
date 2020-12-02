import 'whatwg-fetch'
import '../../utils/resize'
import React from 'react'
import { render } from 'react-dom'
import VConsole from 'vconsole'
const v = new VConsole()

const dpr = window.devicePixelRatio || 1
const docEl = document.documentElement
// detect 0.5px supports
if (dpr >= 2) {
    const fakeBody = document.createElement('body')
    const testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
}

import './index.css'
import Main from './page'

import './common/index.common.css'

window.onload = function () {
  render(<Main />, document.getElementById('main'))
}
