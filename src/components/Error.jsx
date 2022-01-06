import React from 'react'
import styles from './Error.css'

const Error = ({ mnsjError }) => {
  return (
    <div className='error'>
      <p> {mnsjError} </p>
    </div> 
  )
}

export default Error
