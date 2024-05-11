import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Game from './component/Game'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Test /> */}
      <Game />
    </>
  )
}

export default App
