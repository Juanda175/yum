import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Menu from './component/Menu'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      
      </header>
      
    </div>
    
  )
}

export default App
