import PropTypes from 'prop-types'

const Header = ({logo}) => {
  return (
    <img className="Logo" src={logo} alt="Jye Stillitano"/>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header