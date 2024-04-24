import React from 'react'
import './Input.css'

export default function Input({className, type, placeholder, onChange, id}) {
  return (
    <input className={className} type={type} placeholder={placeholder} onChange={onChange} id={id}/>
  )
}