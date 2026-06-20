import React from 'react'
import { createPortal } from 'react-dom'

interface iModaL {
  children: React.ReactNode
}
const Modal = (props: iModaL) => {
  return createPortal(
    <div className="fixed w-1/2 h-1/2 top-10 left-1/2 -translate-x-1/2 flex items-center justify-center bg-red-300">
      {props.children}
    </div>,
    document.body
  )
}

export default Modal;


