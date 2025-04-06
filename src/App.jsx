import React, { useState } from 'react'
import InputPlace from './Components/InputPlace'
import { Card } from 'antd'
import Buttons from './Components/Buttons'

const App = () => {
    const [input, setInput] = useState('')

    const handleChange=(e)=>{
        setInput(e.target.value)
    }

    const handleClick = (value) => {
        if (value === 'C') {
          setInput('')
        } else if (value === '=') {
          try {
            setInput(eval(input).toString())
          } catch (error) {
            setInput('Error')
          }
        } else if (value === '⌫') {
          setInput(prev => prev.slice(0, -1))
        } else {
          setInput(prev => prev + value)
        }
      }

    return (
    <>
        <div className='d-flex justify-content-center' style={{marginTop:'100px'}}>
            <Card style={{width:'400px'}}>
                <InputPlace inp={input} change={handleChange}/>
                <Buttons click={handleClick}/>
            </Card>
        </div>
    </>
    )
}

export default App
