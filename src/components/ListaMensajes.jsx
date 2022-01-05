import styles from './ListaMensajes.css'
import Mensaje from './Mensaje'

const ListaMensajes = () => {
  return (
    <div className="contenedor_mnsj">
      <h2
        className="title_mnsj"
      >
        Mensajes posteados
      </h2>

      <Mensaje />

    </div>
  )
}

export default ListaMensajes
