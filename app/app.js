import 'whatwg-fetch'
import './app.css'
import React from 'react'
import { render } from 'react-dom'
import Main from './page'

window.onload = function () {
  render(<Main />, document.getElementById('main'))
}
