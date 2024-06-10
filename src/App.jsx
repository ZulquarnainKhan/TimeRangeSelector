import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimeRangeSelector from './components/TimeRangeSelector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TimeRangeSelector/>
    </>
  )
}

export default App
