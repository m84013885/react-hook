import style from './index.css'
import React, { useState, useEffect, useRef } from 'react'

let timer = null

const SwiperTest = ({ children, width = window.outerWidth, autoplay, loop = true }) => {
    const childrenLength = loop ? children.length + 2 : children.length
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    const [touchMove, setTouchMove] = useState(null)
    const [touch, setTouch] = useState(0)
    const [animaOpen, setAnimaOpen] = useState(false)
    const [position, setPosition] = useState(loop ? -width : 0)
    const [index, setIndex] = useState(loop ? 1 : 0)
    const autoMove = () => {
        if (childrenLength - 1 !== index) {
            setIndex(index + 1)
            setPosition(position - width)
            setAnimaOpen(true)
            setTouch(0)
            setTimeout(() => {
                setAnimaOpen(false)
            }, 200)
        } else if (index !== 0) {
            setIndex(index - 1)
            setPosition(position + width)
            setAnimaOpen(true)
            setTouch(0)
            setTimeout(() => {
                setAnimaOpen(false)
            }, 200)
        }
    }
    const move = () => {
        if (touch < 0 && childrenLength - 1 !== index) {
            setIndex(index + 1)
            setPosition(position - width)
            setAnimaOpen(true)
            setTouch(0)
            setTimeout(() => {
                setAnimaOpen(false)
            }, 200)
        } else if (touch > 0 && index !== 0) {
            setIndex(index - 1)
            setPosition(position + width)
            setAnimaOpen(true)
            setTouch(0)
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
        setAutoplayTime(setAutoplayTime >= autoplay ? autoplayTime + 1 : autoplayTime - 1)
        if (Math.abs(touch) > 10) {
            if ((touch < 0 && childrenLength - 1 !== index) || (touch > 0 && index !== 0)) {
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
    // console.log(autoplay)
    const [autoplayTime, setAutoplayTime] = useState(autoplay || 86400000)
    useInterval(() => {
        autoMove()
    }, autoplayTime)
    useEffect(() => {
        if (loop) {
            if (index === 0) {
                setTimeout(() => {
                    setIndex(children.length)
                    setPosition(-(width * children.length))
                }, 200)
            } else if (index === children.length + 1) {
                setTimeout(() => {
                    setIndex(1)
                    setPosition(-width)
                }, 200)
            }
        }
    }, [index])
    const _render = (children) => {
        const childrens = children.map((c, i) => {
            return (
                <div style={{ width: width + 'px' }} key={i}>
                    {c}
                </div>
            )
        })
        if (loop) {
            childrens.push(
                <div style={{ width: width + 'px' }} key={-1}>
                    {children[0]}
                </div>
            )
            childrens.unshift(
                <div style={{ width: width + 'px' }} key={-2}>
                    {children[children.length - 1]}
                </div>
            )
        }
        return childrens
    }
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
                        { width: (childrenLength || 1) * width + 'px' })
                }
            >
                {_render(children)}
            </div>
        </div >

    )
}
export default SwiperTest