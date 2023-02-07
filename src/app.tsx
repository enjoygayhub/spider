import React, { useState } from 'react'
import "@/app.scss"
import JPG from "./assets/dove.jpg"

function App() {
  
  const [ count,  setCount] = useState('');
  const onChange = (e:any)=>{
    setCount(e.target.value)
  }
  
  return (
    <>
      <h2>webpack5-react-ts?</h2>
      <div className='cow-box'></div>
      <img src={JPG} alt="a jpg" />
      <p>受控组件1</p>
      <input type="text" value={count} onChange={onChange} />
      <br />
      <p>非受控组件2</p>
      <input type="text" />
    </>
  )
}
export default App

