import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './get'
import seperate from './seperate' 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      < get />
      < seperate />
    </>
  )
}

export default App
