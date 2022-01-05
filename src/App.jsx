import styles from './App.css'
import Formulario from './components/Formulario'
import Header from "./components/Header"
import ListaMensajes from './components/ListaMensajes'


function App() {
  return (
    <div className='contenedor'>
      <Header />
      <div className="contenido_app">
        <Formulario />
        <ListaMensajes />
      </div>
    </div>
  )
}

export default App
