import styles from './Formulario.css'

const Formulario = () => {
  return (
    <div className="content_form">

      <h2 className='titulos'>Rellena el formulario</h2>

      <form className='form'>
        <div className='div_form'>
          <label
            htmlFor="nickName"
            className='label'
          >
            Nickname:
          </label>
          <input
            id='nickName'
            type="text"
            placeholder='Introduce tu Nickname'
            className='inputs inputs_txt'
          />
        </div>
        
        <div className='div_form'>
          <label
            htmlFor="nickName"
            className='label'
          >
            Titulo del mensaje
          </label>
          <input
            id='mnsj'
            type="text"
            placeholder='Introduce el titulo'
            className='inputs inputs_txt'
          />
        </div>

        <div className='div_form'>
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
            // value='email'
          />
        </div>

        <div className="div_form">
          <label 
            htmlFor="Fecha"
          >
            Fecha
          </label>
          <input 
            type="date" 
            className="inputs inputs_txt" />
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
          >
          </textarea>
        </div>
      </form>

    </div>
  )
}

export default Formulario
