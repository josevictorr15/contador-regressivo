import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Counter from './components/Counter'
import Image from "./assets/comemorando-com-estrelinhas-a-noite.jpg"
import useCountdown from './hooks/useCountdown'

function App() {
  
  
  const [days, hours, minutes, seconds] = useCountdown("Jan 1, 2024 00:00:00")
  return (
    <>
    <div className="App" style={{backgroundImage: `url(${Image})`}}>
      <div className="container">
        <Title title="Contagem regressiva para 2024"/>
        <div className="countdown-container">
          <Counter title="Dias" number={days}/>
          <Counter title="Horas" number={hours}/>
          <Counter title="Minutos" number={minutes}/>
          <Counter title="Segundos" number={seconds}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
