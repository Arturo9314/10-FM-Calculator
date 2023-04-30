import React, { useEffect, useState } from 'react'
import { ReactComponent as Circle } from '../images/circle-solid.svg'
import colortheme from '../styles/colors'

export default function Display({display}) {
  
  let configColors = '';
  if(localStorage.getItem('optionTheme') === null){
    configColors = 'two';
  }else{
    configColors = localStorage.getItem('optionTheme');
  }
  const [optionTheme, setOptionTheme]= useState(configColors)

  useEffect(()=>{
    localStorage.setItem('optionTheme', optionTheme.toString());
    setThemeColors(optionTheme)
  },[optionTheme])

  const setThemeColors = (optionTheme)=>{
    const root = document.documentElement;
    const colorEquals = document.getElementById('equals')
    const colorTitle = document.querySelector('h1')
    const colorOutput = document.querySelector('h2')
    const colorTxt = document.querySelector('h3')
    const colorTxtLabels = document.querySelectorAll('h4')
    switch (optionTheme) {
      case 'one':
        root.style.setProperty('--main-bgcolor', colortheme['one'].mainbgcolor)
        root.style.setProperty('--toggle-keypad-bgcolor', colortheme['one'].togglekeypadbgcolor)
        root.style.setProperty('--screen-bgcolor', colortheme['one'].screenbgcolor)
        root.style.setProperty('--key-cls-bgcolor', colortheme['one'].keyclsbgcolor)
        root.style.setProperty('--key-cls-shadow', colortheme['one'].keyclsshadow)
        root.style.setProperty('--key-toogle-bgcolor', colortheme['one'].keytooglebgcolor)
        root.style.setProperty('--key-toogle-shadow', colortheme['one'].keytoogleshadow)
        root.style.setProperty('--key-bgcolor', colortheme['one'].keybgcolor)
        root.style.setProperty('--key-shadow', colortheme['one'].keyshadow)
        root.style.setProperty('--text-1', colortheme['one'].text1)
        root.style.setProperty('--text-2', colortheme['one'].text2)
        colorEquals.style.color = colortheme['one'].text2
        colorTitle.style.color = colorOutput.style.color = colorTxt.style.color =  colortheme['one'].text2
        colorTxtLabels.forEach(label => {
          label.style.color = colortheme['one'].text2
        });
        break;
      case 'two':
        root.style.setProperty('--main-bgcolor', colortheme['two'].mainbgcolor)
        root.style.setProperty('--toggle-keypad-bgcolor', colortheme['two'].togglekeypadbgcolor)
        root.style.setProperty('--screen-bgcolor', colortheme['two'].screenbgcolor)
        root.style.setProperty('--key-cls-bgcolor', colortheme['two'].keyclsbgcolor)
        root.style.setProperty('--key-cls-shadow', colortheme['two'].keyclsshadow)
        root.style.setProperty('--key-toogle-bgcolor', colortheme['two'].keytooglebgcolor)
        root.style.setProperty('--key-toogle-shadow', colortheme['two'].keytoogleshadow)
        root.style.setProperty('--key-bgcolor', colortheme['two'].keybgcolor)
        root.style.setProperty('--key-shadow', colortheme['two'].keyshadow)
        root.style.setProperty('--text-1', colortheme['two'].text1)
        root.style.setProperty('--text-2', colortheme['two'].text2)
        colorEquals.style.color = colortheme['two'].text2
        colorTitle.style.color = colorOutput.style.color = colorTxt.style.color =  colortheme['two'].text1
        colorTxtLabels.forEach(label => {
          label.style.color = colortheme['two'].text1
        });
        break;
      case 'three':
        root.style.setProperty('--main-bgcolor', colortheme['three'].mainbgcolor)
        root.style.setProperty('--toggle-keypad-bgcolor', colortheme['three'].togglekeypadbgcolor)
        root.style.setProperty('--screen-bgcolor', colortheme['three'].screenbgcolor)
        root.style.setProperty('--key-cls-bgcolor', colortheme['three'].keyclsbgcolor)
        root.style.setProperty('--key-cls-shadow', colortheme['three'].keyclsshadow)
        root.style.setProperty('--key-toogle-bgcolor', colortheme['three'].keytooglebgcolor)
        root.style.setProperty('--key-toogle-shadow', colortheme['three'].keytoogleshadow)
        root.style.setProperty('--key-bgcolor', colortheme['three'].keybgcolor)
        root.style.setProperty('--key-shadow', colortheme['three'].keyshadow)
        root.style.setProperty('--text-1', colortheme['three'].text1)
        root.style.setProperty('--text-2', colortheme['three'].text2)
        colorEquals.style.color = colortheme['three'].mainbgcolor
        colorTitle.style.color = colorOutput.style.color = colorTxt.style.color =  colortheme['three'].text1
        colorTxtLabels.forEach(label => {
          label.style.color = colortheme['three'].text1
        });
        break;
      default:
        break;
    }
  }

  const handleChange = (event)=>{
    setOptionTheme(event.target.value)
    setThemeColors(optionTheme)
  }

  return (
    <header>
        <div id='theme-section'>
          <h1 id='title-calc'>calc</h1>
          <div id='rating-container'>
            <h3 className='rating-text'>THEME</h3>
            <div className='rating'>
              <form className='rating-form'>
                <label htmlFor='one'>
                  <h4>1</h4>
                  <input style={{'--main-bgcolor' : colortheme[optionTheme].mainbgcolor}} checked={optionTheme==='one'} onChange={handleChange} type='radio' name='rating' className='one' id='one' value='one'/>
                  <Circle/>
                </label>
                <label htmlFor='two'>
                  <h4>2</h4>
                  <input style={{'--main-bgcolor' : colortheme[optionTheme].mainbgcolor}} checked={optionTheme==='two'} onChange={handleChange} type='radio' name='rating' className='two' id='two' value='two' />
                  <Circle/>
                </label>
                <label htmlFor='three'>
                  <h4>3</h4>
                  <input style={{'--main-bgcolor' : colortheme[optionTheme].mainbgcolor}} checked={optionTheme==='three'} onChange={handleChange} type='radio' name='rating' className='three' id='three' value='three'/>
                  <Circle/>
                </label>
              </form>
            </div>
          </div>
        </div>
        <h2 className='outputScreen' id='display'>{display?display:0}</h2>
    </header>
  )
}