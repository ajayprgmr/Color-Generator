import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import './App.css'
const SingleColor = ({ index, color }) => {
  const { hex, weight } = color

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success('Color copied to clipboard')
      } catch (error) {
        toast.error('Failed to copy color to clipboard')
      }
    } else {
      toast.error('Clipboard access not available')
    }
  }

  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  )
}

SingleColor.propTypes = {
  index: PropTypes.number.isRequired,
  color: PropTypes.shape({
    hex: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    // Add other properties as needed based on your actual data structure
  }).isRequired,
}

export default SingleColor
