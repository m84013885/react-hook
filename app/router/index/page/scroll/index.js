
import React from 'react'
import { useState, useEffect, useRef } from "react"
import BScroll from "better-scroll"
import style from './index.css'

const ScrollView = ((props) => {
    const [bScroll, setBScroll] = useState()
    const scrollContaninerRef = useRef(null)

    useEffect(() => {
        if (bScroll) return
        const scroll = new BScroll(scrollContaninerRef.current, {
            scrollX: false,
            scrollY: true,
            bounce: {
                top: true,
                bottom: true
            }
        })
        scroll.on('scrollEnd', () => {
            //判断是否滑动到了底部
            if (scroll.y <= scroll.maxScrollY + 100) {
                console.log('底部')
            }
        })
        setBScroll(scroll)
        return () => {
            scroll.off('scroll')
            setBScroll(null)
        }
    }, [])
    return (
        <div className={style.scrollStyle} ref={scrollContaninerRef}>
            <div>
                {props.children}
            </div>
        </div>
    )
})

export default ScrollView
