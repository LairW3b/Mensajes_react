import styles from './Mensaje.css'

const Mensaje = ({ mensaje, setMensaje}) => {

  const { nickname, titulo, fecha, mnsj } = mensaje 

  return (
    <div className="mnsj">
      <div className="ususario">
        {/* img */}
        <h3 className="nickname">{nickname}</h3>
      </div>
      <h4 className="titulo_mnsj">{titulo}</h4>
      <p> </p>
      <p className="parrafo"> {mnsj} </p>
      <p className='fecha'> {fecha } </p>
      <button
        type='button'
        className='btn btn_editar'
        onClick={() => setMensaje(mensaje)}
      >
        Editar
      </button>
    </div>
  )
}

export default Mensaje
