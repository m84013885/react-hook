import React from 'react'
import './index.css'
import { render } from 'react-dom'
import Main from './page'

window.onload = function () {
  render(<Main />, document.getElementById('main'))
}
