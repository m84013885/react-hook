import style from './index.css'

import React from 'react'
import { useAnimate, useAnimateKeyframes, useAnimateGroup } from 'react-simple-animate'

let play = true

const Main = () => {
  const animate = useAnimate({
    complete: { display: 'none' },  //动画完成的css
    easeType: "linear", //动画的表现
    duration: 5,  //动画时长
    start: { opacity: 0 },  //动画开始
    end: { opacity: 1 },  //动画结束
    onComplete: () => { //动画结束的方法
      console.log('complete')
    }
  })
  console.log(animate)
  const animateFrames = useAnimateKeyframes({
    iterationCount: 'infinite', //动画循环方式
    direction: 'alternate', //动画方向
    duration: 5,  //时长
    keyframes: [
      'transform: rotateX(0) rotateY(0) rotateZ(0)',
      'transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)',
    ]
  })
  console.log(animateFrames)
  const items = ['R', 'E', 'A', 'C', 'T'];
  const animateGroup = useAnimateGroup({
    sequences: items.map(() => ({
      start: { opacity: 1, transform: 'translateY(0)' },
      end: { opacity: 0, transform: 'translateY(-10px)' }
    }))
  })
  console.log(animateGroup)
  return (
    <React.Fragment>
      <div style={animate.style}>123</div>
      {/* <div style={animateFrames.style}>123</div> */}
      {/* {items.map((item, index) => <div key={item} style={animateGroup.styles[index]}>{item}</div>)} */}
      <div onClick={()=>{
        animate.play(true)
        // if(play){
        //   animateFrames.play(false)
        //   play = false
        // }else{
        //   animateFrames.play(true)
        //   play = true
        // }
        // animateGroup.play(true)
      }}>按钮</div>
    </React.Fragment>
  )
}

export default Main
