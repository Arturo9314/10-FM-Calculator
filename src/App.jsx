import Keypad from "./components/Keypad"
import './styles/App.css'
import Display from "./components/Display"
import { useState } from "react"
import updateOutput from "./functions/functions"

function App() {  
  const [output, setOutput] = useState('')
  const [evaluated, setEvaluated] = useState(false)

  const handleOutput = (key)=>{
    const {outputValue, evaluatedValue} = updateOutput(output,key, evaluated)
    setOutput(outputValue.toLocaleString('en-US'))
    setEvaluated(evaluatedValue)
  }
  return (
    <main className='App calculator'>
      <Display display={output}/>
      <Keypad display={output} handleOutput={handleOutput}/>
    </main>
  )
}

export default App
