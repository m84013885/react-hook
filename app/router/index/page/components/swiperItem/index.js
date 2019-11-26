import style from './index.css'
import React, { useState, useEffect, useRef } from 'react'

let timer = null
let times = 3000

const SwiperTest = ({ children, width = window.outerWidth, autoplay }) => {
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    const [touchMove, setTouchMove] = useState(null)
    const [touch, setTouch] = useState(0)
    const [animaOpen, setAnimaOpen] = useState(false)
    const [position, setPosition] = useState(0)
    const [index, setIndex] = useState(0)
    const move = () => {
        if (children.length - 1 !== index) {
            setIndex(index + 1)
            setAnimaOpen(true)
            setTouch(0)
            setPosition(position - width)
            setTimeout(() => {
                setAnimaOpen(false)
            }, 200)
        } else if (index !== 0) {
            setIndex(index - 1)
            setAnimaOpen(true)
            setTouch(0)
            setPosition(position + width)
            setTimeout(() => {
                setAnimaOpen(false)
            }, 200)
        }
    }
    const bindleTouchMove = (e) => {
        setTouchMove(e.targetTouches[0].pageX)
        setTouch(touchMove - touchStart)
    }
    const bindleTouchStart = (e) => {
        clearInterval(timer)
        setTouchStart(e.targetTouches[0].pageX)
        setTouchMove(e.targetTouches[0].pageX)
    }
    const bindleTouchEnd = (e) => {
        setAutoplayTime(autoplayTime + 1)
        if (Math.abs(touch) > 50) {
            if (touch < 0 && children.length - 1 !== index) {
                move()
                return
            } else if (touch > 0 && index !== 0) {
                move()
                return
            }
        }
        setAnimaOpen(true)
        setTouch(0)
        setTimeout(() => {
            setAnimaOpen(false)
        }, 200)
    }
    const has3d = () => {
        if (!window.getComputedStyle) {
            return false
        }
        var el = document.createElement('p'),
            has3d,
            transforms = {
                'webkitTransform': '-webkit-transform',
                'OTransform': '-o-transform',
                'msTransform': '-ms-transform',
                'MozTransform': '-moz-transform',
                'transform': 'transform'
            }
        document.body.insertBefore(el, null)

        for (var t in transforms) {
            if (el.style[t] !== undefined) {
                el.style[t] = "translate3d(1px,1px,1px)"
                has3d = window.getComputedStyle(el).getPropertyValue(transforms[t])
            }
        }

        document.body.removeChild(el)

        return (has3d !== undefined && has3d.length > 0 && has3d !== "none")
    }
    const transfromMove = () => {
        if (has3d) {
            return {
                transform: `translate3d(${position + touch}px, 0px, 0px)`,
                WebkitTransform: `translate3d(${position + touch}px, 0px, 0px)`
            }
        } else {
            return {
                let: `${position + touch}px`
            }
        }
    }
    const transitionAnima = () => {
        if (animaOpen) {
            return {
                WebkitTransition: `all .2s linear`,
                OTransition: `all .2s linear`,
                transition: `all .2s linear`
            }
        }
    }
    const useInterval = (callback, delay) => {
        const savedCallback = useRef()
        // 保存新回调
        useEffect(() => {
            savedCallback.current = callback
        })
        // 建立 interval
        useEffect(() => {
            function tick() {
                savedCallback.current()
            }
            if (delay !== null) {
                timer = setInterval(tick, delay)
                return () => clearInterval(timer)
            }
        }, [delay])
    }
    const [autoplayTime, setAutoplayTime] = useState(autoplay)
    useInterval(() => {
        move()
    }, autoplayTime)
    useEffect(() => {

    }, [index])
    return (
        <div className={style.swiperContainer} style={{ width: width + 'px' }}
            onTouchMove={bindleTouchMove}
            onTouchStart={bindleTouchStart}
            onTouchEnd={bindleTouchEnd}
        >
            <div className={style.swiperContent}
                style={
                    Object.assign(
                        transfromMove(),
                        transitionAnima(),
                        { width: (children.length || 1) * width + 'px' })
                }
            >
                {children.map((c, i) => {
                    return (
                        <div style={{ width: width + 'px' }} key={i}>
                            {c}
                        </div>
                    )
                })}
            </div>
        </div >

    )
}
export default SwiperTest