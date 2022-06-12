import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types'

const Header = ({logo}) => {
  return (
    <>
      <Link to="/"><img className="Logo" src={logo} alt="Jye Stillitano" /></Link>
      <Box
        sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            m: 1,
        },
        }}
        >
        <ButtonGroup variant="text" size="large">
            <Button component={Link} to="/Digital">Digital</Button>
            <Button component={Link} to="/Drawing">Drawing</Button>
            <Button component={Link} to="/Sculpture">Sculpture</Button>
        </ButtonGroup>
      </Box>
    </>

  )
}

Header.propTypes = {
    logo: PropTypes.string.isRequired
}

export default Header