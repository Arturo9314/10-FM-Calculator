import React from 'react'
import calculatorKeys from '../elements/keys'
import Buttons from './Buttons'


export default function Keypad({handleOutput}) {
  return (
    <section className='buttons'>
        {
            Object.keys(calculatorKeys).map((key)=>
            <Buttons onKeyClick={handleOutput} key={key} id={key} value={calculatorKeys[key]}/>
            )
        }
      </section>
  )
}
