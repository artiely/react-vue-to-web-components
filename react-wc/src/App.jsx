import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './Hello.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <web-greeting name={'nihao'}/>
    </div>
  )
}

export default App
