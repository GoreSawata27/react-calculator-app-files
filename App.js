import React, { useState } from 'react'
import './App.css';

export default function App() {
  const [Result, setResult] = useState('')

  const handelClick = (e) => {
    setResult(Result.concat(e.target.name))
  }
  const clear = () => {
    setResult('')
  }

  const Answer = () => {
    try {
      setResult(eval(Result).toString())
    } catch (error) {
      setResult('Error')
    }
  }

  const backSpace = () => {
    setResult(Result.slice(0, -1))
  }

  return (
    <div className="container">
      <div className='home'>
        <div className="display">
          <input type="text" value={Result} onChange={(e) => { setResult(e.target.value) }} />
        </div>
        <div className="btn">
          <button onClick={clear}  >AC</button>
          <button onClick={handelClick} name='/'>/</button>
          <button onClick={backSpace} > Back</button>
          <button onClick={Answer} name='='>=</button>
          <button onClick={handelClick} name='9'>9</button>
          <button onClick={handelClick} name='8'>8</button>
          <button onClick={handelClick} name='7'>7</button>
          <button onClick={handelClick} name='-'>-</button>
          <button onClick={handelClick} name='6' >6</button>
          <button onClick={handelClick} name='5'>5</button>
          <button onClick={handelClick} name='4'>4</button>
          <button onClick={handelClick} name='+'>+</button>
          <button onClick={handelClick} name='3'>3</button>
          <button onClick={handelClick} name='2' >2</button>
          <button onClick={handelClick} name='1'>1</button>
          <button onClick={handelClick} name='0'>0</button>
        </div>
      </div>

    </div>
  )
}
