import React from 'react'

export default function Buttons({id, value, onKeyClick}) {

  const handleClick = ()=>{
    onKeyClick(value)
  }

  return (
  <button className='calculator-button'
          id={id}
          onClick={handleClick}
      >{value}</button>
  )
}
