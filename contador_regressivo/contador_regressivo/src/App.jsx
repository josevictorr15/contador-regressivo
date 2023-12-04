import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Counter from './components/Counter'
import Image from "./assets/comemorando-com-estrelinhas-a-noite.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App" style={{backgroundImage: `url(${Image})`}}>
      <div className="container">
        <Title title="Contagem regressiva para 2024"/>
        <div className="countdown-container">
          <Counter title="Dias" number={2}/>
          <Counter title="Horas" number={2}/>
          <Counter title="Minutos" number={2}/>
          <Counter title="Segundos" number={2}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
