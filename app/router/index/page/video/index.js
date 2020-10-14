import  React from "react"
import { useEffect, useState } from "react"

import Vap from 'video-animation-player'
// import demo from '../../index/assets/demo.mp4'
// import config from './demo.json'
const config = require('./vapc.json')
const demo = require('./482715dbbcc.mp4')
console.log(demo)

let dom = null


const Video = (prop) => {
    const { play } = prop
    useEffect(() => {
        if (dom && play) {
            new Vap({
                container: dom,
                // 素材视频链接
                src: demo.default,
                // 素材配置json对象
                config: config,
                width: 375,
                height: 667,
                // 同素材生成工具中配置的保持一致
                fps: 25
            })
                .on('playing', () => {
                    console.log('playing')
                })
                .on('ended', () => {
                    console.log('play ended')
                })
        }
    }, [play])
    return (
        <div ref={(c) => { dom = c }}></div>
    )
}

export default Video