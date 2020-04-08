import style from './index.css'
import React, { useState, useEffect } from 'react'
const Mask = (state) => {
  const { mask, setMask, children, maskAnima = null, setMaskAnima = null } = state
  const renderContent = () => {
    if (children.length) {
      return (
        <div className={`${show ? style.big : style.small}`}>
          <div className={style.child}>
            {children[mask]}
          </div>
        </div>
      )
    } else {
      return (
        <div className={`${show ? style.big : style.small}`}>
          <div className={style.child}>
            {children}
          </div>
        </div>
      )
    }
  }
  const [show, setShow] = useState(true)
  useEffect(() => {
    if (maskAnima !== null) {
      setShow(maskAnima)
    }
  }, [maskAnima])
  const closeAnima = (e) => {
    if (e.animationName.indexOf('hide') !== -1) {
      setMask('')
      setShow(true)
      setMaskAnima && setMaskAnima(true)
    }
  }
  return (
    <div className={mask !== '' ? style.modal : style.none}>
      <div className={`${style.bg} ${show ? style.show : style.hide}`} onClick={() => { setShow(false) }} onAnimationEnd={(e) => { closeAnima(e) }}></div>
      {renderContent()}
    </div>
  )
}
export default Mask
