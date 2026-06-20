import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MiComponente from './MiComponente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section id="center">
      <h1>Ideas de planes de fin de semana</h1>

      <MiComponente
      titulo="Un atol chuco en el centro"
      lugar="San Salvador"
      />
      <MiComponente
      titulo="Viernes de amigos"
      lugar="San Miguel"
      />
      <MiComponente
      titulo="Explorando el pasado"
      lugar="Santa Ana"
      />
    </section>
    </>
  )
}

export default App
