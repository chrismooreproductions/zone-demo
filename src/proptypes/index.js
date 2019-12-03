import PropTypes from 'prop-types'

const genreProp = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
})

export { genreProp }