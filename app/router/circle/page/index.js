import style from './index.css'

import React, { useState, useEffect, useReducer } from 'react'

import Circle from './circle'
const Main = () => {
  // useState的简单使用
  const [canvasDom, setCanvasDom] = useState(null)

  const [resetAngle, setResetAngle] = useState(0)
  const [rotateDom, setRotateDom] = useState(null)
  const [FLAG, setFLAG] = useState(false)

  useEffect(() => {
    if (canvasDom) {
      console.log(canvasDom)
      canvasDom.width = parseInt(getComputedStyle(canvasDom).width)
      canvasDom.height = parseInt(getComputedStyle(canvasDom).height)
      const context = canvasDom.getContext('2d')
      const centerWidth = canvasDom.width / 2
      // const rad = Math.PI * 2 / 360 // 将360度分成360份，那么每一份就是rad度
      // context.save()
      // context.strokeStyle = '#000000' // 设置描边样式
      // context.lineWidth = 1 // 设置线宽
      // context.beginPath() // 路径开始
      // // context.arc(centerWidth, centerWidth, centerWidth, -Math.PI / 2, -Math.PI / 2 + 180 * rad, false)
      // context.arc(0,0,centerWidth,30*Math.PI/180,60*Math.PI/180,false)
      // context.fill() // 绘制
      context.beginPath()
      //定义起点
      context.moveTo(centerWidth, centerWidth)
      //以起点为圆心，画一个半径为100的圆弧
      context.arc(centerWidth, centerWidth, centerWidth, 30 * Math.PI / 180, 90 * Math.PI / 180)
      context.closePath()
      context.stroke()
    }
  }, [canvasDom])
  const canvasDOM = (dom) => {
    setCanvasDom(dom)
  }
  const rotateDOM = (dom) => {
    setRotateDom(dom)
  }
  useEffect(() => {
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
  }, [])
  useEffect(() => {
    if (rotateDom && FLAG) {
      console.log('start')
      rotate(parseInt(Math.random() * 100) + 1)
    }
  }, [rotateDom, FLAG])
  const rotate = (deg) => {
    const rotateNum = parseInt(Math.random() * 5 + 3, 10)
    const returnDeg = rotateNum * 360 + deg
    let angle = resetAngle
    let speed = 1
    function step() {
      angle += speed
      rotateDom.style.webkitTransform = 'rotateZ(' + angle + 'deg)'
      rotateDom.style.transform = 'rotateZ(' + angle + 'deg)'
      if (angle <= returnDeg / 2 || speed < 0.1) {
        speed += 0.02
      } else {
        speed -= 0.02
      }
      if (angle >= returnDeg) {
        setFLAG(false)
        setResetAngle(returnDeg % 360)
        return
      }
      requestAnimationFrame(step)
    }
    step()
  }
  return (
    <React.Fragment>
      <canvas className={style.circle} ref={canvasDOM}></canvas>
      <div className={style.rotate} ref={rotateDOM}></div>
      <button onClick={() => { setFLAG(true) }}>START</button>
      <div className={style.test}>
        <Circle current={0.1}
          linecap="round"
          startPoint={180}
          showText={false}
          gradientDirection={"horizontal"}
          gradient={
            [
              { offset: 0, color: "rgb(252,193,122)", opacity: 1 },
              { offset: 50, color: "rgb(234,137,104)", opacity: 1 },
            ]
          } />
      </div>

    </React.Fragment>
  )
}

export default Main
