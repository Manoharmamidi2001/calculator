import { Input } from 'antd'
import React from 'react'

const inputStyle = {
    fontSize:'40px',
    borderTopRightRadius:'10px',
    borderTopLeftRadius:'10px',
    borderBottomRightRadius:'0px',
    borderBottomLeftRadius:'0px',
    borderTopRadius:'5px',
    textAlign:'end',
    caretColor: 'transparent', // hides blinking cursor
    pointerEvents: 'none',
    borderLeft:'5px solid',
    borderTop:'5px solid',
    fontWeight:'bold'
}

const InputPlace = ({inp, change}) => {
    
  return (
    <div>
        <Input value={inp} onChange={change} style={inputStyle} readOnly/>
    </div>
  )
}

export default InputPlace