import { useState } from 'react'
import styles from './App.css'
import Formulario from './components/Formulario'
import Header from "./components/Header"
import ListaMensajes from './components/ListaMensajes'


function App() {

  const [mensajes, setMensajes] = useState([])

  const [mensaje, setMensaje] = useState({})

  return (
    <div className='contenedor'>
      <Header />
      <div className="contenido_app">
        <Formulario
          mensajes={mensajes}
          setMensajes={setMensajes}
          mensaje={mensaje}
          setMensaje={setMensaje}
        />
        <ListaMensajes 
          mensajes={mensajes}
          setMensaje={setMensaje}
        />
      </div>
    </div>
  )
}

export default App
