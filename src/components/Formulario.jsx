import styles from './Formulario.css'
import { useState, useEffect } from 'react';
import Error from './Error';


const Formulario = ({mensajes, setMensajes, mensaje, setMensaje}) => {

  const [nickname, setNickname] = useState('')
  const [titulo, setTitulo] = useState('')
  const [fecha, setFecha] = useState('')
  const [mnsj, setMnsj] = useState('')
  const [error, setError] = useState(false)
  //Incluye cita o si es del creador

  useEffect(() => {
    if(Object.keys((mensaje).length > 0)) {
      setNickname(mensaje.nickname)
      setTitulo(mensaje.titulo)
      setFecha(mensaje.fecha)
      setMnsj(mensaje.mnsj)
    }
  },[mensaje])

  /** FUNCIONES */
  const idGen = () => {
    const random = Math.random().toString(36).substring(2)
    return random
  }


  const handelSubmit = (e) => {
    e.preventDefault()

    
    //Pequeña validación
    if([nickname, titulo, fecha, mnsj].includes('')){
      setError(true)
    }else{
      setError(false)
    }
    
    //Objeto Paciete
    const objMensaje = {
      nickname,
      titulo,
      fecha,
      mnsj
    }
    
    //EDITAR MENSAJE
    if(mensaje.id){
      objMensaje.id = mensaje.id
      console.log(objMensaje);
      
      const mnsjActualizado = mensajes.map(m => m.id === mensaje.id ? objMensaje : m )
      setMensajes(mnsjActualizado)
      setMensaje({})
    }else {
      objMensaje.id = idGen()
      setMensajes([...mensajes, objMensaje])
    }

     
     //Limpiar formulario
     setNickname('')
     setTitulo('')
     setFecha('')
     setMnsj('')
  }

  return (
    <div className="content_form">

      <h2 className='titulos'>Rellena el formulario</h2>
        
      {error && <Error mnsjError='Todos los campos son obligatorios'/>  }
      
      <form onSubmit={handelSubmit}>

        <div className='div_form'>
          <label
            htmlFor="nickname"
            className='label'
          >
            Nickname:
          </label>
          <input
            id='nickname'
            type="text"
            placeholder='Introduce tu Nickname'
            className='inputs inputs_txt'
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        
        <div className='div_form'>
          <label
            htmlFor="mnsj"
            className='label'
          >
            Titulo del mensaje
          </label>
          <input
            id='mnsj'
            type="text"
            placeholder='Introduce el titulo'
            className='inputs inputs_txt'
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        {/* <div className='div_form'>
          <label 
            htmlFor="email"
            className='label'
          >
            Email:
          </label>
          <input
            id='email'
            type="email"
            placeholder='Introduce tu email'
            className='inputs inputs_txt'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div> */}

        <div className="div_form">
          <label 
            htmlFor="fecha"
          >
            Fecha
          </label>
          <input 
            id='fecha'
            type="date" 
            className="inputs inputs_txt" 
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className='div_form'>
          <label 
            htmlFor="mnsj"
            className='label'
          >
            Mensaje:
          </label>
          <textarea
            name="mnsj"
            id="mnsj"
            cols="30"
            rows="10"
            className='inputs'
            value={mnsj}
            onChange={(e) => setMnsj(e.target.value)}
          >
          </textarea>
        </div>
        <input 
          type="submit" 
          className='btn_submit'
          value="Postear" 
        />
      </form>

    </div>
  )
}

export default Formulario
