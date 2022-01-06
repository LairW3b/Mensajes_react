import { useEffect } from 'react'
import styles from './ListaMensajes.css'
import Mensaje from './Mensaje'

const ListaMensajes = ({ mensajes, setMensaje }) => {

  useEffect(() => {
    if(mensajes > 0) {
      console.log('Nuevo mensaje');
    }
  },[mensajes])

  return (
    <div className="contenedor_mnsj">
      <h2 className="title_mnsj">
        Mensajes posteados
      </h2>
      <div className="cont_mnsj">
        {mensajes.map((mensaje) => (
          <Mensaje
            key={mensaje.id}
            mensaje={mensaje}
            setMensaje={setMensaje}
          />
        ))}
      </div>
    </div>
  )
}

export default ListaMensajes
