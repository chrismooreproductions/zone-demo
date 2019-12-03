import React from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import withFade from '../animatedComponents/withFade'
import '../styles/containers/_header.scss'

const Header = (props) => <Title />

Header.propTypes = {
  displayed: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired
}

export default withFade(Header)