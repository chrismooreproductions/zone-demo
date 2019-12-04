import React from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Fade from '../animated/Fade'
import '../styles/containers/_header.scss'

const Header = (props) => 
  <Fade
    displayed={props.displayed}
    className={props.className}
  >
    <Title />
  </Fade>

Header.propTypes = {
  displayed: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired
}

export default Header