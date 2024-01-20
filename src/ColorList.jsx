import PropTypes from 'prop-types'
import SingleColor from './SingleColor'
import { nanoid } from 'nanoid'
import './App.css'
const ColorList = ({ colors }) => {
  return (
    <section className='colors'>
      {colors.map((color, index) => (
        <SingleColor key={nanoid()} color={color} index={index} />
      ))}
    </section>
  )
}

ColorList.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      hex: PropTypes.string.isRequired,
      weight: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default ColorList
