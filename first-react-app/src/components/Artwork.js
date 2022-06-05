import PropTypes from 'prop-types'

const Artwork = ({image, title, description, date}) => {
  return (
    <div className="Artwork">
      <img src={image} alt="File missing..."/>
      <h1>{title}</h1>
      <p>{description}<br />{date}</p>
    </div>
  )
}

Artwork.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.string
}

export default Artwork