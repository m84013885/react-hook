import { useEffect, useRef } from 'react'

// 定时器
export const useInterval = (callback, delay) => {
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
            setInterval(tick, delay)
            return () => clearInterval()
        }
    }, [delay])
}

