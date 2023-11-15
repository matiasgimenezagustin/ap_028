import React from 'react'
import { Header, ListaDeArchivos } from './components'

import './App.css'

function App() {
  const alertar = (nombre) => alert('hola ' + nombre)
  const sensor = () => console.log('has pasado por encima')

  const archivos = [
    {
      tipo: 'archivo',
      extension: 'txt',
      nombre: 'hola',
      peso: '3kb',
      creadoEn: '2023/02/03',
      id: 0
    },
    {
      tipo: 'archivo',
      extension: 'html',
      nombre: 'index',
      peso: '95kb',
      creadoEn: '2023/03/03',
      id: 1
    },
  ]
  return (
    <div>
      <button onClick={() => alertar('maria')}>dame click</button>
      <h2 onMouseOver={sensor}>Sensor</h2>
      <button onClick={() => alertar('pedro')}>dame click</button>
      <ListaDeArchivos titulo={'archivos'} archivos={archivos}/>
      {/* <ListaDeArchivos titulo={'carpetas'}/> */}
    </div>
  )
}

export default App
