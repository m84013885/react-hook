import React, { useState, useEffect } from 'react'

const Img = ({ className }) => {
    const [dom, setDom] = useState(null)
    const [imgStyle, setImgStyle] = useState({ height: '1rem' })
    const setImg = (callback, bg) => {
        const img = new Image()
        img.src = bg
        if (img.complete) {
            callback(img.width, img.height)
        }
        else {
            img.onload = function () {
                callback(img.width, img.height)
                img.onload = null
            }
        }
    }
    const getDOM = (dom) => {
        if (dom) {
            setDom(dom)
        }
    }
    useEffect(() => {
        if (dom && getComputedStyle(dom).backgroundImage) {
            const bg = getComputedStyle(dom).backgroundImage.slice(5, -2)
            setImg((w, h) => {
                setImgStyle({
                    width: w / 3 / rem + 'rem',
                    height: h / 3 / rem + 'rem',
                    backgroundSize: '100% 100%'
                })
            }, bg)
        }

    }, [dom])
    return (
        <div className={className} ref={getDOM} style={imgStyle}></div>
    )
}

export default Img