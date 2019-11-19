import React, { useEffect } from 'react'

const SwiperItem = (state) => {
    useEffect(() => {
        new window.Swiper('.swiper-content', {
            loop: true,
            observeParents: true,
            observer: true,
            autoplay: {
                delay: 99999,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            }
        })
    }, [])
    const renderChildren = () => {
        const swiperDom = state.children.map((c, i) => {
            return (
                <div className="swiper-slide" key={i}>
                    {c}
                </div>
            )
        })
        return swiperDom
    }
    return (
        <div className="swiper-container swiper-content" style={{ height: '100%' }} >
            <div className="swiper-wrapper">
                {renderChildren()}
            </div>
        </div>
    )
}
export default SwiperItem