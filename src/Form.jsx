import { useState } from 'react'
import PropTypes from 'prop-types'
import './App.css'
const Form = ({ addColor }) => {
  const [color, setColor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }

  return (
    <section className='container'>
      <h4>Color Generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <input
          className='color-input'
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          className='color-input-type-box'
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f15025'
        />
        <button className='btn' type='submit' style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  )
}

Form.propTypes = {
  addColor: PropTypes.func.isRequired,
}

export default Form
