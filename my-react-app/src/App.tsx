import { useState } from 'react'

function App() {
  const[color, SetColor]=useState<string>('');

  const ChangeEvent=(event:React.ChangeEvent<HTMLInputElement>)=>{
    SetColor(event.target.value)
  }

  return(
    <div 
    className='box'
    style={{backgroundColor:color||'white'}}>

    <input 
    type="text"
    value={color}
    onChange={ChangeEvent}
    placeholder='Enter a color'
    />

    </div>
  )
}

export default App
